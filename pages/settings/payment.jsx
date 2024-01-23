import MenuLayout from "@/Components/layouts/MenuLayout";
import SettingsLayout from "@/Components/layouts/SettingsLayout";
import Payment from "@/Components/settings/Payment";
import React from "react";

const Settings = () => {
  return (
    <div className='h-full overflow-y-scroll scroll-smooth scrollbar-hide'>
      <Payment />
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
