import { Close } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react'

const PicUpload = ({close}) => {
     const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const inputFileRef = React.useRef(null);

  const handleButtonClick = () => {
    inputFileRef.current.click();
  };
  const handleCancel = () => {
    setSelectedFile(null); // Reset the selected file
    setUploadProgress(0); // Reset the progress
    if (inputFileRef.current) {
      inputFileRef.current.value = ""; // Clear the input file
    }
  };

  const handleFileChange = async (event) => {
    setUploadProgress(0); // Reset progress when a new file is chosen
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("/api/upload", formData, {
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
      console.error("There was an error uploading the file.", error);
    }
  };
  return (
    <div className='flex-col  relative  max-h-max  flex w-[90vw] md:w-[457px] md:h-[590px] self-center p-7 '>
      {/* Top Header */}
      <div className='w-full space-y-4'>
        <div className='flex justify-between w-full'>
          <p>
            <strong className='Bold text-binance_green text-[18px] md:text-[24px]'>
              Change profile photo
            </strong>
          </p>
          <i className='cursor-pointer' onClick={close}>
            <Close sx={{ fontSize: 25, color: "#061A48" }} />
          </i>
        </div>
        <p className='medium text-grayText text-[12px] md:text-[15px]'>
          <strong className='medium text-dark_blue text-[12px] md:text-[15px]'>
            Supported file : {" "}
          </strong>
             .gif .heic .jpeg, .jpg .png .svg .webp
        </p>
      </div>

      {/* Main upload section */}
      <div className='w-full md:w-[75%]  self-center pt-8  flex items-center justify-center'>
        <div className=' bg-[#f2f2f2] w-[330px]  self-center h-[349px] flex-col flex items-center  justify-between pb-[72px] pt-[84px] border border-[#4f4f4f] rounded-[20px]'>
          {selectedFile && (
            <div className='self-center regular text-[15px]'>
              {selectedFile.name}
            </div>
          )}
          <img src='/assets/icons/clouds.png' alt='' />
          {uploadProgress === 0 ? (
            <div className='flex flex-col justify-between items-center w-[195px] h-[134px]'>
              <p className='medium  text-[15px] text-grayText'>
                Drag and drop files here
              </p>
              <p className='medium text-[15px] text-dark_blue'>OR</p>

              <label className='cursor-pointer'>
                <button
                  onClick={handleButtonClick}
                  className='regular w-[163px] h-[37px] bg-white text-[15px]  py-1 border border-binance_green text-binance_green rounded-3xl'
                >
                  Browse files
                </button>
                <input
                  ref={inputFileRef}
                  onChange={(event) => {
                    const file = event.target.files[0];
                    setSelectedFile(file);
                  }
                  }
                  type='file'
                  className='hidden'
                />
              </label>
            </div>
          ) : (
            <>
              <div className='w-[204px] h-[27px] text-white bg-white rounded-3xl border-[0.5px] border-binance_green'>
                <div
                  className={`w-[${uploadProgress}%] h-full rounded-3xl  bg-binance_green`}
                ></div>
               
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
        className='absolute left-0 flex items-center justify-end w-full  bottom-0 bg-[#e0e0e0]  h-[64px]'
      >
        <button onClick={handleCancel} className='regular text-[15px] '>
          Cancel
        </button>
        <button onClick={handleFileChange} className='regular w-[100px] h-[36.64px] text-[15px] ml-6 mr-4 px-4 py-1 bg-white border border-binance_green text-[#38A312] rounded-3xl'>
          Upload
        </button>
      </div>
    </div>
  )
}

export default PicUpload