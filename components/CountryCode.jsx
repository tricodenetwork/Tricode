import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import Image from "next/image";

const countries = [
  { name: "Nigeria", code: "+234", flag: "/assets/icons/emoji _nigeria.svg" },
  {
    name: "United States",
    code: "+1",
    flag: "/assets/icons/emoji _nigeria.svg",
  },
  {
    name: "United Kingdom",
    code: "+44",
    flag: "/assets/icons/emoji _nigeria.svg",
  },
  // Add more countries here...
];

function CountryCode() {
  const [selectedCountry, setSelectedCountry] = useState("+234");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <FormControl variant='standard'>
      <Select
        label='Country Code'
        value={selectedCountry}
        onChange={handleChange}
      >
        {countries.map((country, index) => (
          <MenuItem key={index.toString()} value={country.code}>
            <div className='flex flex-row'>
              <Image src={country.flag} alt='flag' width={24} height={24} />
              {country.code}
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CountryCode;
