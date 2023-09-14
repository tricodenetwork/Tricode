import React, { useState } from 'react';
import InputLine from "@/Components/InputLine";
import Sidebar from "@/Components/layouts/Sidebar";
import Button from "@/Components/Button";

const Index = () => {
  // --------------------------------------------VARIABLES
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCharacters, setPasswordCharacters] = useState('');
  const [passwordUppercase, setUppercase] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  //-----------------------------------------------------------FUNCTIONS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    // if (!password) {
    //   setPasswordError('Password is required');
    //   return;
    // }

    if (password.length < 8 || password.length > 32) {
      setPasswordCharacters("/assets/icons/mark_correct.svg");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setUppercase("/assets/icons/mark_correct.svg");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setPasswordError('Password must contain at least one lowercase letter');
      return;
    }

    if (!/\d/.test(password)) {
      setPasswordError('Password must contain at least one numeric character');
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError('Password must contain at least one special character');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    // If validation passes, you can proceed with password change logic here
    // For example, send a request to your backend to update the password

    // Reset validation errors
    setPasswordError('');
    setConfirmPasswordError('');

    // Reset password and confirmation fields
    setPassword('');
    setConfirmPassword('');

    // Redirect the user or show a success message
  };

  //------------------------------------------------------------------USE EFFECTS


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
                  src={passwordCharacters ? passwordCharacters : "/assets/icons/mark_wrong.svg"}
                  className="w-4 h-4"
                />
                <div className="text-zinc-500 text-[15px]">8-32 characters</div>
              </div>


              <div className="flex h-6 gap-3">
                <img
                  src={passwordUppercase ? passwordUppercase : "/assets/icons/mark_wrong.svg"}
                  className="w-4 h-4"
                />
                <div className="text-zinc-500 text-[15px]">One upper case</div>
              </div>

              <div className="flex h-6 gap-3">
                <img src="/assets/icons/mark_correct.svg" alt="" className="w-4 h-4" />
                <div className="text-zinc-500 text-[15px]">One lower case</div>
              </div>

              <div className="flex h-6 gap-3">
                <img src="/assets/icons/mark_correct.svg" alt="" className="w-4 h-4" />
                <div className="text-zinc-500 text-[15px]">One special character</div>
              </div>

              <div className="flex h-6 gap-3">
                <img src="/assets/icons/mark_wrong.svg" alt="" className="w-4 h-4" />
                <div className="text-zinc-500 text-[15px]">One numeric character</div>
              </div>
              {passwordError && <div className="text-red-500">{passwordError}</div>}
              {confirmPasswordError && <div className="text-red-500">{confirmPasswordError}</div>}
            </div>

            <form onSubmit={handleSubmit}>
              <InputLine
                placeholder="Password*"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputLine
                placeholder="Retype password*"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
