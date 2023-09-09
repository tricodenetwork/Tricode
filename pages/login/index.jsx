import AuthComponent from "@/components/AuthComponent";
import LoginLayout from "@/components/layouts/LoginLayout";
import Link from "next/link";
import Button from "@/components/Button";
import { Checkbox } from "@mui/material";
import InputLine from "@/components/InputLine";
import { useState } from "react";
// import Navbar from "@/components/navbar_components/Navbar";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [checked, setChecked] = useState(false);

  //-----------------------------------------------------------FUNCTIONS
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      {/* <Navbar /> */}
      <div className=''>
        <h3>SIGN IN</h3>
        <div className='flex mt-[4px] mb-[15px]  md:mt-[16px] md:mb-[30px] items-center'>
          <p className=' mr-1 md:mr-3 member text-black'>Not a member?</p>
          <Link href='/register'>
            <p className='text-binance_green register'>Register now!</p>
          </Link>
        </div>
      </div>
      <div className='md:w-[487px] relative h-[308px] md:h-[308px] flex flex-col justify-between shrink-0'>
        <div className=''>
          <InputLine placeholder={"johncena@gmail.com"} />
          <InputLine placeholder={"Password*"} />
        </div>
        <div className='flex relative bottom-[3vh] md:bottom-0  items-center '>
          <Checkbox
            sx={{ padding: 0 }}
            onChange={handleChange}
            checked={checked}
          />
          <p className='remember'>Remember me</p>
        </div>
        <div className=' w-full'>
          <Button styles={"w-[60%] md:w-full mx-auto"} Action={"Sign in"} />
          <Link href='/forgot-password'>
            <p className='register mt-[12px]  text-binance_green text-center'>
              Forgot password?
            </p>
          </Link>
        </div>
      </div>
      <div className='mt-[70px]'>
        <p className='signin mb-3 text-center '>Or sign in with</p>
        <AuthComponent />
      </div>
    </>
  );
};

Index.getLayout = LoginLayout;
export default Index;
