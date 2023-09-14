import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const countries = [
    { name: 'Nigeria', code: '+234', flag: '/assets/icons/emoji _nigeria.svg' },
    { name: 'United States', code: '+1', flag: '/assets/icons/emoji _nigeria.svg' },
  { name: 'United Kingdom', code: '+44', flag: '/assets/icons/emoji _nigeria.svg' },
  // Add more countries here...
];

function CountryCode() {
  const [selectedCountry, setSelectedCountry] = useState('+234');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <FormControl variant="standard">
      <Select
        label="Country Code"
        value={selectedCountry}
        onChange={handleChange}
      >
        {countries.map((country, index) => (
          <MenuItem key={index} value={country.code}>
            <div className="flex flex-row">
              <img src={country.flag} alt="" className="w-6 h-6" />
              {country.code}
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CountryCode;
