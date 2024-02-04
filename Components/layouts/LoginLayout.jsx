import React from "react";

import Sidebar from "@/Components/layouts/Sidebar";
const LoginLayout = (children) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='flex flex-col   h-screen  scrollbar-hide  justify-start lg:flex-row min-h-max lg:min-h-screen items-center'>
      <Sidebar
        Header='Welcome Back <Dev/>'
        Message="Welcome back to TRICODE <Dev/> Network! If you're a returning user, this section will guide you through the process of logging into your account."
      />
      <div className='login  h-full scrollbar-hide overflow-y-scroll  flex flex-col px-0 justify-center    items-center w-full'>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
