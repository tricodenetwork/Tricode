import Image from "next/image";
import { useState, useEffect } from "react";
import { OurClients } from "@/Data/data";
import Marquee from "react-fast-marquee";

export default function OurClients_Page() {
  return (
    <>
      <section className="w-full justify-center items-center" id="ourClients">
        <div className="text-center mx-auto w-full justify-center items-center">
          {/* <hr className="w-[69px] h-[5px] mx-auto my-5 text-center bg-binance_green justify-center items-center" /> */}
          <span className="text-gray-900 text-2xl md:text-[35px] font-normal font-['Inter'] leading-[55px]">
            Our{" "}
          </span>
          <span className="text-gray-900 text-2xl md:text-[35px] font-bold font-['Inter'] leading-[55px]">
            Clients
          </span>
        </div>
        <div className="flex px-1 md:py-[5vh] py-[3vh] flex flex-wrap justify-center items-start gap-8 md:gap-12">
          <Marquee direction="left" speed={80} delay={5} pauseOnHover={true} autoFill={true}>
            {OurClients.map((marquee, i) => {
              return (
                <div
                  key={i + 1}
                  className="image_wrapper px-[10em] py-8 h-[16vh] ml-5 bg-[#FAFAFA] rounded-2xl justify-center items-center inline-flex overflow-hidden"
                >
                  <img src={marquee.img} alt="" />
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>
    </>
  );
}
