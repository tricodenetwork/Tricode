import React from "react";
import SearchComponent from "../editor/SearchComponent";
import ProfileCard from "../settings/ProfileCard";
import SettingsNav from "../settings/SettingsNav";
import User from "../svg/User";
import Contact from "../svg/Contact";
import Pay from "../svg/Pay";

const SettingsLayout = ({ children }) => {
  return (
    <div className='w-full py-10 pl-5  lg:pl-12 flex flex-col lg:flex-row h-full'>
      <div className='flex h-full flex-col items-start justify-start w-full lg:w-[43%]'>
        <SearchComponent />
        <div className='w-full mt-6 lg:mt-12'>
          <ProfileCard />
        </div>
        <div className='w-[90%] mt-5 lg:mt-10'>
          <SettingsNav Icon={User} name={"User Management"} />
          <SettingsNav Icon={Contact} name={"Contact Information"} />
          <SettingsNav Icon={Pay} name={"Payment Information"} />
        </div>
      </div>
      <div className='flex-1 mt-10 lg:mt-0 lg:ml-10 h-full'>{children}</div>
    </div>
  );
};

export default SettingsLayout;
