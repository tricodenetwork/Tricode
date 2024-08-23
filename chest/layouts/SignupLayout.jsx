import React from "react";
import Sidebar from "@/chest/layouts/Sidebar";
const LoginLayout = (children) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 h-[100vh] max-h-screen w-full '>
      <Sidebar
        Header='Join us'
        Message="Signing up for TRICODE's <Dev/> Network is your gateway to connecting with a diverse community of programmers,experts, and more."
      />
      <div className='w-full h-auto overflow-y-scroll  flex flex-col  justify-center items-center'>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
