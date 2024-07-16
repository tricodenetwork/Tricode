import { baseUrl } from "@/config/config";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Loader from "../Loader";
import { motion } from "framer-motion";

const Delete = ({ deleteProject, close }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const leave = async () => {
    await signOut({ callbackUrl: `${baseUrl}/auth/login` });
  };
  const deleteMilestone = async () => {
    console.log("Helelos");
    setIsLoading(true);
    // const res = await axios.post(`/api/milestones/delete`, {
    //   name: del,
    //   id: projectId,
    // });
    // // console.log(res);
    // if (res.status == 200) {
    //   getProject();

    //   alert("Removed ✅");
    // }
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className='flex w-[438px] h-[280px] flex-col justify-center items-center space-y-3'>
      {/* {!isLoading && (
        <motion.p
          initial={{ x: "0%" }}
          animate={{ x: "150%" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className='text-binance_white text-[10px] leading-snug medium fixed top-[85.3vh] ml-1 z-[100]'
        >
          {"</>"}
        </motion.p>
      )}
      {!isLoading && (
        <button className='fixed cursor-wait bg-binance_black/70 rounded-md z-50 top-[85vh] w-[4vw] 3xl:w-[2vw] 3xxl:w-[2vw] h-[4vw]'>
          <Loader />
        </button>
      )} */}
      <p className='medium text-2xl text-grayText'>Delete </p>
      <p className='medium text-[16px] text-[#bdbdbd]'>Are you sure?</p>
      <div className='space-x-[20px] mt-3'>
        <button
          onClick={close}
          className='w-[145px] h-[37px] border hover:scale-90 active:scale-100 border-binance_green bg-white  duration-150  text-binance_green rounded-3xl'
        >
          Back
        </button>
        <button
          onClick={deleteProject}
          className='w-[145px] h-[37px] border hover:scale-90 active:scale-100 border-binance_green  duration-150 bg-binance_green text-white rounded-3xl'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Delete;
