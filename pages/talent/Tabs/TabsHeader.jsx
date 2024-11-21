import React, { useState } from "react";
import Support from "./support/index";
import Forums from "./forums/index";
import Faq from "./Faq";

const SettingsHeader = ({ defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full">
      <div className="flex w-full sm:w-[49%] items-center justify-between mx-auto mt-5">
        <button
          className={`py-2 h-[50px] rounded-full ${activeTab === 1 ? "bg-binance_green text-white" : "bg-none border border-binance_green text-binance_green"
            }`}
          onClick={() => handleTabClick(1)}
        >
          <div className="flex flex-col w-[100px] sm:w-[120px] gap-0.5 items-center justify-center">
            <div className="text-[17px]">Support</div>
          </div>
        </button>

        <button
          className={`py-2 h-[50px] rounded-full ${activeTab === 2 ? "bg-binance_green text-white" : "bg-none border border-binance_green text-binance_green"
            }`}
          onClick={() => handleTabClick(2)}
        >
          <div className="flex flex-col w-[100px] sm:w-[120px] gap-0.5 items-center justify-center">
            <div className="text-[17px] w-auto">FAQ</div>
          </div>
        </button>

        <button
          className={`py-2 h-[50px] rounded-full ${activeTab === 3 ? "bg-binance_green text-white" : "bg-none border border-binance_green text-binance_green"
            }`}
          onClick={() => handleTabClick(3)}
        >
          <div className="flex flex-col w-[100px] sm:w-[120px] gap-0.5 items-center justify-center">
            <div className="text-[17px]">Forums</div>
          </div>
        </button>
      </div>

      {/* Content for each tab */}
      {activeTab === 1 && (
        <div>
          <Support />
        </div>
      )}
      {activeTab === 2 && (
        <div>
          <Faq />
        </div>
      )}
      {activeTab === 3 && (
        <div>
          <Forums />
        </div>
      )}
    </div>
  );
};

export default SettingsHeader;
