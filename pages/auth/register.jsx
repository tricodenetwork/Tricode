import AuthComponent from "@/Components/AuthComponent";
import SignupLayout from "@/Components/layouts/SignupLayout";
import Link from "next/link";
import Button from "@/Components/Button";
import { Checkbox } from "@mui/material";
import InputLine from "@/Components/InputLine";
import RadioInput from "@/Components/RadioInput";
import { useState } from "react";
import CountryCode from "@/Components/CountryCode/Countries";
import ShowHidePassword, { ConfirmPassword } from "@/Components/ShowHidePassword";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("company");
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);

  //-----------------------------------------------------------FUNCTIONS
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const showPassword = () => {
    setShowPasswordToggle(!showPasswordToggle);
  };

  const confirmPassword = () => {
    setConfirmPasswordToggle(!confirmPasswordToggle);
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-full login justify-around px-3 flex flex-col items-center'>
      <div className=''>
        <h3>Create an Account</h3>
        <div className='flex mt-[4px] mb-[10px] md:mt-[7px] md:mb-[20px] items-center'>
          <p className='mr-1 md:mr-3 member text-black'>
            Already have an account?
          </p>
          <Link href='/auth/login'>
            <p className='text-binance_green register'>Sign in</p>
          </Link>
        </div>
      </div>
      <div className='md:w-[487px]  h-[70%] relative flex flex-col justify-between'>
        <div className='h-[55%] py-2 flex flex-col justify-between'>
          <InputLine placeholder={"Full Name"} />
          <div>
            <InputLine placeholder={"Password*"} type={showPasswordToggle ? "text" : "password"} />
            <ShowHidePassword
              className="absolute ml-[-2.5rem] mt-[1rem]"
              onClick={showPassword}
              showPasswordToggle={showPasswordToggle}
            />
          </div>
          <div>
            <InputLine placeholder={"Confirm Password*"} type={confirmPasswordToggle ? "text" : "password"} />
            <ConfirmPassword
              className="absolute ml-[-2.5rem] mt-[1rem]"
              onClick={confirmPassword}
              confirmPasswordToggle={confirmPasswordToggle}
            />
          </div>
          <InputLine placeholder={"Email"} />
          <div className='flex'>
            <div className='mr-4 mt-2'>
              <CountryCode />
            </div>
            <div className='w-[82%]'>
              <InputLine placeholder={"Mobile phone"} />
            </div>
          </div>
        </div>

        <div className='relative mt-4 md:mt-0 bottom-4'>
          <div className='text-[#000000] mb-1 text-sm md:text-lg font-medium'>
            Are you a Company or Talent?
          </div>
          <div className='flex items-center'>
            <RadioInput
              name='answerOptions'
              value='company'
              label='Company'
              checked={selectedOption === "company"}
              onChange={handleOptionChange}
            />{" "}
            <RadioInput
              name='answerOptions'
              value='talent'
              label='Talent'
              className='ml-4'
              checked={selectedOption === "talent"}
              onChange={handleOptionChange}
            />
          </div>
        </div>

        <div className='flex flex-col relative mb-3 justify-center '>
          <div className='flex items-center'>
            <Checkbox
              sx={{ padding: 0, marginLeft: 0, marginRight: 2 }}
              onChange={handleChange}
              checked={checked}
            />
            <p>
              <span className='text-zinc-500 member'>
                I have read and agree to Tricode’s{" "}
              </span>
              <span className='text-binance_green font-bold'>
                Terms of Service
              </span>
              <span className='text-zinc-500 member'> and </span>
              <span className='text-binance_green font-bold'>
                Privacy Policy
              </span>
              <span className='text-zinc-500'>.</span>
            </p>
          </div>
          <div className='w-full mt-4'>
            <Button
              styles={"hover:opacity-90 w-full mx-auto"}
              Action={"Register"}
            />
          </div>
        </div>
      </div>
      <div className=''>
        <p className='signin mb-1 text-center '>Or sign in with</p>
        <AuthComponent />
      </div>
    </div>
  );
};

Index.getLayout = SignupLayout;
export default Index;