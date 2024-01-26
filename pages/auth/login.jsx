import AuthComponent from "@/Components/AuthComponent";
import LoginLayout from "@/Components/layouts/LoginLayout";
import Link from "next/link";
import Button from "@/Components/Button";
import { Checkbox } from "@mui/material";
import InputLine from "@/Components/InputLine";
import { useState } from "react";
import ShowHidePassword from "@/Components/ShowHidePassword";
import { useSession } from "next-auth/react";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [checked, setChecked] = useState(false);
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const { data: session } = useSession();
  console.log(session);

  //-----------------------------------------------------------FUNCTIONS
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      <div className='md:mt-0 flex flex-col items-center mt-[-4em]'>
        <h3>SIGN IN</h3>
        <div className='flex mt-[4px] mb-[15px] md:mt-[16px] md:mb-[30px] items-center w-full'>
          <p className=' mr-1 md:mr-3 member '>Not a member?</p>
          <Link href='/auth/register'>
            <p className='text-binance_green register'>Register now!</p>
          </Link>
        </div>
      </div>
      <div className='w-[85%] md:w-[487px] mx-auto relative h-[308px] md:h-[308px] flex flex-col justify-between shrink-0'>
        <div className='w-full'>
          <InputLine placeholder={"johncena@gmail.com"} />
          <div className='w-full'>
            <InputLine
              placeholder={"Password*"}
              type={showPasswordToggle ? "text" : "password"}
            />
            <ShowHidePassword
              className='absolute ml-[-2.5rem] mt-[1.5rem]'
              onClick={showPassword}
              showPasswordToggle={showPasswordToggle}
            />
          </div>
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
          <Button
            styles={
              "w-full hover:bg-white hover:border-2 hover:text-binance_green duration-200 hover:border-binance_green mx-auto"
            }
            Action={"Sign in"}
          />
          <Link href='/auth/forgot-password'>
            <p className='register mt-[12px] hover:underline  text-binance_green text-center'>
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
