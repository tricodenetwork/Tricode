import MenuLayout from "@/components/layouts/MenuLayout";
import ProjectTransactions from "@/components/projectComponents/projectTables/ProjectTransactions";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "@/components/projectComponents/ProjectDetails";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useDatabase from "@/hooks/useDatabase";
import Image from "next/image";

const TeamCard = ({ member }) => {
  return (
    <div className='w-[217px] flex flex-col items-center h-[250px] relative'>
      <h6 className='regular mb-2 text-[16px] text-[#131418]'>{member.dept}</h6>
      <p className='regular mb-2 text-xs text-binance_ash medium'>
        {member.name}
      </p>
      <div className='w-[90%] h-[140px] flex  justify-center items-center rounded-[20px] shadow-md shadow-slate-400'>
        <div
          className='w-[88px] relative mx-auto mt-4 self-center h-[88px]'
          src={member.image}
          alt='team-member'
        >
          <Image
            src={"/assets/images/team.png"}
            fill
            alt='profile_pic'
            className='object-cover'
          />
        </div>
      </div>
      <button className='w-[129px] mt-5 hover:bg-binance_green duration-300 hover:text-white medium text-[12px] self-center border border-binance_green text-binance_green h-[33px] rounded-3xl'>
        View Profile
      </button>
    </div>
  );
};

const members = [
  { title: "Project Manager", src: "/assets/images/team.png" },
  { title: "Researcher", src: "/assets/images/team.png" },
  { title: "Marketer", src: "/assets/images/team.png" },
  { title: "Front-end Dev", src: "/assets/images/team.png" },
  { title: "UI/UX Designer", src: "/assets/images/team.png" },
  { title: "Researcher", src: "/assets/images/team.png" },
  { title: "Marketer", src: "/assets/images/team.png" },
  { title: "Front-end Dev", src: "/assets/images/team.png" },
  { title: "Project Manager", src: "/assets/images/team.png" },
  { title: "Researcher", src: "/assets/images/team.png" },
  { title: "Marketer", src: "/assets/images/team.png" },
  { title: "Front-end Dev", src: "/assets/images/team.png" },
  { title: "UI/UX Designer", src: "/assets/images/team.png" },
  { title: "Researcher", src: "/assets/images/team.png" },
  { title: "Marketer", src: "/assets/images/team.png" },
  { title: "Front-end Dev", src: "/assets/images/team.png" },
];

