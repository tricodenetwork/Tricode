import React from "react";
import SearchComponent from "../editor/SearchComponent";
import ProfileCard from "../settings/ProfileCard";
import SettingsNav from "../settings/SettingsNav";
import User from "../svg/User";
import Contact from "../svg/Contact";
import Pay from "../svg/Pay";

const SettingsLayout = ({ children }) => {
  return (
    <div className='w-full pt-10 pl-12 flex h-full'>
      <div className='flex h-full flex-col items-start justify-start w-[43%]'>
        <SearchComponent />
        <div className='w-full mt-12'>
          <ProfileCard />
        </div>
        <div className='w-[90%] mt-10'>
          <SettingsNav Icon={User} name={"User Management"} />
          <SettingsNav Icon={Contact} name={"Contact Information"} />
          <SettingsNav Icon={Pay} name={"Payment Information"} />
        </div>
      </div>
      <div className='flex-1 ml-10 h-full'>{children}</div>
    </div>
  );
};

export default SettingsLayout;
