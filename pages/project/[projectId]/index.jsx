import MenuLayout from "@/components/layouts/MenuLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useDatabase from "@/hooks/useDatabase";
import Image from "next/image";
import TaskBox from "@/components/TaskBox";
import fetchGraphQLData from "@/lib/utils/fetchGraphql";
import { USERS } from "@/lib/constants/queries";

const ProjectID = () => {
  // --------------------------------------------VARIABLES
  const router = useRouter();
  const { projectId } = router.query;
  const { projects, allUsers } = useDatabase();
  const [myTasks, setMyTasks] = useState([]);

  //-----------------------------------------------------------FUNCTIONS

  const project = projects?.filter((item) => item._id == projectId)[0];
  allUsers?.forEach((item) => {
    project?.teams?.includes(item.name) && teamMembers.push(item);
  });

  //------------------------------------------------------------------USE EFFECTS
  useEffect(() => {
    // Function to get tasks for the talent
    const fetchTasks = async () => {
      let data = await fetchGraphQLData();
      if (data) {
        setMyTasks(data.users);
      }
    };

    fetchTasks();
  }, []);

  return (
    <section className=' w-[100%]  justify-center items-center p-5 lg:p-10'>
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
      <section className='flex justify-between'>
        <TaskBox></TaskBox>
      </section>
    </section>
  );
};
ProjectID.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default ProjectID;