const ProjectID = () => {
  // --------------------------------------------VARIABLES
  const [navto, setNav] = useState("milestone");
  const router = useRouter();
  const { projectId } = router.query;
  const { projects, allUsers } = useDatabase();
  let teamMembers = [];

  //-----------------------------------------------------------FUNCTIONS

  const project = projects?.filter((item) => item._id == projectId)[0];
  allUsers?.forEach((item) => {
    project?.teams?.includes(item.name) && teamMembers.push(item);
  });

  //------------------------------------------------------------------USE EFFECTS
  return (
    <section className=' w-[100%] lg:w-[85%] justify-center items-center p-5 lg:p-10'>
      <section className='bg-[#F2F2F2] rounded-[5px] p-6 mt-[19px] mb-[44px]'>
        <div className='grid grid-cols-[1.5fr,3fr] lg:grid-cols-[1fr,5fr] gap-3 mb-[14px] '>
          <div className='font-semibold text-black'>Project name</div>
          <div className='light text-base '>{project?.name}</div>
        </div>

        <div className='grid grid-cols-[1.5fr,3fr] lg:grid-cols-[1fr,5fr] gap-3 '>
          <div className='font-semibold  flex justify-start items-center text-black'>
            Description
          </div>
          <div className='light text-xs text-black'>{project?.description}</div>
        </div>
      </section>
      <section className='shadow-[0px_0px_10px_#d9d9d9]  flex flex-row lg:flex-col border rounded-[10px] p-6 py-5 h-[50vh] lg:h-max lg:py-10 mb-[44px] w-full'>
        <div className='grid grid-rows-5 lg:grid-cols-5 lg:grid-rows-1  place-items-start lg:place-items-center font-semibold  w-full'>
          <p className='w-[80%] py-3 lg:py-0 lg:w-[95px] text-black text-left lg:text-center text-xs font-semibold'>
            Submitted for review
          </p>
          <p className='w-[80%] py-3 lg:py-0 lg:w-[60px] text-black text-left lg:text-center text-xs font-semibold'>
            View estimates
          </p>
          <p className='w-[80%] py-3 lg:py-0 lg:w-[95px] text-black text-left lg:text-center text-xs font-semibold'>
            Project started
          </p>
          <p className='w-[80%] py-3 lg:py-0 lg:w-[95px] text-black text-left lg:text-center text-xs font-semibold'>
            Milestones completed
          </p>
          <p className='w-[60%] py-3 lg:py-0 lg:w-[95px] text-black text-left lg:text-center text-xs font-semibold'>
            Project completed
          </p>
        </div>
        <div className='flex justify-between flex-col lg:flex-row items-center w-full relative'>
          <div className='lg:grid flex  items-center justify-around lg:grid-cols-5 lg:grid-rows-1 flex-col place-items-start lg:place-items-center place-content-center w-20 lg:w-full h-full lg:h-20'>
            <div className='w-6  h-6 bg-[#38A312] rounded-full' />
            <div className='w-6  h-6 bg-gray-200 rounded-full' />
            <div className='w-6  h-6 bg-gray-200 rounded-full' />
            <div className='w-6  h-6 bg-gray-200 rounded-full' />
            <div className='w-6  h-6 bg-gray-200 rounded-full' />
          </div>
          <div className='w-[80%] hidden lg:flex left-0 right-0 m-auto h-2  bg-gray-300 absolute -z-10 '>
            <div className='w-[1%] h-full bg-[#38A312]  ' />
          </div>
          <div className='w-2 h-[80%] flex lg:hidden self-center justify-self-center top-1/2 -translate-y-1/2   bg-gray-300 absolute -z-10 '>
            <div className='w-full h-[1%] bg-[#38A312]  ' />
          </div>
        </div>
        <div className='lg:grid flex flex-col items-center justify-around lg:grid-cols-5 place-items-center w-full'>
          <p className='text-black text-center text-xs font-semibold'>
            25-12-22
          </p>
          <p className='text-black text-center text-xs font-semibold'>
            30-12-22
          </p>
          <p className='text-black text-center text-xs font-semibold'>
            05-01-23
          </p>
          <p className='text-blac text-center text-xs font-semibold text-white'>
            30-12-22
          </p>
          <p className='text-blac text-center text-xs font-semibold text-white'>
            05-01-23
          </p>
        </div>
      </section>

      <section>
        <div className='flex justify-between items-center text-gray-500  font-bold'>
          <div className='flex '>
            <button
              className={`${
                navto == "milestone" && "text-[#38A312]"
              } text-lg lg:text-[24px] mr-[7vw] lg:mr-[64px]`}
              onClick={() => setNav("milestone")}
            >
              Milestone
            </button>
            <button
              className={`${
                navto == "details" ? "text-[#38A312]" : "text-[#bdbdbd]"
              } text-lg lg:text-[24px] `}
              onClick={() => setNav("details")}
            >
              Details
            </button>
          </div>

          <Link
            href={"chat"}
            className='flex gap-2 text-lg lg:text-2xl text-[#bdbdbd] duration-200 hover:text-binance_green active:scale-90 hover:scale-105 items-center'
          >
            Chat{" "}
            <span className='lg:w-6 lg:h-6 w-4 h-4  text-white lg:text-xs text-[10px]   rounded-full justify-center items-center flex bg-[#38A312]'>
              2
            </span>
          </Link>
        </div>

        <div>
          <AnimatePresence>
            {navto === "milestone" ? (
              <motion.div
                key='milestone'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <ProjectTransactions project={project} />
              </motion.div>
            ) : navto === "details" ? (
              <motion.div
                key='details'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <ProjectDetails project={project} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </section>
      <div className='bg-[#DADADA] w-[50%] h-[2px] mx-auto mt-12 mb-14' />
      <section className=' w-full lg:w-[996px] mt-8   py-4  scrollbar-hide h-max border-[#EFEFEF] border-[0.5px] rounded-3xl self-center'>
        <h6 className='semiBold text-lg lg:text-[24px] my-5 text-left text-[#2b2b2b] pl-10 w-full'>
          {"Team"}
        </h6>
        <div className='w-full flex mt-10 flex-wrap gap-3 justify-center'>
          {teamMembers?.map((member, i) => {
            return <TeamCard key={i.toString()} member={member} />;
          })}
        </div>
      </section>
    </section>
  );
};
ProjectID.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default ProjectID;
