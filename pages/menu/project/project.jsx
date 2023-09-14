import MenuLayout from "@/Components/layouts/MenuLayout";
import ProjectTable from "@/Components/projectComponents/projectTables/ProjecctTable";

const Project = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-full flex justify-center items-center w-full pt-10'>
     <ProjectTable/>
    </div>
  );
};
Project.getLayout = MenuLayout;
export default Project;
