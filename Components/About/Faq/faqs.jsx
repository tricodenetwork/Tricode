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
    <div className='flex flex-col p-40  relative md:flex-row gap-3 md:gap-28 lg:justify-start justify-center items-center w-full'>
      <div>
        <div className='text-binance_green text-2xl md:text-5xl semiBold tracking-wide'>
          FAQ’S
        </div>
        <div className='grid grid-cols-1 mt-3 gap-x-24'>
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
      <div className='h-[500px] absolute top-40  right-40 my-auto flex items-center justify-center'>
        <div className='relative lg:w-[300px] lg:h-[300px] '>
          <Image
            fill
            src='/assets/about/faq.png'
            className='object-cover'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
