import MenuLayout from "@/components/layouts/MenuLayout";
import TabsHeader from "@/pages/talent/Tabs/TabsHeader";

const Project = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-max p-5  lg:p-10 w-full flex flex-col'>
      <TabsHeader />
    </div>
  );
};

Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
