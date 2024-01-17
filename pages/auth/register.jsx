import AuthComponent from "@/Components/AuthComponent";
import SignupLayout from "@/Components/layouts/SignupLayout";
import Link from "next/link";
import Button from "@/Components/Button";
import { Checkbox } from "@mui/material";
import InputLine from "@/Components/InputLine";
import RadioInput from "@/Components/RadioInput";
import { useState } from "react";
import CountryCode from "@/Components/CountryCode/Countries";
import ShowHidePassword, {
  ConfirmPassword,
} from "@/Components/ShowHidePassword";
import axios from "axios";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("company");
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);

  //-----------------------------------------------------------FUNCTIONS
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPass(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMobilePhoneChange = (e) => setMobilePhone(e.target.value);

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

  const handleSubmit = async () => {
    console.log("submitting");
    try {
      const response = await axios.post("/api/register", {
        fullName,
        password,
        email,
        mobilePhone,
        role: selectedOption, // Assuming selectedOption represents "Company or Talent" field
        // Other fields if needed
      });

      // Handle successful response
      console.log("Response:", response.data);
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-full login justify-around px-3 flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <h3 className='uppercase'>Create an Account</h3>
        <div className='flex mt-[4px]  md:mt-[7px] items-center'>
          <p className='mr-1 md:mr-3 member text-black'>
            Already have an account?
          </p>
          <Link href='/auth/login'>
            <p className='text-binance_green register'>Sign in</p>
          </Link>
        </div>
      </div>
      <div className='md:w-[487px]   h-[70%] relative flex flex-col justify-between'>
        <div className='h-[55%] py- flex flex-col justify-between'>
          <InputLine
            value={fullName}
            onChange={handleFullNameChange}
            placeholder={"Full Name"}
          />
          <div>
            <InputLine
              value={password}
              onChange={handlePasswordChange}
              placeholder={"Password*"}
              type={showPasswordToggle ? "text" : "password"}
            />
            <ShowHidePassword
              className='absolute ml-[-2.5rem] mt-[1rem]'
              onClick={showPassword}
              showPasswordToggle={showPasswordToggle}
            />
          </div>
          <div>
            <InputLine
              value={confirmPass}
              onChange={handleConfirmPasswordChange}
              placeholder={"Confirm Password*"}
              type={confirmPasswordToggle ? "text" : "password"}
            />
            <ConfirmPassword
              className='absolute ml-[-2.5rem] mt-[1rem]'
              onClick={confirmPassword}
              confirmPasswordToggle={confirmPasswordToggle}
            />
          </div>
          <InputLine
            value={email}
            onChange={handleEmailChange}
            placeholder={"Email"}
          />
          <div className='flex'>
            <div className='mr-4 mt-2'>
              <CountryCode />
            </div>
            <div className='w-[82%]'>
              <InputLine
                value={mobilePhone}
                onChange={handleMobilePhoneChange}
                placeholder={"Mobile phone"}
              />
            </div>
          </div>
        </div>

        <div className='relative mt-3 md:mt-0 '>
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
          <div className='flex relative bottom-1 items-center'>
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
              click={handleSubmit}
              styles={"hover:opacity-90 active:bg-gray-300 w-full mx-auto"}
              Action={"Register"}
            />
          </div>
        </div>
      </div>
      <div className=''>
        <p className='signin mb-2 text-center '>Or sign up with</p>
        <AuthComponent />
      </div>
    </div>
  );
};

Index.getLayout = SignupLayout;
export default Index;
