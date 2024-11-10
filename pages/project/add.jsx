import AppButton from "@/components/AppButton";
import MenuLayout from "@/components/layouts/MenuLayout";
import AddTalentsComponent from "@/components/projectComponents/AddTalentsComponent";
import useDatabase from "@/hooks/useDatabase";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { Nunito } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";
import { TeamCard } from "./[projectId]";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const Project = () => {
  // --------------------------------------------VARIABLES
  const [title, setTitle] = useState("Project One");
  const [startDate, setStartDate] = useState("20/04/2024");
  const [endDate, setEndDate] = useState("20/04/2024");
  const [addTalents, setAddTalents] = useState(false);
  const [team, AddTeamMember] = useState([]);
  const { allUsers } = useDatabase();
  const { talents } = useSelector((state) => state.users);
  console.log(talents, allUsers);

  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eligendi voluptatum rerum provident et voluptas dolores laboriosam. Cupiditate deserunt dolor sed maiores iusto minima ut nobis aliquid alias ullam. In?"
  );

  const dispatch = useDispatch();

  //-----------------------------------------------------------FUNCTIONS

  const addToProject = (talent) => {
    if (team.some((item) => item._id === talent._id)) {
      toast.error("Already added ➕");
      return team;
    }
    AddTeamMember((prev) => {
      const all = [...prev, talent];
      return all;
    });
  };
  const removeFromProject = (talent) => {
    AddTeamMember((prev) => {
      const all = prev.filter((item) => item._id !== talent._id);
      return all;
    });
  };

  const create = async () => {
    const data = { title, startDate, endDate, description, team };
    const body = JSON.stringify(data);
    const res = await axios.post("/api/create/project");
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='min-h-[91vh] h-auto px-[3%] bg-[#F9F9F9] pb-[25vh]  py-10 w-full flex flex-col'>
      <div className='flex items-center gap-[.4vw]'>
        <p className='text-grayText regular text-sm'>Home</p>
        <Image
          src={"/assets/icons/r_arr.svg"}
          width={18}
          height={18}
          alt='arrow'
        />
        <p className='text-binance_green regular text-sm'>Create Project</p>
      </div>
      <h4
        className='text-[#1b1b1b] my-[4vh] text-3xl font-semibold'
        style={nunito.style}
      >
        {title ?? "Project Zero"}
      </h4>
      {/* Project Title */}
      <div className='flex  mb-[4vh] w-[45%] flex-col'>
        <p className='text-[#1b1b1b] mb-1 regular'>{"Project Title"}</p>
        <input
          placeholder={title}
          value={title}
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          className='border focus:outline-none px-4 rounded-[12px] h-[52px] border-[#d9d9d9]'
        />
      </div>
      {/* Date Input */}
      <div className='flex w-full mb-[4vh] justify-between items-center'>
        <div className='flex relative w-[45%] flex-col'>
          <p className='text-[#1b1b1b] mb-1 regular'>{"Start Date"}</p>
          <input
            type='date'
            onChange={(e) => setStartDate(e.target.value)}
            className='border datepicker-input px-4 rounded-[12px]  h-[52px] border-[#d9d9d9]'
          />
          <input
            type='text'
            value={startDate.toString()}
            className='border semiBold text-sm px-4 rounded-[12px]  h-[52px] border-[#d9d9d9]'
          />
          <Image
            src={"/assets/icons/date.svg"}
            width={15}
            height={15}
            alt='date'
            className='absolute  bottom-[18px] right-4'
          />
        </div>
        <div className='flex relative w-[45%] flex-col'>
          <p className='text-[#1b1b1b] mb-1 regular'>{"End Date"}</p>
          <input
            type='date'
            onChange={(e) => setEndDate(e.target.value)}
            className='border datepicker-input rounded-[12px] h-[52px] border-[#d9d9d9]'
          />
          <input
            type='text'
            value={endDate}
            className='border semiBold px-4 text-sm rounded-[12px] h-[52px] border-[#d9d9d9]'
          />
          <Image
            src={"/assets/icons/date.svg"}
            width={15}
            height={15}
            alt='date'
            className='absolute bottom-[18px] right-4'
          />
        </div>
      </div>
      {/* Project Description */}
      <div className='flex mb-[4vh] flex-col'>
        <p className='text-[#1b1b1b] mb-1 regular'>{"Project Description"}</p>
        <textarea
          type='text'
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
          onChange={(e) => setDescription(e.target.value)}
          className='border px-4 py-2 focus:outline-none rounded-[12px]  h-auto border-[#d9d9d9]'
        >
          {/* {description} */}
        </textarea>
      </div>
      {/* Talents Section */}
      <section className='w-full flex mt-[1.5vh] flex-col items-center'>
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
                  talents={talents}
                />
              </OutsideClickHandler>
            ) : null}
          </AnimatePresence>
          {team.map((item, i) => (
            <TeamCard
              key={i.toString()}
              removeTalent={removeFromProject}
              action='Asign Task'
              member={item}
            />
          ))}
        </div>
      </section>
      <div className='mt-[10vh] flex items-center justify-center  gap-[3vw]'>
        <AppButton href={"/project"} title={"Cancel"} />
        <AppButton dark={false} href={"/api/project/create"} title={"Create"} />
      </div>
    </div>
  );
};
Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
