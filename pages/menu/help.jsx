import MenuLayout from "@/Components/layouts/MenuLayout";
import ProjectTable from "@/Components/projectComponents/projectTables/ProjecctTable";
import MessageItem from "@/components/chatComponents/MessageItem";

const Project = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-max p-5  lg:p-10 w-full flex flex-col'>
      <div className='w-[90%] lg:w-[75%] border-2 self-center  border-binance_green rounded-[17px] h-[656px] overflow-y-hidden'>
        <h6 className='bg-binance_green h-[8%] flex items-center px-[68px] text-white w-full text-center lg:text-left'>
          Send us a message
        </h6>
        <div className='pt-[5vh]'>
          <MessageItem img={"/assets/images/help.svg"} text={""} />
        </div>
      </div>
    </div>
  );
};

Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
