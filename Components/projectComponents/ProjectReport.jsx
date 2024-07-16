/* eslint-disable @next/next/no-img-element */
import SelectFile from "../customInputs/SelectFile";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FileUpload from "../modals/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import Close from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

import useDtabase from "@/hooks/useDatabase";
import axios from "axios";
import Loading from "../Loading";
import Button from "../Button";
import SelectComponent from "../customInputs/SelectComponent";
import AppButton from "../AppButton";
import DatePicker from "react-datepicker";
import { DtPicker } from "react-calendar-datetime-picker";
import { upload } from "@vercel/blob/client";

import "react-calendar-datetime-picker/dist/style.css";

import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import {
  delFile,
  removeHighlight,
  setDate,
  setHighlights,
  setLink,
  setStatus,
  setSummary,
} from "@/store/slice-reducers/reportSlice";

function ProjectReport() {
  const [loading, setLoading] = useState(false);

  const [highlight, setHighlight] = useState("");

  const { user } = useDtabase();
  const router = useRouter();
  const upload = router.query?.upload;
  const company = user?.email;
  let allFiles = [];
  const { filess, status, summary, link, date, highlights } = useSelector(
    (state) => state.report
  );
  const dispatch = useDispatch();

  filess.forEach((item) =>
    allFiles.push(company?.concat("_").concat(item.name))
  );
  const data = {
    company: user?.name,
    status,
    summary,
    highlights,
    date,
    files: allFiles,
    link,
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post("/api/report", data);

      for (i = 0; i < filess.length - 1; i++) {
        await upload(filess[i].name, filess[i], {
          access: "public",
          handleUploadUrl: `/api/upload?company=${user?.email}&image=${false}`,
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });
      }

      // Handle successful response
      setLoading(!true);
      router.push("/menu/project");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      alert("Error Submiting");
      setLoading(!true);
    }
  };
  console.log(data, filess);
  return (
    <section
      className={`w-full relative flex flex-col gap-7  self-center  justify-start  lg:w-[80%]  ${
        upload ? "h-screen overflow-y-hidden" : "overflow-y-scroll"
      }  scrollbar-hide`}
    >
      {upload && (
        <div className='bg-black bg-opacity-80 w-full z-50  flex justify-center items-center  h-full fixed top-0 left-0 '>
          <FileUpload />
        </div>
      )}
      <div>
        <h3 className={` capitalize text-start mb-1 lg:mb-2`}>
          Project Report
        </h3>
        <p className='lg:w-[761px] medium text-grayText '>
          The information in this section below will be shared with tradespeople
          in order to produce estimates. Please help us to protect your privacy
          by not including any Personally Identifiable Information (e.g. your
          name, email address, etc).
        </p>
      </div>
      <div>
        <h3 className={` capitalize text-start  mb-1 lg:mb-2`}>
          What is the status of the project?
        </h3>
        <SelectComponent
          onChange={(e) => dispatch(setStatus(e))}
          placeholder={"Completed"}
          items={["Completed", "Awaiting your review", "Started", "Ongoing"]}
        />
      </div>
      <div className='w-full'>
        <h3 className={`text-start  mb-1 lg:mb-2`}>
          Describe a summary of the project state so far.
        </h3>
        <textarea
          onChange={(e) => dispatch(setSummary(e.target.value))}
          className='h-[100px] w-full border focus:outline-none p-3 border-gray-400'
        />
      </div>
      <div className='w-full'>
        <h3 className={`text-start  mb-1 lg:mb-2`}>
          Add key highlights. Maximum 3.
        </h3>
        <div className=' relative flex items-center'>
          <input
            className={`py-3 border-b-2 focus:outline-none medium text-ash3 text-sm px-3 lg:text-base border-b-gray-400 w-full mb-5`}
            placeholder='UI design completed with motion graphics implemented'
            onChange={(e) => setHighlight(e.target.value)}
            value={highlight}
          />
          <button
            disabled={highlights.length >= 3}
            onClick={() => {
              // highlights.push(highlight);
              dispatch(setHighlights(highlight));
              setHighlight("");
            }}
            className='w-10 h-10 self-start hover:opacity-80 disabled:opacity-10 cursor-pointer active:scale-90 duration-100 top-0 absolute right-3 flex justify-center items-center  rounded-full bg-binance_green'
          >
            <AddIcon />
          </button>
          <button
            disabled={highlights.length === 0}
            onClick={() => {
              // highlights.pop();
              dispatch(removeHighlight());
              setHighlight("");
            }}
            className='w-10 h-10 self-start hover:opacity-80 disabled:opacity-10 cursor-pointer active:scale-90 duration-100 top-0 absolute right-20 flex justify-center items-center  rounded-full bg-binance_green'
          >
            <Remove />
          </button>
        </div>
      </div>
      {highlights.length !== 0 && (
        <div>
          {highlights.map((item, i) => {
            return <li key={i.toString()}>{item}</li>;
          })}
        </div>
      )}
      <div>
        <h3 className={` capitalize text-start   mb-2 lg:mb-4`}>
          Please upload at least one photo, video or design to support your
          feedback.
        </h3>
        <p className='text-gray-500 mb-4 lg:mb-4'>
          For example if you are replacing a door lock please take a photo of
          the existing lock.
        </p>

        <div className='overflow-x-scroll mb-5 lg:mb-4 space-x-5 scrollbar-hide flex gap-2 items-center'>
          <Link href={"?upload=true"}>
            <SelectFile
              icon={HiOutlineDocumentDuplicate}
              name={"Upload Files"}
              // otherFiles={files}
              // setFiles={setFiles}
            />
          </Link>
          {filess.map((f, index) => (
            <div
              className='flex items-center text-sm medium  text-grayText space-x-1 '
              key={index.toString()}
            >
              <p className='text-sm medium  text-grayText'></p>
              {f.name}({Math.round((f.size / 1000000) * 10) / 10}MB)
              <i
                className='w-[22px] h-[22px] cursor-pointer  flex items-center justify-center text-grayText'
                onClick={() => {
                  // filess.splice(index, 1);
                  dispatch(delFile(index));
                  // console.log(filess);
                }}
              >
                <Close />
              </i>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className={` capitalize text-start mb-5 lg:mb-2`}>
          Schedule Meeting
        </h3>

        <p className='medium'>Date and Time</p>
        <div className='w-[80%] flex gap-7 justify-between items-center mt-5 pl-[0vw]'>
          {/* <p className='medium'>Tap to change</p> */}
          <div className='w-1/2'>
            <DtPicker
              // selected={startDate}
              onChange={(date) => {
                dispatch(setDate(date));
              }}
              // showTimeSelect
              // dateFormat='Pp'
              local='en'
              withTime
              showTimeInput
            />
          </div>
          <AppButton dark={false} href={"report"} title={"Send Notification"} />
        </div>
        <div className='flex items-end mt-10 gap-4'>
          <p className='medium'>Meeting Link</p>
          <input
            className={`py-0 border-b-2 focus:outline-none medium text-ash3 text-sm px-3 lg:text-base border-b-gray-400 w-[50%]`}
            placeholder='https://meet.google.com/ngz-voea-jzt'
            onChange={(e) => dispatch(setLink(e.target.value))}
            value={link}
          />
        </div>
      </div>
      <div className='w-full flex justify-center my-5'>
        {/* <button
          onClick={handleSubmit}
          className='bg-green-500 text-white rounded-full py-2 px-16 self-center'
        >
        
        </button> */}
        {/* <Button
          styles={"rounded-full py-2 px-16 self-center"}
          Action={"Submit now"}
          click={handleSubmit}
          isLoading={loading}
        /> */}

        <div className='flex gap-3 justify-center items-center my-6'>
          <AppButton href={"/"} title={"Cancel"} />
          <AppButton dark={false} href={"report"} title={"Submit"} />
        </div>
      </div>
    </section>
  );
}

export default ProjectReport;
