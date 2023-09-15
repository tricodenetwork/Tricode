import MenuLayout from "@/components/layouts/MenuLayout";
import SettingsLayout from "@/components/layouts/SettingsLayout";
import User from "@/components/settings/User";
import React from "react";

const Settings = () => {
  return (
    <div className='flex-1 h-full overflow-y-auto scrollbar-hide'>
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
