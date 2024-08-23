import MenuLayout from "@/chest/layouts/MenuLayout";
import AddNew from "@/chest/projectComponents/AddNew";

const Project = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-max p-5 lg:p-10 w-full flex flex-col'>
      <AddNew />
    </div>
  );
};
Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
