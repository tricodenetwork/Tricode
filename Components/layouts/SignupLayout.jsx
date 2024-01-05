import React from "react";
import Sidebar from "@/Components/layouts/Sidebar";
const LoginLayout = (children) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='flex h-[100vh] max-h-screen w-full '>
      <Sidebar
        Header='Join US'
        Message="Signing up for TRICODE's <Dev/> Network is your gateway to connecting with a diverse community of programmers,experts, and more."
      />
      <div className='w-full h-[100%]  flex flex-col px-3 justify-center items-center'>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
