import { Inter } from "next/font/google";
import Subscribe from "./subscribe";

const inter = Inter({ subsets: ["latin"] });

export default function OurNewsletter({ mobile }) {
  return (
    <>
      <section
        className='px-8 py-[1em] lg:py-[5em] w-full bg-gradient-to-l h-[350px] lg:h-[701px] from-[#BBD2B3] to-stone-100 overflow-hidden justify-center items-center'
        id='newsletter'
      >
        <div className='text-center mx-auto mb-[32px] lg:mb-[111px] w-full justify-center items-center'>
          <hr className='w-[69px] h-[5px] mx-auto my-5 text-center bg-binance_green justify-center items-center' />
          <span
            style={inter.style}
            className="text-gray-900 text-2xl md:text-[35px] font-normal font-['Inter'] leading-[55px]"
          >
            Our{" "}
          </span>
          <span
            style={inter.style}
            className="text-gray-900 text-2xl md:text-[35px] font-bold font-['Inter'] leading-[55px]"
          >
            Newsletter
          </span>
        </div>
        <div className=''>
          <Subscribe />
        </div>
      </section>
    </>
  );
}
