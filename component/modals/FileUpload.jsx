// components/FileUpload.js
import React, { useState } from "react";
import axios from "axios";
import { Close, Cloud } from "@mui/icons-material";
import { Router, useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setFilee } from "@/store/slice-reducers/uploadSlice";
import { upload } from "@vercel/blob/client";

import useDatabase from "@/hooks/useDatabase";
import Loading from "../Loading";

const FileUpload = ({ close, files, setFiles }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [blob, setBlob] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const { user } = useDatabase();

  const inputFileRef = React.useRef(null);
  const router = useRouter();
  const imageUpload = router.query?.imageUpload;

  const [isDragging, setIsDragging] = useState(false);
  const dispatch = useDispatch();

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  const handleButtonClick = () => {
    inputFileRef.current.click();
  };
  const handleCancel = () => {
    setSelectedFile(null); // Reset the selected file
    setUploadProgress(0); // Reset the progress
    if (inputFileRef.current) {
      inputFileRef.current.value = ""; // Clear the input file
    }
    router.back();
  };

  const handleFileChange = async (event) => {
    setUploadProgress(0); // Reset progress when a new file is chosen
    const file = event.target.files[0];
    setFiles((prev) => [...prev, file]);
    dispatch(setFilee(file));
  };
  const handleUpload = async () => {
    const file = files.pop();

    try {
      setIsUploading(true);
      const newBlob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: `/api/upload?company=${user?.email}&image=${imageUpload}`,
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      setBlob(newBlob);
      setIsUploading(false);
      setUploadProgress(100);
      console.log(blob);
    } catch (error) {
      setIsUploading(false);
      alert("Error uploading");
      console.error("There was an error uploading the file.", error.response);
    }
  };
  return (
    <div
      className={`flex-col ${
        imageUpload
          ? " lg:flex-col justify-center lg:w-[30vw]"
          : "lg:w-[838px] lg:flex-row "
      } bg-white relative  items-center flex  lg:h-[590px] p-7 `}
    >
      <div className='flex absolute px-7 top-5 left-0 justify-between  w-full'>
        <p>
          <strong className='semiBold text-binance_green text-[18px] md:text-[24px]'>
            {imageUpload ? "Change profile photo" : "Upload files"}
          </strong>
        </p>
        <i className='cursor-pointer' onClick={() => router.back()}>
          <Close sx={{ fontSize: 25, color: "#061A48" }} />
        </i>
      </div>
      {/* Left Side */}
      <div
        className={`w-full ${
          imageUpload && "md:w-full"
        } hiddn flex flex-col space-y-4`}
      >
        <p>
          <strong
            className={`regular ${
              imageUpload && "hidden"
            } text-dark_blue text-[12px] md:text-[15px]`}
          >
            Supported file type list:
          </strong>
        </p>
        <div className='flex w-full'>
          <strong
            className={`regular ${
              imageUpload ? "flex" : "hidden"
            } text-dark_blue mr-2 text-[12px] md:text-[15px]`}
          >
            Supported file:
          </strong>
          <p>.gif .heic .jpeg, .jpg .png .svg .webp</p>
        </div>
        <div className='w-[80%] md:w-[85%] space-y-2 lg:space-y-7'>
          <p
            className={`medium ${
              imageUpload && "hidden"
            }  text-grayText w-full  text-[12px] md:text-[12px]`}
          >
            <strong className='Bold text-dark_blue text-[12px] md:text-[12px]'>
              Images:
            </strong>
            .gif .heic .jpeg, .jpg .png .svg .webp
          </p>
          <p
            className={`medium ${
              imageUpload && "hidden"
            } text-grayText  text-[12px] md:text-[12px]`}
          >
            <strong className='Bold text-dark_blue text-[12px] md:text-[12px]'>
              Documents:
            </strong>{" "}
            .doc, .docx .key .odt .pdf .ppt, .pptx, .pps, .ppsx .xls, .xlsx
          </p>
          <p
            className={`medium ${
              imageUpload && "hidden"
            } text-grayText  text-[12px] md:text-[12px]`}
          >
            <strong className='Bold text-dark_blue text-[12px] md:text-[12px]'>
              Audio:
            </strong>{" "}
            .mp3 .m4a .ogg .wav
          </p>
          <p
            className={`medium ${
              imageUpload && "hidden"
            }  text-grayText  text-[12px] md:text-[12px]`}
          >
            <strong className='Bold text-dark_blue text-[12px] md:text-[12px]'>
              Video:
            </strong>{" "}
            .avi .mpg .mp4, .m4v .mov .ogv .vtt .wmv .3gp .3g2
          </p>
          <p
            className={`medium ${
              imageUpload && "hidden"
            }  text-grayText  text-[12px] md:text-[12px]`}
          >
            <strong className='Bold text-dark_blue text-[12px] md:text-[12px]'>
              Total file size limit:
            </strong>
            500 Mb
          </p>
        </div>
        <p
          className={`medium ${
            imageUpload && "lg:hidden"
          }  hidden lg:flex text-grayText md:w-[80%]  text-[12px] md:text-[12px]`}
        >
          If you are recording videos please make sure they are in total less
          than 10 minutes in duration to avoid exceeding the file size limit.
        </p>
      </div>

      {/* Right Side */}
      <div
        className={`w-full md:w-[45%] ${
          imageUpload && "md:w-[85%]"
        } relative max-h-max   self-center flex items-center justify-center`}
      >
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`drag-and-drop ${
            isDragging ? "drag-over" : ""
          } bg-[#f2f2f2] w-[330px] focus:outline-none my-auto bord  self-center h-[300px] lg:h-[349px] flex-col flex items-center  justify-center  border border-[#4f4f4f] rounded-[20px]`}
        >
          {files && (
            <div className='self-center mb-[3vh] text-grayText text-center regular text-base'>
              {isUploading
                ? "Uploading..."
                : uploadProgress !== 100
                ? files[files.length - 1]?.name
                : "Successfull"}
            </div>
          )}
          {uploadProgress === 0 ? (
            <div className='flex flex-col justify-between self-start items-center w-full h-[65%]'>
              <img src='/assets/icons/clouds.png' alt='' />
              <p className='medium  text-[16px] text-grayText'>
                Drag and drop files here
              </p>
              <p className='medium text-[15px] text-dark_blue'>OR</p>

              <label className='cursor-pointer mx-auto'>
                <button
                  onClick={handleButtonClick}
                  className='medium w-[163px] h-[37px] hover:bg-green-700 hover:border-white hover:text-white duration-200 border-solid text-[16px] bg-white  py-1 border border-binance_green text-binance_green rounded-3xl'
                >
                  Browse files
                </button>
                <input
                  ref={inputFileRef}
                  onChange={handleFileChange}
                  type={`file`}
                  accept={imageUpload ? "image/*" : undefined} // Conditionally set accept attribute for images
                  className='h-full  hidden w-full bord'
                />
              </label>
            </div>
          ) : (
            <>
              <div className='w-[204px] h-[27px] text-white bg-white rounded-3xl border-[0.5px] border-binance_green'>
                <div
                  className={`w-[${uploadProgress}%] h-full rounded-3xl  bg-binance_green`}
                ></div>
                {/* <progress
                  className='progress rounded-3xl'
                  value={uploadProgress}
                  max='100'
                >
                  {uploadProgress}%
                </progress> */}
              </div>
              <span className='self-center Bold text-binance_green'>
                {uploadProgress}%
              </span>
            </>
          )}
        </div>
      </div>
      {/* Bottom bar */}
      <div className='absolute left-0 flex items-center  justify-end w-full lg:w-full  bottom-0 bg-[#e0e0e0]  h-[64px]'>
        <button
          onClick={handleCancel}
          className='medium hover:scale-95 active:scale-100 duration-200 text-[15px] '
        >
          Cancel
        </button>
        <button
          onClick={() =>
            uploadProgress !== 100 && imageUpload
              ? handleUpload()
              : router.back()
          }
          className={` w-[100px] h-[36.64px] ${
            isUploading ? "bg-binance_ash" : " bg-white"
          } focus:outline-none medium hover:bg-green-700  hover:text-white duration-200 border-solid text-[16px] ml-6 mr-4 px-4 py-1 border border-binance_green text-[#38A312] rounded-3xl`}
        >
          {!imageUpload ? (
            "Done"
          ) : isUploading ? (
            <Loading length={3} loading={true} />
          ) : uploadProgress !== 100 ? (
            "Change"
          ) : (
            "Done"
          )}
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
