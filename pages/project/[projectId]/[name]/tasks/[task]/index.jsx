import MenuLayout from "@/components/layouts/MenuLayout";
import AddNew from "@/components/projectComponents/AddNew";
import Image from "next/image";
import { Nunito } from "next/font/google";
import { useEffect, useState } from "react";
import { setDate } from "@/store/slice-reducers/reportSlice";
import { useDispatch, useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import AppButton from "@/components/AppButton";
import AddTalentsComponent from "@/components/projectComponents/AddTalentsComponent";
import OutsideClickHandler from "react-outside-click-handler";
import useDatabase from "@/hooks/useDatabase";
import { AnimatePresence } from "framer-motion";
import { TeamCard } from "@/pages/menu/project/[projectId]";
import axios from "axios";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import toast from "react-hot-toast";
import Link from "next/link";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const Project = () => {
  // --------------------------------------------VARIABLES
  const router = useRouter();
  const { name, projectId, item } = router.query;
  const task = item ? JSON.parse(item) : {};
  const [title, setTitle] = useState(task?.name ?? null);
  const [startDate, setStartDate] = useState(task?.startDate ?? null);
  const [endDate, setEndDate] = useState(task?.endDate ?? null);
  const [addTalents, setAddTalents] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [talent, setTalent] = useState(null);
  const { allUsers } = useDatabase();
  const { talents } = useSelector((state) => state.users);
  // console.log(project);
  const [team, AddTeamMember] = useState(project?.team ?? []);
  const teamMembers = project?.team?.map((item) => item._id);

  const [description, setDescription] = useState(task?.description ?? "");

  const dispatch = useDispatch();
  console.log(router.pathname);

  //-----------------------------------------------------------FUNCTIONS

  const getProject = async () => {
    const res = await axios.post(`/api/get/project`, { id: projectId });
    console.log("res", res);
    setProject(res.data);
  };

  const addTask = async () => {
    const data = {
      name: title,
      startDate,
      endDate,
      description,
      talent,
      status: "Pending",
    };

    const requiredFields = ["name", "startDate", "endDate", "description"];
    for (const field of requiredFields) {
      if (!data[field]) {
        toast.error(`${field} is required`);
      }
    }
    setIsLoading(true);

    const res = await axios.post("/api/tasks/create", {
      milestone: name,
      id: projectId,
      task: data,
    });
    console.log(res);
    if (res.status == 200) {
      toast.success("Added");
      setIsLoading(false);
    }
    if (res.status == 400) {
      setIsLoading(false);
      toast.error(res?.response?.data);
    }

    setIsLoading(false);
    router.back();
  };
  const editTask = async () => {
    const data = {
      name: title,
      startDate,
      endDate,
      description,
      talent,
    };
    const requiredFields = ["name", "startDate", "endDate", "description"];
    for (const field of requiredFields) {
      if (!data[field]) {
        toast.error(`${field} is required`);
        return;
      }
    }
    setIsLoading(true);

    const res = await axios.post("/api/tasks/update", {
      milestone: name,
      id: projectId,
      task: data,
    });
    console.log(res);
    if (res.status == 200) {
      toast.success("Updated");
      setIsLoading(false);
    }
    if (res.status == 400) {
      setIsLoading(false);
      throw Error(res?.response?.data);
    }

    setIsLoading(false);
    router.back();
  };
  const deleteTask = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`/api/tasks/delete`, {
        task: task?.name,
        id: projectId,
        milestone: name,
      });
      if (res.status == 200) {
        toast.success("Deleted");
        setIsLoading(false);
        router.back();
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error.response);
      setIsLoading(false);
    }
  };

  const handleStartDateChange = (e) => {
    const newStartDate = e;
    if (endDate && new Date(newStartDate) > new Date(endDate)) {
      toast.error("Start date cannot be greater than end date.");
      return;
    }
    setStartDate(newStartDate);
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e;
    if (startDate && new Date(newEndDate) < new Date(startDate)) {
      toast.error("End date cannot be earlier than start date.");
      return;
    }
    setEndDate(newEndDate);
  };

  //------------------------------------------------------------------USE EFFECTS
  useEffect(() => {
    getProject();
  }, [team]);

  return (
    <div className='min-h-[91vh] relative h-auto px-[3%] bg-[#F9F9F9] pb-[25vh]  py-10 w-full flex flex-col'>
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
      <div className='flex relative items-center gap-[.4vw]'>
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

        <button
          onClick={() => router.back()}
          className={`${
            task?.name || router.pathname.includes("tasks")
              ? "text-grayText"
              : "text-binance_green"
          } regular text-sm`}
        >
          {name}
        </button>
        <Image
          src={"/assets/icons/r_arr.svg"}
          width={18}
          height={18}
          alt='arrow'
        />

        <p className='text-binance_green regular text-sm'>
          {task?.name ? task.name : "New Task"}
        </p>
      </div>
      <h4
        className='text-[#1b1b1b] my-[4vh] text-3xl font-semibold'
        style={nunito.style}
      >
        {title ?? "New Task"}
      </h4>
      {/* Project Title */}
      <div className='flex w-full mb-[4vh] justify-between items-center'>
        <div className='flex  mb-[4vh] w-[45%] flex-col'>
          <p className='text-[#1b1b1b] mb-1 regular'>{"Milestone"}</p>
          <input
            placeholder={name}
            value={name}
            type='text'
            readOnly
            className='border capitalize focus:outline-none text-grayText semiBold text-sm px-4 rounded-[12px] h-[52px] border-[#d9d9d9]'
          />
        </div>
        <div className='flex  mb-[4vh] w-[45%] flex-col'>
          <p className='text-[#1b1b1b] mb-1 regular'>{"Task Title"}</p>
          <input
            placeholder={"Wireframing"}
            value={title}
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            className='border focus:outline-none px-4 text-[#1b1b1b] text-sm semiBold rounded-[12px] h-[52px] border-[#d9d9d9]'
          />
        </div>
      </div>
      {/* Date Input */}
      <div className='flex w-full mb-[4vh] justify-between items-center'>
        <div className='flex relative w-[45%] flex-col'>
          <p className='text-[#1b1b1b] mb-1 regular'>{"Start Date"}</p>
          <input
            type='date'
            onChange={(e) => handleStartDateChange(e.target.value)}
            className='border datepicker-input px-4 rounded-[12px]  h-[52px] border-[#d9d9d9]'
          />
          <input
            type='text'
            readOnly
            placeholder={task?.startDate ?? "2024-01-05"}
            // defaultValue={task?.startDate ?? "2024-01-05"}
            value={startDate}
            className='border semiBold capitalize text-sm px-4 rounded-[12px]  h-[52px] border-[#d9d9d9]'
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
            onChange={(e) => handleEndDateChange(e.target.value)}
            className='border datepicker-input rounded-[12px] h-[52px] border-[#d9d9d9]'
          />
          <input
            type='text'
            placeholder={task?.endDate ?? "2024-01-30"}
            value={endDate}
            readOnly
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
      {/* Milestone Description */}
      <div className='flex mb-[4vh] flex-col'>
        <p className='text-[#1b1b1b] mb-1 regular'>{"Task Description"}</p>
        <textarea
          type='text'
          defaultValue={task?.description}
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
          onChange={(e) => setDescription(e.target.value)}
          className='border px-4 py-2 focus:outline-none rounded-[12px] min-h-[131px]  h-auto border-[#d9d9d9]'
        >
          {/* {description} */}
        </textarea>
      </div>

      {/* Talents Section */}
      <section className='w-full flex mt-[1.5vh] flex-col items-start'>
        <p className='text-[#1b1b1b] mb-[30px] semiBold'>{"Asign Task To"}</p>
        <OutsideClickHandler
          display='inline-block'
          onOutsideClick={() => {
            setAddTalents(false);
          }}
        >
          <div className='focus:outline-none border space-x-4 px-5 w-max flex rounded-[12px] h-[52px] border-[#d9d9d9] items-center justify-between relative'>
            <div className='  flex items-center capitalize  text-[#1b1b1b] text-sm regular  '>
              {task?.talent?.name.toLowerCase() ||
                talent?.name.toLowerCase() ||
                "Not Assigned"}
            </div>
            <Image
              src={"/assets/icons/sel.svg"}
              width={12}
              height={8}
              alt='select'
              onClick={() => setAddTalents(!addTalents)}
              className={`cursor-pointer ${addTalents && "rotate-180"}`}
            />
            <AnimatePresence mode='wait'>
              {addTalents ? (
                <AddTalentsComponent
                  style='absolute top-full -left-4 mt-4 w-max max-h-[300px]'
                  addTalent={setTalent}
                  talents={talents?.filter((item) =>
                    teamMembers?.includes(item._id)
                  )}
                />
              ) : null}
            </AnimatePresence>
          </div>
        </OutsideClickHandler>
      </section>
      <div className='mt-[10vh]  flex items-center justify-center  gap-[3vw]'>
        <AppButton
          action={() => (task?.name ? deleteTask() : router.back())}
          title={task?.name ? "Delete" : "Cancel"}
        />
        <AppButton
          dark={false}
          action={() => (task?.name ? editTask() : addTask())}
          title={task?.name ? "Edit Task" : "Add Task"}
        />
      </div>
    </div>
  );
};
Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
