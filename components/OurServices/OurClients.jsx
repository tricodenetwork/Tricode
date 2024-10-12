import { OurClients } from "@/Data/data";
import { Inter } from "next/font/google";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const inter = Inter({ subsets: ["latin"] });
export default function OurClients_Page() {
  return (
    <section className='w-full justify-center items-center' id='projects'>
      <div className='text-center mx-auto w-full mt-5 justify-center items-center'>
        {/* <hr className="w-[69px] h-[5px] mx-auto my-5 text-center bg-binance_green justify-center items-center" /> */}
        <span
          style={inter.style}
          className='text-gray-900 text-2xl md:text-[35px] font-normal  leading-[55px]'
        >
          Our{" "}
        </span>
        <span
          style={inter.style}
          className='text-gray-900 text-2xl md:text-[35px] font-bold  leading-[55px]'
        >
          Clients
        </span>
      </div>
      <div className='flex md:py-[7vh] py-[3vh]  flex-wrap justify-center items-start gap-8 md:gap-12'>
        <Marquee
          direction='left'
          speed={80}
          delay={5}
          pauseOnHover={true}
          autoFill={true}
        >
          {OurClients.map((marquee, i) => {
            return (
              <div
                key={i + 1}
                className='image_wrapper px-[10em] py-8 h-[16vh] ml-5 bg-[#FAFAFA] rounded-2xl justify-center items-center inline-flex overflow-hidden'
              >
                <Image width={40} height={40} src={marquee.img} alt='client' />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
