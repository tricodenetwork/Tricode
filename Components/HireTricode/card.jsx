import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Pagination, Autoplay } from "swiper";
import { cards } from "../../Data/data";
import { Istok_Web } from "next/font/google";

const font = Istok_Web({
  weight: ["400", "700"],
  subsets: ["cyrillic", "latin"],
});
export default function HireCard() {
  return (
    <>
      {/* <div className='w-screen bord hidden md:flex gap-3'>
        <Swiper
          slidesPerview={1.2}
          spaceBetween={120}
          breakpoints={{
            799: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1424: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          // pagination={{
          //   clickable: false,
          // }}
          // modules={[Pagination, Autoplay]}
        >
          {cards.map((card_info, i) => (
            <SwiperSlide key={i + 1}>
              <div className='w-[270px] h-80 px-5 pt-[7vh] my-9 bg-white hover:border-t-2 hover:border-binance_green justify-center items-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[50px] shadow'>
                <div className="text-binance_green text-xl font-bold font-['Istok Web']">
                  {card_info.tittle}
                </div>
                <div className="w-[199px] mt-3 text-sm font-normal font-['Istok Web']">
                  Posuere morbi leo urna molestie at elementum eu egestas.
                </div>
                <button className="w-28 mt-9 text-base font-bold font-['Istok Web']">
                  LEARN MORE {">"}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      <div className="flex w-screen px-3 md:pl-5 md:pr-9 overflow-x-auto left-0  mt-12 gap-4">
        {cards.map((card_info, i) => (
          <div
            key={i + 1}
            className=" min-w-[270px] h-[420px] relative pt-[12px] border-t-4 border-binance_green p-[15px] bg-white rounded-[5px_5px_50px_5px] shadow-[0px_0px_20px_#f7edff]"
          >
            <div
              style={font.style}
              className="text-binance_green text-xl font-bold"
            >
              {card_info.tittle}
            </div>
            <div
              style={font.style}
              className="w-[199px] mt-3 text-sm font-normal "
            >
              {card_info.discr}
            </div>
            <button
              style={font.style}
              className="w-28 flex items-center mt-9 "
            >
              <a href={card_info.link} className="text-base font-bold mr-2 whitespace-nowrap ">
                LEARN MORE
              </a>
              <Image
                src={"/assets/icons/right.svg"}
                alt="icon"
                width={19}
                height={19}
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
