import AuthComponent from "@/components/AuthComponent";
import SignupLayout from "@/components/layouts/SignupLayout";
import Link from "next/link";
import Button from "@/components/Button";
import { Checkbox } from "@mui/material";
import InputLine from "@/components/InputLine";
import RadioInput from "@/components/RadioInput";
import { useState } from "react";
// import Navbar from "@/components/navbar_components/Navbar";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('company');

  //-----------------------------------------------------------FUNCTIONS
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      {/* <Navbar /> */}
      <div className=''>
        <h3>Create an Account</h3>
        <div className='flex mt-[4px] mb-[15px]  md:mt-[10px] md:mb-[30px] items-center'>
          <p className=' mr-1 md:mr-3 member text-black'>Already have an account?</p>
          <Link href='/login'>
            <p className='text-binance_green register'>Sign in</p>
          </Link>
        </div>
      </div>
      <div className='md:w-[487px] relative flex flex-col justify-between shrink-0'>
        <div className=''>
          <InputLine placeholder={"Full Name"} />
          <InputLine placeholder={"Password*"} />
          <InputLine placeholder={"Confirm Password*"} />
          <InputLine placeholder={"johncena@gmail.com"} />
        </div>

        <div className="flex gap-3">
          <div className="w-[50px] flex-col justify-center items-start gap-[12.37px] inline-flex">
            <InputLine placeholder={"234"} />
          </div>
          <div className="w-[300px] justify-center items-center gap-[3px] inline-flex">
            <InputLine placeholder={"Mobile phone"} />
          </div>
        </div>


        <div className="mb-3 mt-2">
          <div className="text-[#000000] text-sm md:text-lg font-medium">Are you a Company or Talent?</div>
          <RadioInput
            name="answerOptions"
            value="company"
            label="Company"
            checked={selectedOption === 'company'}
            onChange={handleOptionChange}
          />{" "}
          <RadioInput
            name="answerOptions"
            value="talent"
            label="Talent"
            className="ml-4"
            checked={selectedOption === 'talent'}
            onChange={handleOptionChange}
          />
        </div>

        <div className='flex relative gap-3 items-center '>
          <Checkbox
            sx={{ padding: 0 }}
            onChange={handleChange}
            checked={checked}
          />
          <div>
            <span className="text-zinc-500 text-base font-medium">I have read and agree to Tricode’s </span>
            <span className="text-binance_green text-base font-bold">Terms of Service</span>
            <span className="text-zinc-500 text-base font-medium"> and </span>
            <span className="text-binance_green text-base font-bold">Privacy Policy</span>
            <span className="text-zinc-500 text-base font-medium">.</span>
          </div>
        </div>

        <div className='w-full mt-4'>
          <Button styles={"w-[60%] md:w-full mx-auto"} Action={"Register"} />
        </div>
      </div>
      <div className='mt-[70px]'>
        <p className='signin mb-3 text-center '>Or sign in with</p>
        <AuthComponent />
      </div>
    </>
  );
};

Index.getLayout = SignupLayout;
export default Index;
