import { Inter } from "next/font/google";
// import Card from "./card";
import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import BlueLink from "../BlueLink";
import Card from "./card";

const items = [
  "Est et in pharetra magna adipiscing ornare aliquam.",
  "Tellus arcu sed consequat ac velit ut eu blandit.",
  "Ullamcorper ornare in et egestas dolor orci.",
];

export default function Platform({ mobile }) {
  const { font } = useFonts();

  return (
    <section
      className=' flex flex-col relative gap-[10%] sm:gap-[5%] bg-[#E7E8E6]  sm:flex-row h-screen  overflow-hidden px-2 lg:px-8 py-5 my-12  w-full justify-center items-center'
      id='services'
    >
      <div className='bg-binance_green absolute sm:hidden flex self-center rounded-full w-[550px] h-[550px] -z-50' />

      <div className='px-[1vw] gap-[2vh]   sm:w-[45%] sm:h-[65%] flex flex-col justify-center items-center sm:items-start sm:gap-[7%]'>
        <h6
          style={font.style}
          className='text-app_black text-center sm:text-left text-2xl lg:text-[56px] leading-none font-extrabold '
        >
          An all-in-one platform that makes it easier
        </h6>
        <div>
          {items.map((params) => {
            return (
              <div key={params} className='flex gap-4 mb-1 items-center'>
                <Image
                  src={"/assets/icons/tick.svg"}
                  alt='tick'
                  width={24}
                  height={24}
                />
                <p
                  style={font.style}
                  className='text-center sm:text-left  text-sm sm:text-[20px] text-app_black leading-none'
                >
                  {params}
                </p>
              </div>
            );
          })}
        </div>
        <BlueLink href={"/"} text={"Find more about the app"} />
      </div>
      <Card font={font} />
      {/* <OurClients /> */}
    </section>
  );
}
