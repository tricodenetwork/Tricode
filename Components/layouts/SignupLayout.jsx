import React from "react";
import Sidebar from "@/Components/layouts/Sidebar";
const LoginLayout = (children) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className="flex h-screen w-full">
      <Sidebar
        Header="Join US"
        Message="Join TRICODE's <Dev/> Network to connect with a diverse community of professionals including programmers, engineers, designers, and experts in adaptive manufacturing. Sign up now to access a collaborative platform for networking and skill-sharing."
      />
      <div className="bg-midorang w-full h-screen  flex flex-col px-3 justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
