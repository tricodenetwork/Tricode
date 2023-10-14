import React from "react";

import Sidebar from "@/Components/layouts/Sidebar";
const LoginLayout = (children) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='flex min-h-screen items-center'>
      <Sidebar
        Header="Welcome Back <Developer/>"
        Message="Welcome back to TRICODE <Dev/> Network! If you're a returning user, this section will guide you through the process of logging into your account."
      />
      <div className='bg-midorang login min-h-max flex flex-col px-0 justify-center items-center w-full'>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
