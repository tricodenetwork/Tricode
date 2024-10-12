import Image from "next/image";
import HireCard from "./card";
import Connect from "./connect";

export default function HireTricode({ mobile }) {
  return (
    <>
      <Connect />
      <section
        className='py-5 w-full h-[120vh]  relative lg:py-[90px] bg-gradient-to-l from-[#BBD2B3] to-stone-100 overflow-hidden justify-center items-center'
        id='intro'
      >
        <div className='flex px-8  lg:px-14 flex-col lg:flex-row   justify-start lg:justify-between  items-center w-full  gap-[38px] sm:gap-[50px] lg:gap-[19vh]'>
          <div className='flex-col justify-start items-center lg:items-start gap-5 inline-flex'>
            <div className='text-binance_green text-2xl md:text-6xl semiBold tracking-wide'>
              Hire Tricode
            </div>
            <div className='text-zinc-500 text-xs lg:text-base text-center lg:text-left leading-6 tracking-tight'>
              Get a partner who understands the dynamic world of technology and
              innovation. 
              <br /> Tricode is your gateway to harnessing the full potential of
              cutting-edge tech solutions.
            </div>
          </div>
          <div className=' w-[70vw]  h-[209px] lg:w-[388px] sm:h-[400px]  lg:h-[296px] relative'>
            <Image
              fill
              className='object-cover'
              src='/assets/lottie/bro.png'
              alt='bro'
            />
          </div>
        </div>
        <HireCard />
      </section>
    </>
  );
}
