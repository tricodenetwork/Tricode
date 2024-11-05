import React, { useState } from "react";
import Accordion from "./accordion";
import { faqdata } from "./faqdata";
import Image from "next/image";
import useFonts from "@/hooks/useFonts";

const FAQs = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  const { font, poppins } = useFonts();

  const toggleAccordion = (accordionId) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionId ? null : accordionId
    );
  };

  return (
    <div className='flex flex-col h-screen  lg:h-screen  p-10 lg:p-20  relative gap-10  sm:gap-20  justify-start  items-center w-full'>
      <h6
        style={poppins.style}
        className='text-app_black  text-center sm:text-left text-2xl lg:text-[56px] leading-none font-semibold'
      >
        Frequently asked questions
      </h6>
      <div className='flex self-center   w-full flex-col items-center mt-3'>
        {faqdata.map((faq) => (
          <div key={faq.id} className=''>
            <Accordion
              accordionId={faq.id}
              answer={faq.answer}
              Businesses={faq.Businesses}
              including={faq.including}
              question={faq.question}
              isOpen={openAccordionId === faq.id}
              toggleAccordion={toggleAccordion}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
