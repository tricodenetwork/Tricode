import MenuLayout from "@/chest/layouts/MenuLayout";
import SettingsLayout from "@/chest/layouts/SettingsLayout";
import User from "@/chest/settings/User";
import React from "react";

const Settings = () => {
  return (
    <div className='flex-1 h-full overflow-y-scroll  scrollbar-hide'>
      <User />
    </div>
  );
};

Settings.getLayout = function getLayout(page) {
  // Nest layouts as needed
  return (
    <MenuLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </MenuLayout>
  );
};
export default Settings;
