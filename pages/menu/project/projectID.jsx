import MenuLayout from "@/Components/layouts/MenuLayout";
import ProjectTransactions from "@/Components/projectComponents/projectTables/ProjectTransactions";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "@/Components/projectComponents/ProjectDetails";

const ProjectID = () => {
  // --------------------------------------------VARIABLES
  const [navto, setNav] = useState("milestone");

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS
  return (
    <section className=' w-[100%] lg:w-[85%] justify-center items-center p-5 lg:p-10'>
      <section className='bg-[#F2F2F2] rounded-[5px] p-6 mt-[19px] mb-[44px]'>
        <div className='grid grid-cols-[1.5fr,3fr] lg:grid-cols-[1fr,5fr] gap-3 mb-[14px] '>
          <div className='font-semibold text-black'>Project name</div>
          <div className='light text-base'>AI Platform</div>
        </div>

        <div className='grid grid-cols-[1.5fr,3fr] lg:grid-cols-[1fr,5fr] gap-3 '>
          <div className='font-semibold  flex justify-start items-center text-black'>
            Description
          </div>
          <div className='light text-xs text-black'>
            Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac
            non diam venenatis aenean nulla eu sagittis scelerisque facilisi.
            Mattis eget amet vulputate augue et orci. Tristique fringilla congue
            sollicitudin
          </div>
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
            <div className='w-6  h-6 bg-[#38A312] rounded-full' />
            <div className='w-6  h-6 bg-[#38A312] rounded-full' />
            <div className='w-6  h-6 bg-gray-200 rounded-full' />
            <div className='w-6  h-6 bg-gray-200 rounded-full' />
          </div>
          <div className='w-[80%] hidden lg:flex left-0 right-0 m-auto h-2  bg-gray-300 absolute -z-10 '>
            <div className='w-[50%] h-full bg-[#38A312]  ' />
          </div>
          <div className='w-2 h-[80%] flex lg:hidden self-center justify-self-center top-1/2 -translate-y-1/2   bg-gray-300 absolute -z-10 '>
            <div className='w-full h-[50%] bg-[#38A312]  ' />
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
                <ProjectTransactions />
              </motion.div>
            ) : navto === "details" ? (
              <motion.div
                key='details'
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <ProjectDetails />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </section>
    </section>
  );
};
ProjectID.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default ProjectID;
