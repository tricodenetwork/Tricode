import useDatabase from "@/hooks/useDatabase";
import useFunctions from "@/hooks/useFunctions";
import { ViewHorizontalIcon, ViewVerticalIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import MenuList from "../MenuList";
import LogOut from "../modals/LogOut";
import ModalComponent from "../modals/ModalComponent";
import NotificationModal from "../modals/NotificationModal";
import Notifications from "../modals/Notifications";
import Bell from "../svg/Bell";
import Cloud from "../svg/Cloud";
import Dashboard from "../svg/Dashboard";
import Ellipse from "../svg/Ellipse";
import Help from "../svg/Help";
import Logout from "../svg/Logout";
import Message from "../svg/Message";
import Payment from "../svg/Payment";
import Project from "../svg/Project";
import Settings from "../svg/Settings";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MenuLayout = ({ children }) => {
  // --------------------------------------------VARIABLES
  const route = useRouter();
  const { user } = useDatabase();
  const parts = route.pathname.split("menu/");
  const title = parts.length > 1 ? parts[1].split("/")[0] : "";
  const [isOpen, setIsOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const logout = route?.query?.logout;
  const notification = route?.query?.notification;

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();

  return (
    <div
      style={inter.style}
      className='w-full flex overflow-hidden flex-col justify-start bg-black text-white selection:bg-binance_green selection:text-black'
    >
      {logout && <ModalComponent Content={LogOut} />}
      {notification && <NotificationModal Content={Notifications} />}

      {/* Top Context Bar */}
      <div className='w-full bg-zinc-950 border-b border-white/5 flex items-center justify-between px-6 h-14 z-50'>
        <div className='flex items-center gap-8'>
          <Link href={"/"} className='flex items-center gap-2'>
            <Image
              loader={imageLoader}
              alt='logo'
              width={28}
              height={28}
              quality={100}
              src='/assets/images/slogo.png'
            />
            <span className='text-sm font-black tracking-tighter uppercase hidden lg:block'>
              TRICODE <span className='text-binance_green'>PRO</span>
            </span>
          </Link>
          
          <div className='hidden md:flex items-center gap-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-binance_green animate-pulse' />
              <span className='text-gray-400'>AI STATUS:</span>
              <span className='text-white'>READY</span>
            </div>
            <div className='w-px h-3 bg-white/10' />
            <div className='flex items-center gap-2'>
              <span className='text-gray-400'>ACTIVE AGENTS:</span>
              <span className='text-white'>4</span>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-binance_green/50 transition-all cursor-pointer'>
            <span className='text-xs text-gray-400'>Search / Command</span>
            <kbd className='px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-500 font-mono'>⌘K</kbd>
          </div>
          
          <div className='flex items-center gap-3'>
            <div className='relative hover:scale-105 transition-all cursor-pointer'>
              <Message />
              <div className='absolute -top-1 -right-1 w-2 h-2 rounded-full bg-binance_green border border-black' />
            </div>
            <div className='relative hover:scale-105 transition-all cursor-pointer'>
              <Link href={"?notification=true"}>
                <Bell />
                <div className='absolute -top-1 -right-1 w-2 h-2 rounded-full bg-binance_green border border-black' />
              </Link>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className='w-8 h-8 rounded-full border border-white/10 overflow-hidden cursor-pointer hover:border-binance_green/50 transition-all'
            >
              <Image
                src={user?.image ? user?.image : "/assets/icons/Ellipse.png"}
                className='object-cover'
                alt='profile'
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full relative h-[calc(100vh-3.5rem)] flex items-stretch overflow-hidden'>
        {/* Left Navigation Sidebar */}
        <motion.div
          animate={{ width: isOpen ? "240px" : "64px" }}
          className='bg-zinc-950 border-r border-white/5 flex flex-col justify-between py-6 transition-all relative z-40'
        >
          <div className='space-y-1 px-3'>
            <MenuList isOpen={isOpen} Icon={Dashboard} name={"Dashboard"} />
            <MenuList isOpen={isOpen} Icon={Project} name={"Project"} />
            <MenuList isOpen={isOpen} Icon={Message} name={"Agents"} />
            <MenuList isOpen={isOpen} Icon={Cloud} name={"Infrastructure"} />
            <MenuList isOpen={isOpen} Icon={Settings} name={"Workflows"} />
            <MenuList isOpen={isOpen} Icon={Payment} name={"Analytics"} />
            <MenuList isOpen={isOpen} Icon={Help} name={"Help"} />
          </div>
          
          <div className='px-3'>
            <MenuList isOpen={isOpen} Icon={Logout} name={"Logout"} />
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-binance_green hover:border-binance_green transition-all z-50'
          >
            {isOpen ? <ViewVerticalIcon className='w-3 h-3 text-white' /> : <ViewHorizontalIcon className='w-3 h-3 text-white' />}
          </button>
        </motion.div>

        {/* Main AI Canvas */}
        <div className='flex-1 relative overflow-y-auto scrollbar-hide bg-black'>
          <Toaster position='top-center' />
          <div className='max-w-7xl mx-auto p-8'>
            {children}
          </div>
        </div>

        {/* Right Intelligence Panel */}
        <motion.div
          animate={{ width: rightPanelOpen ? "320px" : "0px" }}
          className='bg-zinc-950 border-l border-white/5 flex flex-col overflow-hidden relative'
        >
          <div className='p-6 w-[320px]'>
            <div className='flex items-center justify-between mb-8'>
              <h5 className='text-xs font-bold text-gray-500 uppercase tracking-widest'>Intelligence</h5>
              <div className='w-2 h-2 rounded-full bg-binance_green shadow-[0_0_8px_rgba(56,163,18,0.5)]' />
            </div>

            <div className='space-y-6'>
              <div className='p-4 rounded-xl bg-binance_green/5 border border-binance_green/20'>
                <p className='text-[10px] font-bold text-binance_green uppercase mb-2'>AI Recommendation</p>
                <p className='text-xs text-gray-300 leading-relaxed'>
                  Sprint velocity has decreased by 12%. Suggested action: Re-allocate @QA-Agent to help with bottleneck in Project #42.
                </p>
              </div>

              <div className='space-y-4'>
                <h6 className='text-[10px] font-bold text-gray-500 uppercase'>Active Orchestration</h6>
                <div className='space-y-3'>
                  {[1, 2].map((i) => (
                    <div key={i} className='flex gap-3'>
                      <div className='w-1 h-10 rounded-full bg-binance_green/20 overflow-hidden'>
                        <motion.div 
                          animate={{ height: ["0%", "100%", "0%"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className='w-full bg-binance_green' 
                        />
                      </div>
                      <div>
                        <p className='text-[11px] text-white font-medium'>@DevOps-Agent</p>
                        <p className='text-[10px] text-gray-500'>Scaling Kubernetes pods...</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setRightPanelOpen(!rightPanelOpen)}
            className='absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-binance_green hover:border-binance_green transition-all z-50'
          >
            {rightPanelOpen ? <ViewHorizontalIcon className='w-3 h-3 text-white' /> : <ViewVerticalIcon className='w-3 h-3 text-white' />}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuLayout;
