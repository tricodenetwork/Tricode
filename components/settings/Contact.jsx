import React from "react";
import InputLine from "../InputLine";
import { Select } from "@mui/material";
import SelectComponent from "../customInputs/SelectComponent";

const cities = [
  "Lagos",
  "Port Harcourt",
  "Benin-City",
  "Kaduna",
  "Abuja",
  "Ogun",
];
const states = [
  "Lagos",
  "Port Harcourt",
  "Edo",
  "Kaduna",
  "Abuja",
  "Ogun",
  "Ondo",
  "Delta",
];
const countries = [
  "Nigeria",
  "Afghanistan",
  "Dubai",
  "US",
  "Germany",
  "Canada",
  "England",
  "Italy",
];

const Contact = () => {
  return (
    <div className='flex-1 flex-col  h-full w-[95%] self-center pt-10  flex justify-start  rounded-md mr-5 '>
      <h6 style={{ fontSize: 24 }} className='text-black mb-4 semiBold'>
        Contact Information
      </h6>
      <div className='flex w-full justify-between mb-3 items-center'>
        <p
          style={{ fontSize: 18 }}
          className='text-[#000022] opacity-60 semiBold'
        >
          Address
        </p>
        <div className='w-[70%]'>
          <InputLine
            styles={"bg-transparent w-[100%] mr-2 regular text-[16px]"}
            placeholder={"No 5 Odigie Avenue, Idumota, Lagos."}
          />
        </div>
      </div>
      <div className='flex w-full justify-between mb-3 items-center'>
        <p
          style={{ fontSize: 18 }}
          className='text-[#000022] opacity-60 semiBold'
        >
          City
        </p>
        <div className='w-[70%]'>
          <SelectComponent placeholder={"Port-Harcourt"} items={cities} />
        </div>
      </div>
      <div className='flex w-full justify-between mb-3 items-center'>
        <p
          style={{ fontSize: 18 }}
          className='text-[#000022] opacity-60 semiBold'
        >
          State
        </p>
        <div className='w-[70%]'>
          <SelectComponent placeholder={"Rivers"} items={states} />
        </div>
      </div>
      <div className='flex w-full justify-between mb-3 items-center'>
        <p
          style={{ fontSize: 18 }}
          className='text-[#000022] opacity-60 semiBold'
        >
          Country
        </p>
        <div className='w-[70%]'>
          <SelectComponent placeholder={"Nigeria"} items={countries} />
        </div>
      </div>
      <div className='flex w-full justify-between mb-3 items-center'>
        <p
          style={{ fontSize: 18 }}
          className='text-[#000022] opacity-60 semiBold'
        >
          Phone Number
        </p>
        <div className='w-[70%]'>
          <InputLine
            styles={"bg-transparent w-[40%] mr-2 regular text-[16px]"}
            placeholder={"+234818198447"}
          />
        </div>
      </div>
      <div className='flex w-full justify-between mb-3 items-center'>
        <p
          style={{ fontSize: 18 }}
          className='text-[#000022] opacity-60 semiBold'
        >
          Zip
        </p>
        <div className='w-[70%]'>
          <InputLine
            styles={"bg-transparent w-[20%] mr-2 regular text-[16px]"}
            placeholder={"330563"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
