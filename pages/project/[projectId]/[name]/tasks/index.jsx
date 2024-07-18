import MenuLayout from "@/components/layouts/MenuLayout";
import ProjectTransactions from "@/components/projectComponents/projectTables/ProjectTransactions";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetails from "@/components/projectComponents/ProjectDetails";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useDatabase from "@/hooks/useDatabase";
import Image from "next/image";
import AddTalentsComponent from "@/components/projectComponents/AddTalentsComponent";
import OutsideClickHandler from "react-outside-click-handler";
import SearchComponent from "@/components/editor/SearchComponent";
import { Nunito, Nunito_Sans, Roboto } from "next/font/google";
import Status from "@/components/Status";
import TeamMembers from "@/components/TeamMembers";
import Loader from "@/components/Loader";
import { Montserrat } from "next/font/google";
import AppButton from "@/components/AppButton";
import { calculateTimeline } from "@/Data/functions";
import ModalComponent from "@/components/modals/ModalComponent";
import LogOut from "@/components/modals/LogOut";
import Delete from "@/components/modals/Delete";
import axios from "axios";

// const nunito = Nunito({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600"],
// });
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
});
const serrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
});
const rob = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const TaskList = () => {
  // --------------------------------------------VARIABLES
  const router = useRouter();
  const { name, projectId, item } = router.query;
  const milestone = JSON.parse(item);
  const [navto, setNav] = useState("milestone");
  const [addTalents, setAddTalents] = useState(false);
  const [del, setDelete] = useState(false);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { projects, allUsers } = useDatabase();
  const [project, setProject] = useState(null);
  const [options, ShowOptions] = useState(null);

  let teamMembers = [];

  //-----------------------------------------------------------FUNCTIONS
  const getProject = async () => {
    const res = await axios.post(`/api/get/project`, { id: projectId });
    console.log("res", res);
    setProject(res.data);
    // AddTeamMember(res.data.team);
  };
  const deleteMilestone = async () => {
    setIsLoading(true);
    const res = await axios.post(`/api/milestones/delete`, {
      name: del,
      id: projectId,
    });
    // console.log(res);
    if (res.status == 200) {
      getProject();

      // alert("Removed ✅");
      // setIsLoading(false);
      // setDelete(false);
    }
    // setTimeout(() => {
    setIsLoading(false);
    setDelete(false);
    // }, 3000);
  };

  //------------------------------------------------------------------USE EFFECTS

  useEffect(() => {
    if (projects) {
      const data = projects.find((item) => item._id === projectId);
      setProject(data);
    }
  }, [projects]);

  if (!project) {
    return <Loader />;
  }
  return (
    <div className='min-h-[91vh] relative h-auto px-[3%] bg-[#F9F9F9] pb-[25vh]  pt-8 w-full flex flex-col'>
      {del && (
        <ModalComponent
          close={() => setDelete(false)}
          Content={
            <Delete
              deleteProject={deleteMilestone}
              close={() => setDelete(false)}
            />
          }
        />
      )}
      {isLoading && (
        <motion.p
          initial={{ x: "0%" }}
          animate={{ x: "150%" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className='text-binance_white text-[10px] leading-snug medium fixed top-[85.3vh] ml-1 z-[100]'
        >
          {"</>"}
        </motion.p>
      )}
      {isLoading && (
        <button className='fixed cursor-wait bg-binance_black/70 rounded-md z-50 top-[85vh] w-[4vw] 3xl:w-[2vw] 3xxl:w-[2vw] h-[4vw]'>
          <Loader />
        </button>
      )}
      <div className='flex relative  items-center gap-[.4vw]'>
        <p className='text-grayText regular text-sm'>
          {project?.name ?? "Project Zero"}
        </p>
        <Image
          src={"/assets/icons/r_arr.svg"}
          width={18}
          height={18}
          alt='arrow'
        />
        <p className='text-grayText regular text-sm'>{milestone.name}</p>
        <Image
          src={"/assets/icons/r_arr.svg"}
          width={18}
          height={18}
          alt='arrow'
        />
        <p className='text-binance_green regular text-sm'>Tasks</p>
        <SearchComponent
          setSearch={setSearch}
          style='w-[45%] ml-[5%] self-center right-1/3'
        />
        <Link
          href={`${projectId}/${project.name}?name=${project.name}`}
          className='  border-binance_green absolute right-[3vw] self-center regular w-[12%] text-binance_white bg-binance_green hover:bg-white hover:text-binance_green duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
        >
          {"+ Add Task"}
        </Link>
      </div>
      <div className='flex w-full px-[1vw]  mt-[4vh]  h-max justify-between items-center'>
        {/* Left title Section */}
        <div className='flex gap-[.5vh]  flex-col  flex-1 items-start'>
          <h4
            className='text-[#1b1b1b]  text-3xl font-bold'
            style={nunito.style}
          >
            {milestone?.name ?? "Milestone"}
          </h4>
          <div className='flex gap-[1.3vw] items-center'>
            {milestone && <Status style={"py-[1vh]"} item={milestone} />}
            <TeamMembers team={project?.team} />
          </div>
        </div>
        {/* Right title Section */}

        <div className='flex gap-[2vw] items-center'>
          <div className='flex flex-col items-center gap-[1vh]'>
            <p className='text-grayText text-sm 3xl:text-base font-medium'>
              Time spent
            </p>
            <div className='flex bg-[#E6F1E9] rounded-[20px] p-[.7vh] px-[.5vw] gap-[1vw] items-center'>
              <Image
                src={"/assets/icons/green_time.svg"}
                alt='time'
                width={19}
                height={19}
              />
              <p className='text-binance_green text-sm 3xl:text-base  font-medium'>
                2M : 0W : 0D
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-[1vh]'>
            <p className='text-grayText text-sm 3xl:text-base font-medium'>
              Deadline
            </p>
            <div className='flex bg-[#F4D7DA] rounded-[20px] p-[.7vh] px-[.5vw] gap-[1vw] items-center'>
              <Image
                src={"/assets/icons/red_time.svg"}
                alt='time'
                width={19}
                height={19}
              />
              <p className='text-appRed text-sm 3xl:text-base  font-medium'>
                2M : 0W : 0D
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4
        className='text-[#1b1b1b] px-[1.2vw] text-3xl font-semibold'
        style={nunito.style}
      >
        {"Task List"}
      </h4>
      <div className='w-full flex flex-col'>
        <div className='grid py-[3vh] border-b-[3px] border-black grid-cols-[.15fr,.35fr,.15fr,.2fr,.05fr]'>
          <div
            style={serrat.style}
            className='flex items-center font-bold text-sm justify-center'
          >
            ID
          </div>
          <div
            style={serrat.style}
            className='flex items-center font-bold text-sm justify-center'
          >
            Details
          </div>
          <div
            style={serrat.style}
            className='flex items-center font-bold text-sm justify-center'
          >
            Status
          </div>
          <div
            style={serrat.style}
            className='flex items-center font-bold text-sm justify-center'
          >
            Timeline
          </div>
          <div
            style={serrat.style}
            className='flex items-center font-bold text-sm justify-center'
          ></div>
        </div>
        {milestone?.tasks
          ?.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ?? true
          )
          .map((item, i) => {
            return (
              <div
                key={i.toString()}
                className='relative grid py-[3vh] z-20 hover:cursor-auto duration-75 border-b-[1px] border-black/50 grid-cols-[.15fr,.35fr,.15fr,.2fr,.05fr]'
              >
                <div
                  style={rob.style}
                  className='flex items-center font-bold text-sm justify-center'
                >
                  #PMM100
                </div>
                <div
                  style={serrat.style}
                  className='flex flex-col items-start pl-[1vw] gap-[1vh] font-bold text-sm justify-around'
                >
                  {item.name}
                  <p
                    style={rob.style}
                    className='text-[#1b1b1b]  font-normal text-xs '
                  >
                    Opened 10 days ago by{" "}
                    <span className='font-bold'>Yash Ghori</span>
                  </p>
                </div>
                <div
                  style={serrat.style}
                  className='flex items-center font-bold text-sm justify-center'
                >
                  <Status style={"py-[1vh]"} item={item} />
                </div>
                <div
                  style={serrat.style}
                  className='flex items-center font-bold text-sm justify-center'
                >
                  <div className='flex bg-[#ebebeb] rounded-[20px] p-[.7vh] px-[.5vw] gap-[1vw] items-center'>
                    <Image
                      src={"/assets/icons/black_time.svg"}
                      alt='time'
                      width={19}
                      height={19}
                    />
                    <p className='text-[#1b1b1b] text-sm 3xl:text-base  font-semibold'>
                      {/* {calculateTimeline(item.startDate, item.endDate)} */}
                    </p>
                  </div>
                </div>
                <div
                  style={serrat.style}
                  className='flex items-center font-bold text-sm justify-start pl-[2vw]'
                >
                  <button
                    className='w-[100%] h-[50%] flex justify-center items-center'
                    onClick={() => ShowOptions(i)}
                  >
                    <Image
                      src={"/assets/icons/menu.svg"}
                      alt='menu'
                      width={16}
                      height={4}
                    />
                    <AnimatePresence mode='wait'>
                      {options === i && (
                        <OutsideClickHandler
                          onOutsideClick={() => ShowOptions(null)}
                        >
                          <motion.div
                            initial={{ height: "0%" }}
                            animate={{ height: "auto" }}
                            className='flex flex-col  z-50 overflow-hidden bg-white rounded-[4px] w-auto absolute top-[0px]  -right-0  h-auto   shadow-[0px_2px_8px] shadow-black/25'
                          >
                            {[
                              "Edit Task",
                              "Mark as Complete",
                              "Mark as Incomplete",
                            ].map((val, ind) => {
                              let click;
                              switch (val) {
                                case "Edit Task":
                                  click = `${projectId}/add?item=${JSON.stringify(
                                    item
                                  )}`;

                                  break;
                                case "Mark as Complete":
                                  click = {
                                    pathname: `${projectId}`,
                                    query: {
                                      delete: "true",
                                    },
                                  };

                                  break;
                                case "Mark as Inomplete":
                                  click = {
                                    pathname: `${projectId}`,
                                    query: {
                                      delete: "true",
                                    },
                                  };

                                  break;

                                default:
                                  click = `/report`;
                                  break;
                              }
                              if (!val?.includes("Delete")) {
                                return (
                                  <Link
                                    href={click}
                                    key={ind.toString()}
                                    className='text-grayText pr-[1.5vw] z-[100] text-start w-full hover:bg-grayText/25 cursor-pointer  px-[1.5vw] regular font-normal py-[1vh] border-b border-grayText/50 '
                                  >
                                    {val}
                                  </Link>
                                );
                              } else {
                                return (
                                  <button
                                    onClick={() => setDelete(item.name)}
                                    key={ind.toString()}
                                    className='text-grayText pr-[1.5vw] text-start w-full hover:bg-grayText/25 cursor-pointer  px-[1.5vw] regular font-normal py-[1vh] border-b border-grayText/50 '
                                  >
                                    {val}
                                  </button>
                                );
                              }
                            })}
                          </motion.div>
                        </OutsideClickHandler>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
TaskList.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default TaskList;
