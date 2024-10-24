import MenuLayout from "@/components/layouts/MenuLayout";
import ProjectTable from "@/components/projectComponents/projectTables/ProjecctTable";

const Project = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-max p-5  lg:p-10 w-full flex flex-col'>
      <ProjectTable />
    </div>
  );
};

Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
