import MenuLayout from "@/components/layouts/MenuLayout";
import AddNew from "@/components/projectComponents/AddNew";
import ProjectReport from "@/components/projectComponents/ProjectReport";

const report = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-max p-5  lg:p-10 w-full flex flex-col'>
      <ProjectReport />
    </div>
  );
};
report.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default report;
