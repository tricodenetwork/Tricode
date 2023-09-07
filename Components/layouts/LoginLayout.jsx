import React from "react";

import Sidebar from "@/Components/layouts/Sidebar";
const LoginLayout = (children) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='flex min-h-screen   items-center'>
      <Sidebar />
      <div className='bg-midorang mx-auto login min-h-max flex flex-col px-3 justify-center items-center'>
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
