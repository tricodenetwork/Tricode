import React from "react";
import MenuLayout from "@/Components/layouts/MenuLayout";
import SettingsLayout from "@/Components/layouts/SettingsLayout";
import Contact from "@/Components/settings/Contact";

const Settings = () => {
  return (
    <div className='flex-1 h-full overflow-y-auto scrollbar-hide'>
      <Contact />
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
