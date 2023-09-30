import React, { useEffect, useState } from 'react';
import InputLine from "@/Components/InputLine";
import Sidebar from "@/Components/layouts/Sidebar";
import Button from "@/Components/Button";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordCharacters, setPasswordCharacters] = useState('');
  const [passwordUppercase, setUppercase] = useState('');
  const [passwordLowercase, setLowercase] = useState('');
  const [specialCharacter, setSpecialCharacter] = useState('');
  const [numericCharacter, setNumericCharacter] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  //-----------------------------------------------------------FUNCTIONS

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      // Redirect the user or show a success message
    }
  };

  //------------------------------------------------------------------USE EFFECTS

  useEffect(() => {
    // Validation logic
    if (password.length < 8 || password.length > 32) {
      setPasswordCharacters(false);
    } else {
      setPasswordCharacters(true);
    }

    if (!/[A-Z]/.test(password)) {
      setUppercase(true);
    } else {
      setUppercase(false);
    }

    if (!/[a-z]/.test(password)) {
      setLowercase(true);
    } else {
      setLowercase(false);
    }

    if (!/[!@#$%^&*]/.test(password)) {
      setSpecialCharacter(true);
    } else {
      setSpecialCharacter(false);
    }

    if (!/\d/.test(password)) {
      setNumericCharacter(true);
    } else {
      setNumericCharacter(false);
    }
  }, [password]);


  return (
    <>
      <div className='flex min-h-screen  items-center'>
        <Sidebar Header="Welcome Back" />
        <div className='bg-midorang mx-auto login min-h-max flex flex-col px-3 justify-center items-center'>
          <h3>Set New password</h3>
          <div className="mt-5">
            <div className="text-black text-2xl font-semibold">Instruction:</div>
            <div className="relative">
              <div className="flex h-6 gap-3">
                <img
                  src={passwordCharacters ? "/assets/icons/mark_correct.svg" : "/assets/icons/mark_wrong.svg"}
                  className="w-4 h-4"
                />
                <div className="text-zinc-500 text-[15px]">8-32 characters</div>
              </div>

              <div className="flex h-6 gap-3">
                <img
                  src={passwordUppercase ? "/assets/icons/mark_correct.svg" : "/assets/icons/mark_wrong.svg"}
                  className="w-4 h-4"
                />
                <div className="text-zinc-500 text-[15px]">One upper case</div>
              </div>

              <div className="flex h-6 gap-3">
                <img
                  src={passwordLowercase ? "/assets/icons/mark_correct.svg" : "/assets/icons/mark_wrong.svg"}
                  className="w-4 h-4"
                />
                <div className="text-zinc-500 text-[15px]">One lower case</div>
              </div>

              <div className="flex h-6 gap-3">
                <img
                  src={specialCharacter ? "/assets/icons/mark_correct.svg" : "/assets/icons/mark_wrong.svg"}
                  className="w-4 h-4"
                />
                <div className="text-zinc-500 text-[15px]">One special character</div>
              </div>

              <div className="flex h-6 gap-3">
                <img
                  src={numericCharacter ? "/assets/icons/mark_correct.svg" : "/assets/icons/mark_wrong.svg"}
                  className="w-4 h-4"
                />
                <div className="text-zinc-500 text-[15px]">One numeric character</div>
              </div>
              {confirmPasswordError && <div className="text-red-500">{confirmPasswordError}</div>}
            </div>

            <form onSubmit={handleSubmit}>
              <InputLine
                placeholder="Password*"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <InputLine
                placeholder="Retype password*"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <div className='w-full mt-4'>
                <Button styles={"w-[60%] md:w-full mx-auto"} Action={"Continue"} />
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
