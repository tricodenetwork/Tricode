import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { cards } from "./data";

export default function HireCard() {
  return (
    <>
      <div className="w-full gap-3">
        <Swiper
          slidesPerview={1.2}
          spaceBetween={160}
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
            <SwiperSlide key={i}>
              <div className="w-[270px] h-80 px-5 pt-[7vh] my-9 bg-white hover:border-t-2 hover:border-binance_green justify-center items-center rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[50px] shadow">
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
      </div>
    </>
  );
}
