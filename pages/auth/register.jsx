import AuthComponent from "@/Components/AuthComponent";
import SignupLayout from "@/Components/layouts/SignupLayout";
import Link from "next/link";
import Button from "@/Components/Button";
import { Checkbox } from "@mui/material";
import InputLine from "@/Components/InputLine";
import RadioInput from "@/Components/RadioInput";
import { useState } from "react";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("company");

  //-----------------------------------------------------------FUNCTIONS
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-full login justify-around px-4 flex flex-col items-center'>
      <div className=''>
        <h3>Create an Account</h3>
        <div className='flex mt-[4px] mb-[10px] md:mt-[7px] md:mb-[20px] items-center'>
          <p className='mr-1 md:mr-3 member text-black'>
            Already have an account?
          </p>
          <Link href='/login'>
            <p className='text-binance_green register'>Sign in</p>
          </Link>
        </div>
      </div>
      <div className='md:w-[487px]  h-[70%] relative flex flex-col justify-between'>
        <div className='h-[55%] py-2 flex flex-col justify-between'>
          <InputLine placeholder={"Full Name"} />
          <InputLine placeholder={"Password*"} />
          <InputLine placeholder={"Confirm Password*"} />
          <InputLine placeholder={"Email"} />
          <div className='flex'>
            <div className='w-[15%] mr-4 flex'>
              <InputLine placeholder={"234"} />
            </div>
            <div className='w-[82%] flex'>
              <InputLine placeholder={"Mobile phone"} />
            </div>
          </div>
        </div>

        <div className='relative bottom-4'>
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

        <div className='flex flex-col relative bottom-3 justify-center '>
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
              styles={"w-[60%] hover:opacity-90 md:w-full mx-auto"}
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
