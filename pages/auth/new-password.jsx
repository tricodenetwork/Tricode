import React, { useState } from "react";
import Sidebar from "@/Components/layouts/Sidebar";
import Button from "@/Components/Button";

const inputStyles = `border-b-2 my-[20px] md:my-[10px] pb-2border-gray-400 focus:outline-none focus:border-b-2 
      focus:border-binance_green w-full px-1 py-1`;

const Index = () => {
  // --------------------------------------------VARIABLES
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [special, setSpecial] = useState("/assets/icons/mark_wrong.svg");
  const [numeric, setNumeric] = useState("/assets/icons/mark_wrong.svg");
  const [passwordCharacters, setPasswordCharacters] = useState(
    "/assets/icons/mark_wrong.svg"
  );
  const [passwordUppercase, setPasswordUppercase] = useState(
    "/assets/icons/mark_wrong.svg"
  );
  const [passwordLowercase, setPasswordLowercase] = useState(
    "/assets/icons/mark_wrong.svg"
  );
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //-----------------------------------------------------------FUNCTIONS

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      // Redirect the user or show a success message
    }
  };

  //------------------------------------------------------------------USE EFFECTS

  // useEffect(() => {
  //   // Validation logic
  //   // if (!password) {
  //   //   setPasswordError('Password is required');
  //   //   return;
  //   // }

  //   // If validation passes, you can proceed with password change logic here
  //   // For example, send a request to your backend to update the password

  //   // Reset validation errors
  //   setPasswordError(false);
  //   setConfirmPasswordError("");

  //   // Reset password and confirmation fields
  //   setPassword("");
  //   setConfirmPassword("");

  //   // Redirect the user or show a success message
  // },[]);

  const passwordTest = (e) => {
    const currentValue = e.target.value;

    setPassword(currentValue);

    if (currentValue.length < 8 || currentValue.length > 32) {
      setPasswordCharacters("/assets/icons/mark_wrong.svg");
      setPasswordError(true);
    } else {
      setPasswordCharacters("/assets/icons/mark_correct.svg");
      setPasswordError(false);
    }

    if (!/[A-Z]/.test(currentValue)) {
      setPasswordUppercase("/assets/icons/mark_wrong.svg");
      setPasswordError(true);
    } else {
      setPasswordUppercase("/assets/icons/mark_correct.svg");
      setPasswordError(false);
    }
    if (!/[a-z]/.test(currentValue)) {
      setPasswordLowercase("/assets/icons/mark_wrong.svg");
      setPasswordError(true);
    } else {
      setPasswordLowercase("/assets/icons/mark_correct.svg");
      setPasswordError(false);
    }

    if (!/\d/.test(currentValue)) {
      setNumeric("/assets/icons/mark_wrong.svg");
      setPasswordError(true);
    } else {
      setNumeric("/assets/icons/mark_correct.svg");
      setPasswordError(false);
    }

    if (!/[!@#$%^&*]/.test(currentValue)) {
      setSpecial("/assets/icons/mark_wrong.svg");
      setPasswordError(true);
    } else {
      setSpecial("/assets/icons/mark_correct.svg");
      setPasswordError(false);
    }
  };

  const confirmPass = (e) => {
    const currentValue = e.target.value;
    setConfirmPassword(currentValue);

    if (password !== currentValue) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      <div className='flex min-h-screen  items-center'>
        <Sidebar
          Header='Join US'
          Message="Signing up for TRICODE's <Dev/> Network is your gateway to connecting with a diverse community of programmers, software engineers, product designers, product managers, mechatronics engineers, adaptive manufacturing experts, and more. In this section, we'll guide you through the process of creating your TRICODE account."
        />
        <div className='mx-4 login min-h-max md:mt-0 mt-[-10em] flex flex-col px-3 justify-center items-center'>
          <h3 style={{ fontSize: 22 }} className='semiBold'>
            Set New password
          </h3>
          <div className='mt-5'>
            <h4 style={{ fontSize: 24 }} className='text-black semiBold  mb-3'>
              Instruction:
            </h4>
            <div className='relative mb-4 space-y-3'>
              <div className='flex items-center h-6 gap-3'>
                <img src={passwordCharacters} className='w-4 h-4' />
                <div style={{ fontSize: 16 }} className='light text-zinc-500'>
                  8-32 characters
                </div>
              </div>

              <div className='flex items-center h-6 gap-3'>
                <img src={passwordUppercase} className='w-4 h-4' />
                <div style={{ fontSize: 16 }} className='light text-zinc-500'>
                  One upper case
                </div>
              </div>
              <div className='flex items-center h-6 gap-3'>
                <img src={passwordLowercase} className='w-4 h-4' />
                <div style={{ fontSize: 16 }} className='light text-zinc-500'>
                  One lower case
                </div>
              </div>
              <div className='flex items-center h-6 gap-3'>
                <img src={special} alt='' className='w-4 h-4' />
                <div style={{ fontSize: 16 }} className='light text-zinc-500'>
                  One special character
                </div>
              </div>

              <div className='flex items-center h-6 gap-3'>
                <img src={numeric} alt='' className='w-4 h-4' />
                <div style={{ fontSize: 16 }} className='light text-zinc-500'>
                  One numeric character
                </div>
              </div>
              {passwordError && (
                <div className='text-red-500'>{passwordError}</div>
              )}
              {confirmPasswordError && (
                <div className='text-red-500'>{confirmPasswordError}</div>
              )}
            </div>

            <form onSubmit={handleSubmit}>
              <input
                className={inputStyles}
                placeholder='Password*'
                type='password'
                value={password}
                onChange={passwordTest}
              />
              <input
                className={inputStyles}
                placeholder='Retype password*'
                type='password'
                value={confirmPassword}
                onChange={confirmPass}
              />
              <div className='w-full mt-4'>
                <Button styles={"w-full mx-auto"} Action={"Continue"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
