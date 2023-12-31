import MenuLayout from "@/Components/layouts/MenuLayout";
import AddNew from "@/Components/projectComponents/AddNew";

const Project = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-max p-5 bord lg:p-10 w-full flex flex-col'>
      <AddNew />
    </div>
  );
};
Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
