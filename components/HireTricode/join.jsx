import Image from "next/image";
import Link from "next/link";

export default function JoinTricode({ mobile }) {
  return (
    <>
      <section
        className='px-8 py-5 lg:py-[73px] mb-8 w-full  flex min-h-[80vh] justify-center items-center'
        id='join'
      >
        <div className='flex flex-col lg:flex-row  justify-center items-center w-full mt-12 gap-4 lg:gap-[5vh]'>
          <div className='flex-col justify-start items-center lg:items-start gap-3 inline-flex'>
            <div className='text-binance_green text-2xl lg:text-6xl semiBold tracking-wide'>
              Join Tricode
            </div>
            <div className='text-[#888484] regular text-center lg:text-left text-xs lg:text-base leading-6 tracking-tight'>
              Get a partner who understands the dynamic world of technology and
              innovation. 
              <br /> Tricode is your gateway to harnessing the full potential of
              cutting-edge tech solutions.
            </div>

            <Link
              href={"/auth/register"}
              className='semiBold lg:text-2xl flex justify-center mt-4 lg:mt-9 hover:bg-opacity-70 hover:scale-110 transition ease-linear duration-150 shadow-sm shadow-binance_green w-[30vw] lg:w-[22vw] py-[1.5vh] rounded-lg bg-black text-white'
            >
              <button>Join</button>
            </Link>
          </div>
          <div className='w-[80vw] h-[50vh]  lg:w-[590px] lg:h-[555px] relative'>
            <Image
              fill
              className=' object-contain lg:object-cover'
              src='/assets/lottie/join.png'
              alt='join'
            />
          </div>
        </div>
      </section>
    </>
  );
}
