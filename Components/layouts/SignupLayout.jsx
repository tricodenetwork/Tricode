import React from "react";
import Sidebar from "@/Components/layouts/Sidebar";
const LoginLayout = (children) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='flex h-full max-h-screen w-full '>
      <Sidebar
        Header='Join US'
        Message="Signing up for TRICODE's <Dev/> Network is your gateway to connecting with a diverse community of programmers, software engineers, product designers, product managers, mechatronics engineers, adaptive manufacturing experts, and more. In this section, we'll guide you through the process of creating your TRICODE account."
      />
      <div className='bg-midorang w-full h-screen  flex flex-col px-3 justify-center items-center'>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
