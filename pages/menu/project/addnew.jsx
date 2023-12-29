import MenuLayout from "@/Components/layouts/MenuLayout";
import AddNew from "@/Components/projectComponents/AddNew";

const Project = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-full flex scrollbar-hide justify-center items-center'>
      <AddNew />
    </div>
  );
};
Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
