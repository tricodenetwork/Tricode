import MenuLayout from "@/components/layouts/MenuLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useDatabase from "@/hooks/useDatabase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { CircleLoader } from "react-spinners";
import Image from "next/image";

const AgentStatusCard = ({ name, role, status, progress }) => {
  const statusColors = {
    Idle: "bg-gray-500",
    Thinking: "bg-blue-500",
    Executing: "bg-binance_green",
    Waiting: "bg-orange-500",
    "Requires Approval": "bg-purple-500",
    Failed: "bg-red-500",
    Completed: "bg-binance_green",
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
      className='p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all'
    >
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-3'>
          <div className='relative'>
            <div className='w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10'>
              <span className='text-xs font-bold text-binance_green'>{name[1]}</span>
            </div>
            <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-black ${statusColors[status] || "bg-gray-500"} ${status === "Thinking" ? "animate-pulse" : ""}`} />
          </div>
          <div>
            <h4 className='text-sm font-bold text-white'>{name}</h4>
            <p className='text-[10px] text-gray-500 uppercase font-mono'>{role}</p>
          </div>
        </div>
        <div className='text-right'>
          <p className='text-[10px] text-gray-500 uppercase font-mono'>Progress</p>
          <p className='text-xs font-bold text-white'>{progress}%</p>
        </div>
      </div>
      
      <div className='w-full h-1 bg-white/5 rounded-full overflow-hidden'>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className={`h-full ${statusColors[status] || "bg-binance_green"}`}
        />
      </div>
      
      <div className='mt-4 flex items-center justify-between'>
        <span className='text-[10px] text-gray-500 font-medium'>{status}</span>
        <span className='text-[10px] text-binance_green font-mono tracking-tighter'>0.42ms / CPU</span>
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  const { user } = useDatabase();
  const router = useRouter();

  if (!user) {
    return (
      <div className='flex flex-col justify-center items-center w-full h-[80vh]'>
        <CircleLoader loading={true} color='#38A312' />
      </div>
    );
  }

  return (
    <div className='space-y-10 pb-20'>
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='flex flex-col md:flex-row md:items-end justify-between gap-6'
      >
        <div>
          <h2 className='text-3xl font-black text-white tracking-tighter uppercase mb-2'>
            Agent Command <span className='text-binance_green'>Center</span>
          </h2>
          <p className='text-gray-500 text-sm'>
            Orchestrating autonomous technical execution across {user?.fullName || "Workspace"}.
          </p>
        </div>
        
        <div className='flex items-center gap-4 text-[10px] font-mono'>
          <div className='px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center gap-1'>
            <span className='text-gray-500 uppercase'>System Load</span>
            <span className='text-white font-bold'>24%</span>
          </div>
          <div className='px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center gap-1'>
            <span className='text-gray-500 uppercase'>Execution Cost</span>
            <span className='text-binance_green font-bold'>$0.042 / hr</span>
          </div>
        </div>
      </motion.div>

      {/* Agent Status Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <AgentStatusCard name='@PM-Agent' role='Project Manager' status='Thinking' progress={65} />
        <AgentStatusCard name='@Dev-Agent' role='Software Engineer' status='Executing' progress={88} />
        <AgentStatusCard name='@QA-Agent' role='QA Engineer' status='Idle' progress={100} />
        <AgentStatusCard name='@DevOps-Agent' role='Infrastructure' status='Waiting' progress={12} />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Activity Feed */}
        <div className='lg:col-span-2 space-y-4'>
          <h3 className='text-xs font-bold text-gray-500 uppercase tracking-widest px-1'>Live Activity Feed</h3>
          <div className='space-y-3'>
            {[
              { agent: "@Dev-Agent", action: "Pushed changes to", target: "tricode-pro-core/auth", time: "2m ago", type: "code" },
              { agent: "@PM-Agent", action: "Analyzed sprint velocity for", target: "Project Alpha", time: "15m ago", type: "analytics" },
              { agent: "@DevOps-Agent", action: "Detected high memory on", target: "staging-redis-01", time: "24m ago", type: "alert" },
              { agent: "@QA-Agent", action: "Completed regression test for", target: "v1.2.4-hotfix", time: "1h ago", type: "test" },
            ].map((activity, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className='p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between group hover:border-white/10 transition-all'
              >
                <div className='flex items-center gap-4'>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 ${activity.type === 'alert' ? 'bg-red-500/10 text-red-500' : 'bg-binance_green/10 text-binance_green'}`}>
                    <span className='text-[10px] font-black'>A</span>
                  </div>
                  <div>
                    <p className='text-xs text-white'>
                      <span className='font-bold text-binance_green'>{activity.agent}</span> {activity.action} <span className='text-gray-300 font-medium'>{activity.target}</span>
                    </p>
                    <p className='text-[10px] text-gray-500 mt-0.5'>{activity.time}</p>
                  </div>
                </div>
                <button className='opacity-0 group-hover:opacity-100 px-3 py-1 rounded bg-white/5 text-[10px] text-gray-400 hover:text-white transition-all border border-white/10'>
                  Inspect
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Intelligence Panel */}
        <div className='space-y-4'>
          <h3 className='text-xs font-bold text-gray-500 uppercase tracking-widest px-1'>Active Orchestrations</h3>
          <div className='p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-binance_green/10 to-transparent space-y-6'>
            <div className='space-y-2'>
              <div className='flex justify-between text-[10px] font-bold uppercase'>
                <span className='text-gray-400'>Global Deployment</span>
                <span className='text-binance_green'>In Progress</span>
              </div>
              <div className='w-full h-1 bg-white/5 rounded-full overflow-hidden'>
                <motion.div 
                  animate={{ width: ["10%", "90%", "40%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className='h-full bg-binance_green' 
                />
              </div>
            </div>

            <div className='space-y-4 pt-4 border-t border-white/5'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-binance_green' />
                <span className='text-xs text-gray-300'>4 Nodes Synchronized</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-blue-500' />
                <span className='text-xs text-gray-300'>Context Memory Loaded</span>
              </div>
              <div className='flex items-center gap-3 text-gray-500 grayscale'>
                <div className='w-2 h-2 rounded-full bg-gray-500' />
                <span className='text-xs'>External API Mesh Offline</span>
              </div>
            </div>

            <button className='w-full py-3 rounded-xl bg-binance_green text-black font-black text-xs uppercase hover:opacity-90 transition-all'>
              Initialize Global Orchestration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = (page) => <MenuLayout>{page}</MenuLayout>;

export default Dashboard;
