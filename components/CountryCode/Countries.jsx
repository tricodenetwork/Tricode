import React, { useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { countries } from "./data";
import InputLine from "../InputLine";
import Image from "next/image";

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
    <div className='w-full border-b-[2px] relative top-[5.5px] border-gray-400 my-[10px] '>
      <div className='relative w-full cursor-pointer'>
        <div
          className='w-full'
          onClick={() => setSearchCountry(!searchCountry)}
        >
          {searchSelectedCountry ? (
            <div className='flex items-center   justify-around  text-[15px]'>
              {/* {searchSelectedCountry.shortName} */}
              <Image
                width={20}
                height={20}
                src={searchSelectedCountry.flag}
                className='w-[20px] mb-2 rounded-sm'
                alt='flag'
              />
              <span>{searchSelectedCountry.phoneCode}</span>
            </div>
          ) : (
            <div className='flex items-center justify-around w-full'>
              {/* {countries[158]?.shortName} */}
              <Image
                width={20}
                height={20}
                src={countries[158]?.flag}
                className='w-[20px]  rounded-sm'
                alt=''
              />
              <span>{countries[158]?.phoneCode}</span>
            </div>
          )}
        </div>

        {searchCountry && (
          <motion.ul
            className='absolute top-[50px] h-[200px] w-[270px] z-50 overflow-y-auto overflow-x-hidden scroll-m-0 scroll-p-0 bg-[white] rounded-[8px] shadow-lg  border'
            initial={{
              x: 1000,
            }}
            animate={{ x: 0 }}
            transition={{ duration: 0.08 }}
          >
            <InputLine
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {filteredHistory.map((country) => (
              <motion.li
                key={uuidv4()}
                className='flex items-center mb-[10px] hover:bg-gray-200 p-[10px]  cursor-pointer text-[15px]'
                onClick={() => setSearchSelectedCountry(country)}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ stiffness: 300 }}
              >
                <Image width={30} height={30} src={country.flag} alt='flag' />
                <p className='mx-[10px]'>{country.fullname}</p>
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
