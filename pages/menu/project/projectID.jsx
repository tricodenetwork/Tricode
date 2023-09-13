import MenuLayout from "@/Components/layouts/MenuLayout";
import ProjectTransactions from "@/Components/projectComponents/projectTables/ProjectTransactions";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetails from "@/Components/projectComponents/ProjectDetails";






const ProjectID = () => {
    // --------------------------------------------VARIABLES
    const [navto, setNav] = useState('milestone')
  
    //-----------------------------------------------------------FUNCTIONS

    //------------------------------------------------------------------USE EFFECTS

    return (
        <section className='h-full w-[75%] m-auto  justify-center items-center pt-10'>
            <section className="border-gray-300 border rounded p-6  w-full">
                <div className="flex justify-between items-center w-full capitalize">
                    <div>Submitted for review</div>
                    <div>View estimates</div>
                    <div>Project started</div>
                    <div>Milestones completed</div>
                    <div>Project completed</div>
                </div>
                <div className="flex justify-between items-center w-full relative">
                    <div className="flex justify-around items-center w-full h-20">
                        <div className="w-6 h-6 bg-[#38A312] rounded-full" />
                        <div className="w-6 h-6 bg-[#38A312] rounded-full" />
                        <div className="w-6 h-6 bg-[#38A312] rounded-full" />
                        <div className="w-6 h-6 bg-gray-200 rounded-full" />
                        <div className="w-6 h-6 bg-gray-200 rounded-full" />
                    </div>
                    <div className="w-[80%] left-0 right-0 m-auto h-2 bg-gray-300 absolute -z-10 ">
                        <div className="w-[50%] h-full bg-[#38A312]  " />
                    </div>

                </div>
                <div className="flex justify-around items-center w-full h-20">
                    <div className="" >25-12-22</div>
                    <div className="" >30-12-22</div>
                    <div className="">05-01-23</div>
                    <div className="text-white" >30-12-22</div>
                    <div className="text-white">05-01-23</div>
                </div>
            </section>


            <section className="bg-[#F2F2F2] rounded p-6 my-6">
                <div className="flex gap-3 items-start justify-start">
                    <div className="font-bold">Project name:</div>
                    <div>AI Platform</div>
                </div>

                <div className="flex gap-3 items-start justify-start">
                    <div className="font-bold">Description:</div>
                    <div>Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi. Mattis eget amet vulputate augue et orci. Tristique fringilla congue sollicitudin</div>
                </div>

            </section>


            <section>
                {
                    //
                }
                <div className="flex justify-between items-center text-gray-500 text-xl font-bold">
                    <div className="flex gap-3">
                        <button className={`${navto == 'milestone' && 'text-[#38A312]'}`} onClick={() => setNav('milestone')}>Milestone</button>
                        <button className={`${navto == 'details' && 'text-[#38A312]'}`} onClick={() => setNav('details')}>Details</button>
                    </div>

                    <Link href={'chat'} className="flex gap-2">Chat <span className="w-6 h-6 text-white rounded-full justify-center items-center flex bg-[#38A312]">2</span></Link>
                </div>



                <div>
        <AnimatePresence >
          {navto === 'milestone' ? (
            <motion.div
              key="milestone"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <ProjectTransactions />
            </motion.div>
          ) : navto === 'details' ? (
            <motion.div
              key="details"
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
ProjectID.getLayout = MenuLayout;
export default ProjectID;
