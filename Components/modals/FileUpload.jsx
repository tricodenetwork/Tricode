// components/FileUpload.js
import React, { useState } from "react";
import axios from "axios";
import { Close, Cloud } from "@mui/icons-material";
import { Router, useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setFilee } from "@/store/slice-reducers/uploadSlice";
import useDatabase from "@/hooks/useDatabase";

const FileUpload = ({ close, files, setFiles }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useDatabase();

  const inputFileRef = React.useRef(null);

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
    const formData = new FormData();
    const file = files.pop();
    formData.append("file", file);

    try {
      await axios.post(`/api/upload?company=${user?.email}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("There was an error uploading the file.", error.response);
    }
  };
  const router = useRouter();
  return (
    <div className='flex-col bg-white relative md:flex-row max-h-max pb-[16vh] flex w-[90vw] lg:w-[838px]  mx-auto lg:h-[590px] self-center p-7 '>
      {/* Left Side */}
      <div className='w-full md:w-[55%] hiddn flex flex-col space-y-4'>
        <div className='flex justify-between w-full md:w-[181.82%]'>
          <p>
            <strong className='semiBold text-dark_blue text-[18px] md:text-[24px]'>
              Upload files
            </strong>
          </p>
          <i className='cursor-pointer' onClick={() => router.back()}>
            <Close sx={{ fontSize: 25, color: "#061A48" }} />
          </i>
        </div>
        <p>
          <strong className='regular text-dark_blue text-[12px] md:text-[15px]'>
            Supported file type list:
          </strong>
        </p>
        <div className='w-[80%] md:w-[85%] space-y-2 lg:space-y-7'>
          <p className='medium text-grayText  text-[12px] md:text-[12px]'>
            <strong className='Bold text-dark_blue text-[12px] md:text-[12px]'>
              Images:
            </strong>
            .gif .heic .jpeg, .jpg .png .svg .webp
          </p>
          <p className='medium text-grayText  text-[12px] md:text-[12px]'>
            <strong className='Bold text-dark_blue text-[12px] md:text-[12px]'>
              Documents:
            </strong>{" "}
            .doc, .docx .key .odt .pdf .ppt, .pptx, .pps, .ppsx .xls, .xlsx
          </p>
          <p className='medium text-grayText  text-[12px] md:text-[12px]'>
            <strong className='Bold text-dark_blue text-[12px] md:text-[12px]'>
              Audio:
            </strong>{" "}
            .mp3 .m4a .ogg .wav
          </p>
          <p className='medium text-grayText  text-[12px] md:text-[12px]'>
            <strong className='Bold text-dark_blue text-[12px] md:text-[12px]'>
              Video:
            </strong>{" "}
            .avi .mpg .mp4, .m4v .mov .ogv .vtt .wmv .3gp .3g2
          </p>
          <p className='medium text-grayText  text-[12px] md:text-[12px]'>
            <strong className='Bold text-dark_blue text-[12px] md:text-[12px]'>
              Total file size limit:
            </strong>
            500 Mb
          </p>
        </div>
        <p className='medium hidden lg:flex text-grayText md:w-[80%]  text-[12px] md:text-[12px]'>
          If you are recording videos please make sure they are in total less
          than 10 minutes in duration to avoid exceeding the file size limit.
        </p>
      </div>

      {/* Right Side */}
      <div className='w-full md:w-[45%] relative   self-center pt-8  flex items-center justify-center'>
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`drag-and-drop ${
            isDragging ? "drag-over" : ""
          } bg-[#f2f2f2] w-[330px] bord self-center h-[300px] lg:h-[349px] flex-col flex items-center  justify-between pb-[72px] pt-[84px] border border-[#4f4f4f] rounded-[20px]`}
        >
          {files && (
            <div className='self-center text-grayText text-center regular text-base'>
              {uploadProgress !== 100
                ? files[files.length - 1]?.name
                : "Successfull"}
            </div>
          )}
          <img src='/assets/icons/clouds.png' alt='' />
          {uploadProgress === 0 ? (
            <div className='flex flex-col justify-between items-center w-[195px] h-[134px]'>
              <p className='medium  text-[16px] text-grayText'>
                Drag and drop files here
              </p>
              <p className='medium text-[15px] text-dark_blue'>OR</p>

              <label className='cursor-pointer mx-auto'>
                <button
                  onClick={handleButtonClick}
                  className='regular w-[163px] h-[37px] hover:bg-green-700 hover:border-white hover:text-white duration-200 border-solid text-[16px] bg-white  py-1 border border-binance_green text-binance_green rounded-3xl'
                >
                  Browse files
                </button>
                <input
                  ref={inputFileRef}
                  onChange={handleFileChange}
                  type='file'
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
      <div
        style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        className='absolute left-0 flex items-center justify-end w-full lg:w-[838px]  bottom-0 bg-[#e0e0e0]  h-[64px]'
      >
        <button onClick={handleCancel} className='regular text-[15px] '>
          Cancel
        </button>
        <button
          onClick={() =>
            uploadProgress !== 100 ? handleUpload() : router.back()
          }
          className='regular w-[100px] h-[36.64px] hover:bg-green-700 hover:border-white hover:text-white duration-200 border-solid text-[16px] ml-6 mr-4 px-4 py-1 bg-white border border-binance_green text-[#38A312] rounded-3xl'
        >
          {uploadProgress !== 100 ? "Upload" : "Done"}
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
