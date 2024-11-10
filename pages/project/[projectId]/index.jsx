import SearchComponent from "@/components/editor/SearchComponent";
import MenuLayout from "@/components/layouts/MenuLayout";
import Loader from "@/components/Loader";
import Delete from "@/components/modals/Delete";
import ModalComponent from "@/components/modals/ModalComponent";
import AddTalentsComponent from "@/components/projectComponents/AddTalentsComponent";
import Status from "@/components/Status";
import TeamMembers from "@/components/TeamMembers";
import { calculateTimeline } from "@/Data/functions";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Montserrat, Nunito_Sans, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OutsideClickHandler from "react-outside-click-handler";
import { useSelector } from "react-redux";

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

const TeamCard = ({ member, removeTalent, action = "View Profile" }) => {
  return (
    <div className='w-[25%]  flex  my-[3vh] flex-col items-center h-[270px] relative'>
      <div className='flex  items-center mb-[1vh] justify-between mx-auto w-[80%]'>
        <h6 className='medium mb-[.3vh] self-start  text-[16px] text-[#1b1b1b]'>
          {member.dept}
        </h6>
        <button
          onClick={() => removeTalent(member)}
          className='rounded-full w-[22px] active:scale-90 bg-white text-binance_green duration-75 cursor-pointer border-binance_green border text-xs h-[22px] flex items-center justify-center hover:bg-binance_green hover:text-white medium'
        >
          ×
        </button>
      </div>

      <div className='w-[90%] h-[140px]  flex flex-col  justify-center items-center rounded-[20px] shadow-[0px_4px_4px] shadow-black/25'>
        <div className='w-[88px] relative mx-auto mt-4 self-center h-[88px]'>
          <Image
            src={member.image ?? "/assets/images/team.png"}
            fill
            alt='profile_pic'
            className='object-cover rounded-full'
          />
        </div>
        <p className='regular capitalize mt-2 text-sm text-[#1b1b1b] '>
          {member.name.toLowerCase()}
        </p>
      </div>
      <button className='w-[129px] mt-5 hover:bg-binance_green duration-300 hover:text-white medium text-[12px] self-center border border-binance_green text-binance_green h-[33px] rounded-3xl'>
        {action}
      </button>
    </div>
  );
};

const ProjectID = () => {
  // --------------------------------------------VARIABLES
  const [navto, setNav] = useState("milestone");
  const [addTalents, setAddTalents] = useState(false);
  const { users } = useSelector((state) => state.users);
  const { projects } = useSelector((state) => state.projects);

  const [del, setDelete] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { projectId } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [options, ShowOptions] = useState(null);

  let teamMembers = [];
  //-----------------------------------------------------------FUNCTIONS
  const getProject = async () => {
    const res = await axios.post(`/api/get/project`, { id: projectId });
    setProject(res.data);
  };

  const addToProject = async (talent) => {
    setIsLoading(true);
    if (project?.team.some((item) => item._id === talent._id)) {
      alert("Already added ➕");
      return project?.team;
    }
    const res = await axios.post(`/api/post/add-talent`, {
      talent: talent,
      id: projectId,
    });
    // console.log(res);
    if (res.status == 200) {
      getProject();
      setAddTalents(false);

      toast.success("Added");
    }

    setIsLoading(false);
  };
  const removeFromProject = async (talent) => {
    setIsLoading(true);
    const res = await axios.post(`/api/post/remove-talent`, {
      talent: talent,
      id: projectId,
    });
    // console.log(res);
    if (res.status == 200) {
      getProject();

      toast.success("Removed");
    }
    setIsLoading(false);
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
        <Link
          href={`/project/${projectId}`}
          className='text-grayText regular text-sm'
        >
          {project?.name ?? "Project Zero"}
        </Link>
        <Image
          src={"/assets/icons/r_arr.svg"}
          width={18}
          height={18}
          alt='arrow'
        />
        {/* <p className='text-binance_green regular text-sm'>Milestones</p> */}
        <SearchComponent
          setSearch={setSearch}
          style='w-[45%] absolute self-center right-1/3'
        />
        <Link
          href={`${projectId}/${project.name}`}
          className='  border-binance_green absolute right-[3vw] self-center regular w-[15%] text-binance_white bg-binance_green hover:bg-white hover:text-binance_green duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
        >
          {"+    Add Milestone"}
        </Link>
      </div>
      <div className='flex w-full px-[1vw] mt-[4vh]  h-max justify-between items-center'>
        {/* Left title Section */}
        <div className='flex gap-[1.3vw] flex-1 items-center'>
          <h4
            className='text-[#1b1b1b]  text-3xl font-semibold'
            style={nunito.style}
          >
            {project?.name ?? "Project Zero"}
          </h4>
          {project && <Status style={"py-[1vh]"} item={project} />}
          <TeamMembers team={project?.team} />
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
        {"Milestones"}
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
        {project?.milestones
          ?.filter(
            (item) =>
              item?.name?.toLowerCase().includes(search.toLowerCase()) ?? true
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
                      {calculateTimeline(item.startDate, item.endDate)}
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
                              "Edit Milestone",
                              "View Task list",
                              "Project Report",
                            ].map((val, ind) => {
                              let click;
                              switch (val) {
                                case "Edit Milestone":
                                  click = `${projectId}/${
                                    item.name
                                  }?item=${JSON.stringify(item)}`;

                                  break;
                                case "View Task list":
                                  click = {
                                    pathname: `${projectId}/${item.name}/tasks`,
                                    query: {
                                      milestoneStatus: item.status,
                                    },
                                  };

                                  break;

                                default:
                                  click = `/project/report?id=${projectId}`;
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
      {/* Talents Section */}
      <section className='w-full flex mt-[15vh] flex-col items-center'>
        <div className='flex justify-between items-center w-[95%] mx-auto'>
          <h4 className='semiBold text-2xl text-[#1b1b1b] '>Talents</h4>
          <div className='flex items-center gap-[1vw]'>
            <p className='text-binance_green medium text-sm'>Add Talents</p>
            <button onClick={() => setAddTalents(true)}>
              <Image
                alt='add'
                width={28}
                height={28}
                className='hover:scale-95 active:scale-100'
                src={"/assets/icons/add.svg"}
              />
            </button>
          </div>
        </div>
        <div className='w-[97%] relative justify-items-start flex flex-wrap mx-auto mt-[2vh] bg-white border py-[1vh] px-[1vw] border-[#efefef] min-h-[150px] rounded-[24px]  h-auto'>
          <AnimatePresence mode='wait'>
            {addTalents ? (
              <OutsideClickHandler
                display='contents'
                onOutsideClick={() => {
                  // setTimeout(() => setAddTalents(false), 5000);
                  setAddTalents(false);
                }}
              >
                <AddTalentsComponent
                  addTalent={addToProject}
                  talents={users?.filter(
                    (item) => !teamMembers?.includes(item._id)
                  )}
                />
              </OutsideClickHandler>
            ) : null}
          </AnimatePresence>
          {project?.team?.map((item, i) => (
            <TeamCard
              key={i.toString()}
              removeTalent={removeFromProject}
              action='Asign Task'
              member={item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
ProjectID.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default ProjectID;
