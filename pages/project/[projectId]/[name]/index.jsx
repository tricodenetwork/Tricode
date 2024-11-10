import AppButton from "@/components/AppButton";
import MenuLayout from "@/components/layouts/MenuLayout";
import Loader from "@/components/Loader";
import AddTalentsComponent from "@/components/projectComponents/AddTalentsComponent";
import useDatabase from "@/hooks/useDatabase";
import { TeamCard } from "@/pages/menu/project/[projectId]";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const Project = () => {
  // --------------------------------------------VARIABLES
  const router = useRouter();
  const { name, projectId, item } = router.query;
  const milestone = item ? JSON.parse(item ?? "") : {};
  const [title, setTitle] = useState(milestone?.name ?? null);
  const [startDate, setStartDate] = useState(milestone.startDate ?? null);
  const [endDate, setEndDate] = useState(milestone.endDate ?? null);
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState(null);
  const { allUsers } = useDatabase();
  const { talents } = useSelector((state) => state.users);
  // console.log(project);
  const [team, AddTeamMember] = useState(project?.team ?? []);
  const teamMembers = project?.team?.map((item) => item._id);

  const [description, setDescription] = useState(milestone?.description ?? "");

  const dispatch = useDispatch();

  //-----------------------------------------------------------FUNCTIONS
  const getProject = async () => {
    const res = await axios.post(`/api/get/project`, { id: projectId });
    console.log("res", res);
    setProject(res.data);
    // AddTeamMember(res.data.team);
  };

  const addMilestone = async () => {
    // setIsLoading(!true);
    const data = {
      name: title,
      startDate,
      endDate,
      description,
      status: "Pending",
    };

    const requiredFields = ["name", "startDate", "endDate", "description"];
    for (const field of requiredFields) {
      if (!data[field]) {
        toast.error(`${field} is required`);
      }
    }
    setIsLoading(true);

    const res = await axios.post("/api/milestones/new", {
      milestone: data,
      id: projectId,
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
  const editMilestone = async () => {
    // setIsLoading(!true);
    const data = {
      name: title,
      startDate,
      endDate,
      description,
      initial: milestone?.name,
      // status: "",
    };
    const requiredFields = ["name", "startDate", "endDate", "description"];
    for (const field of requiredFields) {
      if (!data[field]) {
        toast.error(`${field} is required`);
        return;
      }
    }
    setIsLoading(true);

    const res = await axios.post("/api/milestones/update", {
      milestone: data,
      id: projectId,
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
  const deleteMilestone = async () => {
    setIsLoading(true);
    const res = await axios.post(`/api/milestones/delete`, {
      name: milestone?.name,
      id: projectId,
    });
    // console.log(res);
    if (res.status == 200) {
      // getProject();

      toast.success("Deleted");
      setIsLoading(false);
      router.back();
    }
    // setTimeout(() => {
    setIsLoading(false);
    // }, 3000);
  };

  const create = async () => {
    const data = { name: title, startDate, endDate, description };
    const body = JSON.stringify(data);
    const res = await axios.post("/api/create/project");
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

        <Link
          href={{
            pathname: `${milestone.name}`,
            query: {
              projectId: projectId,
              item: item,
            },
          }}
          className='text-binance_green regular text-sm'
        >
          {milestone?.name ?? "New"}
        </Link>
      </div>
      <h4
        className='text-[#1b1b1b] my-[4vh] text-3xl font-semibold'
        style={nunito.style}
      >
        {title ?? "Project Zero"}
      </h4>
      {/* Project Title */}
      <div className='flex w-full mb-[4vh] justify-between items-center'>
        <div className='flex  mb-[4vh] w-[45%] flex-col'>
          <p className='text-[#1b1b1b] mb-1 regular'>{"Project Title"}</p>
          <input
            placeholder={project?.name}
            value={project?.name}
            type='text'
            readOnly
            className='border capitalize focus:outline-none text-grayText semiBold text-sm px-4 rounded-[12px] h-[52px] border-[#d9d9d9]'
          />
        </div>
        <div className='flex  mb-[4vh] w-[45%] flex-col'>
          <p className='text-[#1b1b1b] mb-1 regular'>{"Milestone"}</p>
          <input
            placeholder={"New Milestone"}
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
            placeholder={milestone?.startDate ?? "2024-01-05"}
            // defaultValue={milestone?.startDate ?? "2024-01-05"}
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
            placeholder={milestone?.endDate ?? "2024-01-30"}
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
        <p className='text-[#1b1b1b] mb-1 regular'>{"Milestone Description"}</p>
        <textarea
          type='text'
          defaultValue={milestone.description}
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
          onChange={(e) => setDescription(e.target.value)}
          className='border px-4 py-2 focus:outline-none rounded-[12px]  h-auto border-[#d9d9d9]'
        >
          {/* {description} */}
        </textarea>
      </div>

      <div className='mt-[10vh] flex items-center justify-center  gap-[3vw]'>
        <AppButton
          action={() => (milestone?.name ? deleteMilestone() : router.back())}
          title={milestone.name ? "Delete" : "Cancel"}
        />
        <AppButton
          dark={false}
          action={() => (milestone?.name ? editMilestone() : addMilestone())}
          title={milestone.name ? "Edit Milestone" : "Add"}
        />
      </div>
    </div>
  );
};
Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
