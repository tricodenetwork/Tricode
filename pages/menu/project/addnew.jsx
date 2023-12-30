import MenuLayout from "@/Components/layouts/MenuLayout";
import AddNew from "@/Components/projectComponents/AddNew";

const Project = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-max w-full'>
      <AddNew />
    </div>
  );
};
Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
