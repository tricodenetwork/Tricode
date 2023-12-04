import React, { useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { countries } from "./data";

const Countries = () => {
  const [searchCountry, setSearchCountry] = useState(false);
  const [searchSelectedCountry, setSearchSelectedCountry] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHistory, setFilteredHistory] = useState(countries);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setFilteredHistory(
      countries.filter(
        (country) =>
          country.fullname.toLowerCase().includes(value.toLowerCase()) ||
          country.phoneCode.toLowerCase().includes(value.toLowerCase()) ||
          country.shortName.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="w-auto border-b-[2px] border-gray-400 h-[34px] pr-2 space-x-2">
      <div className="relative cursor-pointer">
        <div onClick={() => setSearchCountry(!searchCountry)}>
          {searchSelectedCountry ? (
            <div className="flex items-center justify-around gap-2 text-[15px] h-[44px]">
              {/* {searchSelectedCountry.shortName} */}
              <img src={searchSelectedCountry.flag} className="w-[25px] rounded-sm" alt="" />
              <span>{searchSelectedCountry.phoneCode}</span>
            </div>
          ) : (
            <div className="flex items-center justify-around gap-2 h-[44px]">
              {/* {countries[158]?.shortName} */}
              <img src={countries[158]?.flag} className="w-[25px] mb-2 rounded-sm" alt="" />
              <span>{countries[158]?.phoneCode}</span>
            </div>
          )}
        </div>

        {searchCountry && (
          <motion.ul
            className="absolute top-[50px] h-[200px] w-[270px] z-50 overflow-y-auto overflow-x-hidden scroll-m-0 scroll-p-0 bg-[white] rounded-[8px] shadow-lg  border"
            initial={{
              x: 1000,
            }}
            animate={{ x: 0 }}
            transition={{ duration: 0.08 }}
          >
            <div className="bg-white mb-3 w-full">
              <input
                type="text"
                placeholder="Search..."
                className="p-3 border-b outline-none"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            {filteredHistory.map((country) => (
              <motion.li
                key={uuidv4()}
                className="flex items-center mb-[10px] hover:bg-gray-200 p-[10px] cursor-pointer text-[15px]"
                onClick={() => setSearchSelectedCountry(country)}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ stiffness: 300 }}
              >
                <img src={country.flag} width="30px" alt="" />
                <p className="mx-[10px]">{country.fullname}</p>
                <span>{country.phoneCode}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Countries;
