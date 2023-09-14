import React from "react";
import Sidebar from "@/Components/layouts/Sidebar";
const LoginLayout = (children) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='flex h-full max-h-screen w-full '>
      <Sidebar Header='Join US' />
      <div className='bg-midorang w-full h-screen  flex flex-col px-3 justify-center items-center'>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
