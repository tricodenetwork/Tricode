import React, { useState } from "react";
import Support from "./support/index";
import Forums from "./forums/index";
import Faq from "./Faq";

const SettingsHeader = ({ defaultTab = 1 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const buttonStyles = (tabNumber) =>
    `w-36 h-9 rounded-full ${
      activeTab === tabNumber
        ? "bg-binance_green text-white"
        : "bg-none border border-binance_green text-binance_green hover:bg-binance_green hover:text-white"
    }`;

  return (
    <div className="w-full">
      <div className="flex w-full sm:w-[49%] items-center justify-between mx-auto mt-5">
        {/* Support Tab */}
        <button
          className={buttonStyles(1)}
          onClick={() => handleTabClick(1)}
        >
          <div className="flex flex-col w-36 h-9 gap-0.5 items-center justify-center">
            <div className="text-[17px]">Support</div>
          </div>
        </button>

        {/* FAQ Tab */}
        <button
          className={buttonStyles(2)}
          onClick={() => handleTabClick(2)}
        >
          <div className="flex flex-col w-36 h-9 gap-0.5 items-center justify-center">
            <div className="text-[17px]">FAQ</div>
          </div>
        </button>

        {/* Forums Tab */}
        <button
          className={buttonStyles(3)}
          onClick={() => handleTabClick(3)}
        >
          <div className="flex flex-col w-36 h-9 gap-0.5 items-center justify-center">
            <div className="text-[17px]">Forums</div>
          </div>
        </button>
      </div>

      {/* Content for each tab */}
      <div className="mt-5">
        {activeTab === 1 && <Support />}
        {activeTab === 2 && <Faq />}
        {activeTab === 3 && <Forums />}
      </div>
    </div>
  );
};

export default SettingsHeader;
