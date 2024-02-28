import Image from "next/image";
import { useState } from "react";
import { cards } from "../../Data/data";
import { Istok_Web } from "next/font/google";
import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";

const font = Istok_Web({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
});

export default function HireCard() {
  // Create state for tracking expansion status of each card
  const [expandedCards, setExpandedCards] = useState(
    Array(cards.length).fill(false)
  );

  // Function to toggle expansion status of a specific card
  const toggleExpansion = (index) => {
    // Close all other cards except the one being toggled
    const newExpandedCards = expandedCards.map((card, idx) =>
      idx === index ? !card : false
    );
    setExpandedCards(newExpandedCards);
  };

  return (
    <div className='flex w-screen relative duration-300 transition-all h-auto bottom-[45px] overflow-x-scroll scrollbar-hide mt-12 gap-4'>
      {cards.map((card_info, i) => (
        <motion.div
          key={i + 1}
          className={`min-w-[350px]  ${
            expandedCards[i] ? "h-[400px]" : "h-[320px]"
          }  pt-[30px] justify-around flex flex-col transition-all border-t-4 ease-linear duration-200 border-binance_green p-[35px] bg-white rounded-[5px_5px_50px_5px] shadow-[0px_0px_20px_#f7edff]`}
        >
          <div
            style={font.style}
            className='text-binance_green  flex items-center h-[70px] text-xl font-bold'
          >
            {card_info.tittle}
          </div>
          <div
            style={font.style}
            className={`w-auto duration-200 transition-all text-sm font-normal`}
          >
            {expandedCards[i]
              ? card_info.discr
              : card_info.discr.slice(0, 120).concat("...")}
          </div>
          <button
            style={font.style}
            className='w-28 flex mt-3 items-center'
            onClick={() => toggleExpansion(i)}
          >
            <div className='flex items-center  hover:text-binance_green '>
              <p className='text-base  flex items-center font-bold  whitespace-nowrap'>
                {expandedCards[i] ? "Read Less" : "Learn More"}
              </p>
              <div
                className={`${
                  expandedCards[i] ? "rotate-180" : ""
                } duration-300 hover:text-binance_green hover:rotate-180 ml-1 `}
              >
                <MdArrowRightAlt />
              </div>
            </div>
          </button>
        </motion.div>
      ))}
    </div>
  );
}
