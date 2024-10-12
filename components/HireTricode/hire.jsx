import { Roboto_Flex } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Roboto_Flex({
  subsets: ["cyrillic-ext", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const data = ["Connect", "Collaborate", "Create"];
export default function HireTricode({ mobile }) {
  return (
    <>
      <section
        className='py-5 w-full flex flex-row-reverse  relative lg:py-[72px] lg:px-[80px]  overflow-hidden justify-between items-center'
        id='intro'
      >
        <div className='flex-col justify-start items-center lg:items-start gap-5 inline-flex'>
          <h4
            style={font.style}
            className='text-app_black text-[56px] font-bold tracking-wide'
          >
            Hire Tricode
          </h4>
          <p
            style={font.style}
            className='text-[#475569] text-xs lg:text-lg text-center lg:text-left leading-6 tracking-tight'
          >
            Get a partner who understands the dynamic world of technology and
            innovation. 
            <br /> Tricode is your gateway to harnessing the full potential of
            cutting-edge tech <br />
            solutions.
          </p>
          <Link
            href={"/"}
            className='flex hover:-translate-x-2 duration-150 gap-4 items-center'
          >
            <p
              style={font.style}
              className='text-[#2563EB]  text-sm font-medium'
            >
              Check the tools
            </p>
            <Image
              src={"/assets/icons/right_arr_blue.svg"}
              width={24}
              height={24}
              alt='arr'
            />
          </Link>
        </div>
        <div className=' w-[70vw]  h-[209px] lg:w-[412px] sm:h-[400px]  lg:h-[412px] relative'>
          <Image
            fill
            className='object-cover'
            src='/assets/images/tools.png'
            alt='bro'
          />
        </div>
      </section>
      <section className='p-[80px] flex flex-col gap-8'>
        <h4
          style={font.style}
          className='text-app_black text-[56px] w-full text-left font-bold tracking-wide'
        >
          Improve workflow
        </h4>
        <div className='flex'>
          {data.map((item, index) => {
            return (
              <p
                key={item}
                style={font.style}
                className={`flex-1 ${
                  index == 0 && "bg-[#F1F9F1]"
                } font-medium text-base border flex items-center justify-center border-[#BEF0AD] h-[48px]`}
              >
                {item}
              </p>
            );
          })}
        </div>
        <p
          style={font.style}
          className='text-[#475569] text-xs lg:text-lg text-center lg:text-left leading-6 tracking-tight'
        >
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
          pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
          ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>
        <Link
          href={"/"}
          className='flex gap-4 hover:-translate-x-2 duration-150 items-center'
        >
          <p style={font.style} className='text-[#2563EB]  text-sm font-medium'>
            Check the tools
          </p>
          <Image
            src={"/assets/icons/right_arr_blue.svg"}
            width={24}
            height={24}
            alt='arr'
          />
        </Link>
      </section>
    </>
  );
}
