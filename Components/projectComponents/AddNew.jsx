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
import { useSelector } from "react-redux";

function AddNew() {
  const [files, setFiles] = useState([]);
  const [selected, setSelectedCountry] = useState(
    countries[0]?.code.toLowerCase()
  );
  const selectedCountry = (e) => {
    console.log(e.target.value);
    setSelectedCountry(e.target.value?.toLowerCase());
  };
  const router = useRouter();
  const { filess } = useSelector((state) => state.upload);

  const upload = router.query?.upload;
  console.log("files", files);
  // Retrieve files from localStorage on component mount
  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("files")) || [];
    setFiles(storedFiles);
  }, []);

  // Update localStorage when files change
  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);
  return (
    <section
      className={`p-10 w-[80%] m-auto ${
        upload ? "h-screen overflow-hidden" : "overflow-scroll"
      }  scrollbar-hide`}
    >
      {upload && (
        <div className='bg-black bg-opacity-80 w-[99dvw] z-50  flex justify-center items-center  h-full absolute top-0 left-0 '>
          <FileUpload files={files} setFiles={setFiles} />
        </div>
      )}
      <h3 className={` capitalize text-start mb-4`}>Add new project</h3>
      <p className='lg:w-[761px] mb-4'>
        The information in this section below will be shared with tradespeople
        in order to produce estimates. Please help us to protect your privacy by
        not including any Personally Identifiable Information (e.g. your name,
        email address, etc).
      </p>
      <h3 className={` capitalize text-start font-bold   mb-4`}>
        How would you like to name your project?
      </h3>

      <input
        className={`py-3 border-b-2 medium text-ash3 border-b-gray-400 w-full mb-5`}
        placeholder='Type your project name'
      />

      <h3 className={` capitalize text-start  font-bold  mb-4`}>
        Describe the work required clearly so that builders can understand.
      </h3>

      <p className='text-gray-500 mb-4'>
        If the style (including colors) are important please mention them
        explicitly to avoid confusion and unexpected costs. If you&apos;re
        unsure of what to write here you might find our advice on this page
        useful: <span className='text-green-600'>Suggestions</span>
      </p>

      <Editor />

      <h3 className={` capitalize text-start  font-bold  mt-5 mb-4`}>
        Please upload at least one photo, video or design of the work to be
        undertaken.
      </h3>
      <p className='text-gray-500 mb-4'>
        For example if you are replacing a door lock please take a photo of the
        existing lock.
      </p>

      <div className='overflow-x-scroll mb-4 space-x-5 scrollbar-hide flex gap-2 items-center'>
        <Link href={"?upload=true"}>
          <SelectFile
            icon={HiOutlineDocumentDuplicate}
            name={"Upload Files"}
            // otherFiles={files}
            // setFiles={setFiles}
          />
        </Link>
        {filess.map((f, key) => (
          <div className='' key={key}>
            {f.name}({Math.round((f.size / 1000000) * 10) / 10}MB)
          </div>
        ))}
      </div>

      <h3 className={` capitalize text-start  font-bold  mb-4`}>
        How do we contact you?
      </h3>

      <div className='flex gap-3 items-center  my-2'>
        <div className='flex justify-center gap-4'>
          <div className='flex justify-center gap-2'>
            <img
              src={`https://flagcdn.com/16x12/${selected}.png`}
              className='w-10 rounded-full h-10'
              alt={selected}
            />
            <select onChange={selectedCountry}>
              {countries.map((con, i) => (
                <option key={i} value={con.code}>
                  {con.dial_code}
                </option>
              ))}
            </select>
            <input className='border-b-2 border-b-gray-300' type='phone' />
          </div>

          <div className='flex justify-center gap-2 items-end'>
            <div>Email</div>
            <input className='border-b-2 border-b-gray-300' type='email' />
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center my-5'>
        <button className='bg-green-500 text-white rounded-full py-2 px-16 self-center'>
          Submit Now
        </button>
      </div>
    </section>
  );
}

export default AddNew;
