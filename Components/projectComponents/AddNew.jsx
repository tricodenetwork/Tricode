/* eslint-disable @next/next/no-img-element */
import SelectFile from "../customInputs/SelectFile";
import Editor from "../editor/RichTextEditor";
import { TbCameraPlus } from "react-icons/tb";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { useEffect, useState } from "react";
import countries from "../../lib/constants/countries.json";
import { useRouter } from "next/router";
import Link from "next/link";
import FileUpload from "../modals/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import Close from "@mui/icons-material/Close";
import {
  delFile,
  setDescription,
  setName,
} from "@/store/slice-reducers/uploadSlice";
import useProjects from "@/hooks/useProjects";
import axios from "axios";

function AddNew() {
  const [files, setFiles] = useState([]);
  const [selected, setSelectedCountry] = useState(
    countries[0]?.code.toLowerCase()
  );
  const { data } = useProjects();
  const router = useRouter();
  const upload = router.query?.upload;
  const company = data?.email;
  let allFiles = [];
  const { filess, name, description } = useSelector((state) => state.upload);
  const dispatch = useDispatch();

  filess.forEach((item) =>
    allFiles.push(company?.concat("_").concat(item.name))
  );

  console.log("files", files);

  const handleSubmit = async () => {
    console.log("submittin");
    try {
      const response = await axios.post("/api/new_project", {
        company: data?.name,
        name,
        description,
        files: allFiles,
      });

      // Handle successful response
      console.log("Response:", response.data);
      router.push("/menu/project");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  return (
    <section
      className={`w-full relative flex flex-col  self-center  justify-start  lg:w-[80%]  ${
        upload ? "h-screen overflow-hidden" : "overflow-scroll"
      }  scrollbar-hide`}
    >
      {upload && (
        <div className='bg-black bg-opacity-80 w-full z-50  flex justify-center items-center  h-full fixed top-0 left-0 '>
          <FileUpload files={files} setFiles={setFiles} />
        </div>
      )}
      <h3 className={` capitalize text-start mb-1 lg:mb-2`}>Add new project</h3>
      <p className='lg:w-[761px] mb-5 lg:mb-4'>
        The information in this section below will be shared with tradespeople
        in order to produce estimates. Please help us to protect your privacy by
        not including any Personally Identifiable Information (e.g. your name,
        email address, etc).
      </p>
      <h3 className={` capitalize text-start  mb-1 lg:mb-2`}>
        How would you like to name your project?
      </h3>

      <input
        className={`py-3 border-b-2 medium text-ash3 text-sm px-3 lg:text-base border-b-gray-400 w-full mb-5`}
        placeholder='Type your project name'
        onChange={(e) => dispatch(setName(e.target.value))}
        value={name}
      />
      <h3 className={` capitalize text-start  mb-1 lg:mb-2`}>
        Describe the work required clearly so that builders can understand.
      </h3>

      <p className='text-gray-500 mb-2 lg:mb-4'>
        If the style (including colors) are important please mention them
        explicitly to avoid confusion and unexpected costs. If you&apos;re
        unsure of what to write here you might find our advice on this page
        useful: <span className='text-binance_green text-xs'>Suggestions</span>
      </p>

      <Editor />

      <h3 className={` capitalize text-start  mt-7 mb-2 lg:mb-4`}>
        Please upload at least one photo, video or design of the work to be
        undertaken.
      </h3>
      <p className='text-gray-500 mb-4 lg:mb-4'>
        For example if you are replacing a door lock please take a photo of the
        existing lock.
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

      {/* <h3 className={` capitalize text-start  mb-2 lg:mb-4`}>
        How do we contact you?
      </h3>

      <div className='flex gap-3  items-center  my-2'>
        <div className='flex flex-col lg:flex-row justify-center gap-4'>
          <div className='flex justify-center gap-2'>
            <img
              src={`https://flagcdn.com/16x12/${selected}.png`}
              className='w-10 rounded-full h-10'
              alt={selected}
            />
            <select onChange={selectedCountry}>
              {countries.map((con, i) => (
                <option key={i.toString()} value={con.code}>
                  {con.dial_code}
                </option>
              ))}
            </select>
            <input
              className='border-b-2 outline-none w-full border-b-gray-300'
              type='phone'
              onChange={(e) => setMobilePhone(e.target.value)}
            />
          </div>

          <div className='flex justify-center gap-2 items-end'>
            <div>Email</div>
            <input
              className='border-b-2 w-full outline-none border-b-gray-300'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div> */}

      <div className='w-full flex justify-center my-5'>
        <button
          onClick={handleSubmit}
          className='bg-green-500 text-white rounded-full py-2 px-16 self-center'
        >
          Submit Now
        </button>
      </div>
    </section>
  );
}

export default AddNew;
