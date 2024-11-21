import MenuLayout from "@/components/layouts/MenuLayout";
import { ProjectDetails } from "@/components/projectComponents/ProjectDetails";
// import ProjectDetails from "@/components/projectComponents/ProjectDetails";
import TaskBox from "@/components/TaskBox";
import useDatabase from "@/hooks/useDatabase";
import { MYTASKS, USERS } from "@/lib/constants/queries";
import fetchGraphQLData from "@/lib/utils/fetchGraphql";
import { setProject } from "@/store/slice-reducers/projectSlice";
import { ContactSupportOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProjectID = () => {
  // --------------------------------------------VARIABLESO
  const router = useRouter();
  const { projectId } = router.query;
  const [myTasks, setMyTasks] = useState([]);
  const { user } = useSelector((state) => state.user);
  const { project, projects } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS
  useEffect(() => {
    // Function to get tasks for the talent
    const fetchTasks = async () => {
      let data = await fetchGraphQLData(MYTASKS, {
        name: user.name,
        id: projectId,
      });
      if (data) {
        setMyTasks(data.mytasks);
      }
    };

    dispatch(setProject(projectId));
    fetchTasks();
  }, [projectId]);

  return (
    <section className=' w-[100%]  justify-center items-center p-5 lg:p-10'>
      <section className='bg-[#F2F2F2] rounded-[20px] p-6 mt-[19px] mb-[44px]'>
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
        <TaskBox
          data={myTasks.filter(
            (item) => item.status.toLowerCase() == "pending"
          )}
        />
        <TaskBox
          style='bg-[#FBF6E0]'
          heading='Doing'
          data={myTasks.filter(
            (item) => item.status.toLowerCase() == "ongoing"
          )}
        />
        <TaskBox
          style='bg-[#E6FBDF]'
          heading='Done'
          data={myTasks.filter(
            (item) => item.status.toLowerCase() == "completed"
          )}
        />
      </section>
      {/* <ProjectDetails project={project} /> */}
      <section>{/* <ProjectDetails project={myTasks} /> */}</section>
    </section>
  );
};
ProjectID.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default ProjectID;
