import React from "react";
import open from "./faq.svg";
// import close from "../../assets/accordionclose.svg";

const Accordion = ({
  accordionId,
  question,
  answer,
  isOpen,
  toggleAccordion,
  Businesses,
  including,
}) => {
  return (
    <div className='flex max-w-[40vw] duration-300 flex-col text-black py-2 justify-center'>
      <div
        onClick={() => toggleAccordion(accordionId)}
        className='bg-stone-100 cursor-pointer flex flex-row mb-2 p-5 gap-y-34 rounded-md justify-between items-center'
      >
        <p className={`text-[15px] md:text-[18.687px] font-bold`}>{question}</p>
        <div>
          {isOpen ? (
            <img
              src='/assets/icons/right.svg'
              className='rotate-[90deg]'
              alt=''
            />
          ) : (
            <img src='/assets/icons/right.svg' alt='' />
          )}
        </div>
      </div>

      <div className='flex flex-col duration-300 text-black justify-center items-center'>
        {isOpen && (
          <div
            className='bg-stone-100 w-[95%] flex flex-col mb-2 p-5 bg-opacity-30 gap-y-34 rounded-md justify-center items-center'
            id='content'
          >
            <p className='text-[15.29px] m-3'>{answer}</p>
            {/* <p className="text-[15.29px] m-3">{including}</p>
              <p className="text-[15.29px] m-3">{Businesses}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
