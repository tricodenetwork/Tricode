import React, { useState } from "react";
import { Checkbox } from "@mui/material";

import Sidebar from "@/Components/layouts/Sidebar";
import InputLine from "@/Components/InputLine";
import Button from "@/Components/Button";
import AuthComponent from "@/Components/AuthComponent";
const login = () => {
  // --------------------------------------------VARIABLES
  const [checked, setChecked] = useState(false);

  //-----------------------------------------------------------FUNCTIONS
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='w-full login  flex'>
      <Sidebar />
      <div className='bg-midorang flex flex-col min-h-screen justify-center items-center w-full h-full'>
        <h3>SIGN IN</h3>
        <div className='flex  mt-[16px] mb-[30px] items-center'>
          <p className='mr-3 text-black'>Not a member?</p>
          <p className='text-binance_green register'>Register now!</p>
        </div>
        <div className='w-[487px] relative h-[308px] flex flex-col justify-between shrink-0'>
          <div className=''>
            <InputLine placeholder={"johncena@gmail.com"} />
            <InputLine placeholder={"Password*"} />
          </div>
          <div className='flex  items-center '>
            <Checkbox
              sx={{ padding: 0 }}
              onChange={handleChange}
              checked={checked}
            />
            <p className='remember'>Remember me</p>
          </div>
          <div className=' w-full'>
            <Button Action={"Sign in"} />
            <p className='register mt-[12px]  text-binance_green text-center'>
              Forgot password?
            </p>
          </div>
        </div>
        <div className='mt-[70px]'>
          <p className='register mb-3 text-center '>Or sign in with</p>
          <AuthComponent />
        </div>
      </div>
    </div>
  );
};

export default login;
