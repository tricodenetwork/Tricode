import React, { useState } from "react";
import Accordion from "./accordion";
import { faqdata } from "./faqdata";

const FAQs = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (accordionId) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionId ? null : accordionId
    );
  };

  return (
    <section
      className="px-8 lg:px-14 py-7 w-full lg:py-[90px] bg-white overflow-hidden justify-center items-center"
      id="faq"
    >
      <div className="flex flex-col lg:flex-row gap-3 md:gap-28 justify-center items-center w-full">
        <div>
          <div className="text-binance_green text-2xl md:text-5xl semiBold tracking-wide">
            FAQ’S
          </div>
          <div className="grid grid-cols-1 mt-3 gap-x-24">
            {faqdata.map((faq) => (
              <div key={faq.id} className="">
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
        <img src="/assets/about/faq.png" className="lg:w-[18em] flex" alt="" />
      </div>
    </section>
  );
};

export default FAQs;
