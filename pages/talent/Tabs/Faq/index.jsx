"use client";

import React, { useState } from "react";
import Accordion from "./accordion";
import { faqdata } from "./faqdata";
import Image from "next/image";

const FAQs = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (accordionId) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionId ? null : accordionId
    );
  };

  return (
    <div
      className='flex flex-col relative bg- gap-4 md:gap-8 py-10 justify-between lg:justify-start  items-center w-full'
      id='faq'
    >
      <div className='text-3xl md:text-5xl Poppins-SemiBold'>
        FAQ
      </div>
      <div className='flex self-center w-full md:w-[80%] flex-col items-start mt-3 md:mt-0'>
        {faqdata.map((faq) => (
          <Accordion
            key={faq.id}
            accordionId={faq.id}
            answer={faq.answer}
            Businesses={faq.Businesses}
            including={faq.including}
            question={faq.question}
            isOpen={openAccordionId === faq.id}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
