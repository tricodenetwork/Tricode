import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../Button";
const inputStyles = `border-b border-gray-700 focus:outline-none 
      focus:border-binance_green w-full px-1`;
const inputStyle = `border-b-2 my-[20px] md:my-[10px] pb-2border-gray-400 focus:outline-none focus:border-b-2 
      focus:border-binance_green w-full px-1 py-1`;

const ChangePassword = ({ close }) => {
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

    // If validation passes, you can proceed with password change logic here
    // For example, send a request to your backend to update the password

    // Reset validation errors
    setPasswordError(false);
    setConfirmPasswordError("");

    // Reset password and confirmation fields
    setPassword("");
    setConfirmPassword("");

    // Redirect the user or show a success message
  };
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
  return (
    <>
      <div className='relative p-[20px]'>
        <div className='flex w-full mb-2  justify-between'>
          <h4 style={{ fontSize: 24 }} className='text-binance_green Bold '>
            Change password
          </h4>
          <button onClick={close}>
            <CloseIcon />
          </button>
        </div>
        <div>
          <div>
            <p style={{ fontSize: 18 }} className='regular text-[#6D717A]'>
              Enter your current password here
            </p>
            <input className={inputStyles} type='text' />
          </div>
          <div className='mt-5'>
            <h4 style={{ fontSize: 20 }} className='text-black Bold  mb-3'>
              Criteria:
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
                className={inputStyle}
                placeholder='New password'
                type='password'
                value={password}
                onChange={passwordTest}
              />
              <input
                className={inputStyle}
                placeholder='Confirm password'
                type='password'
                value={confirmPassword}
                onChange={confirmPass}
              />
            </form>
          </div>
        </div>
      </div>
      <div className='w-full  py-3 px-6 rounded-b-3xl justify-end flex bg-[#e0e0e0]  border'>
        <button
          style={{ fontSize: 12 }}
          className={
            "w-[80px] py-1 Bold  rounded-3xl bg-transparent border-none text-black"
          }
        >
          Cancel
        </button>
        <button
          style={{ fontSize: 12 }}
          className={
            "w-[90px] py-2 ml-3 bg-white semiBold rounded-3xl  text-binance_green border-2 border-binance_green"
          }
        >
          Save
        </button>
      </div>
    </>
  );
};

export default ChangePassword;
