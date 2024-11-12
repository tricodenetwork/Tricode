import { Roboto_Flex } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const font = Roboto_Flex({
  subsets: ["cyrillic-ext", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const data = ["Connect", "Collaborate", "Create"];
const active = [0, 1, 2];
const activeInfo = [
  "Seamlessly connect teams together from anywhere, fostering real-time communication and collaboration across all project stages.",
  "Empower your technical teams to work cohesively, share ideas, and execute tasks with precision, using intuitive tools tailored for maximum efficiency.",
  "Turn innovative ideas into reality by streamlining your processes, optimizing productivity, and enabling your team to build scalable, high-quality solutions.",
];
export default function HireTricode({ mobile }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <section
        className='py-5 w-full px-2  flex flex-col gap-8 lg:gap-0 lg:flex-row-reverse  relative lg:py-[72px] lg:px-[80px]  overflow-hidden justify-between items-center'
        id='intro'
      >
        <div className='flex-col justify-start items-center lg:items-start gap-5 inline-flex'>
          <h4
            style={font.style}
            className='text-app_black text-3xl lg:text-[56px] font-bold tracking-wide'
          >
            Hire Tricode
          </h4>
          <p
            style={font.style}
            className='text-[#475569] text-xs lg:text-lg whitespace-nowrp text-center lg:text-left leading-6 tracking-tight'
          >
            Get a partner who understands the dynamic world of technology and
            innovation. 
            <br /> Tricode is your gateway to harnessing the full potential of
            cutting-edge tech <br />
            solutions.
          </p>
          <Link
            href={"/auth/login"}
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
        <div className=' w-[70vw]  h-[280px] lg:w-[412px] sm:h-[400px]  lg:h-[412px] relative'>
          <Image
            fill
            className='object-cover'
            src='/assets/images/tools.png'
            alt='bro'
          />
        </div>
      </section>
      <section className='lg:p-[80px] px-4 py-[40px] flex flex-col gap-8'>
        <h4
          style={font.style}
          className='text-app_black text-3xl lg:text-[56px] w-full text-left font-bold tracking-wide'
        >
          Improve workflow
        </h4>
        <div className='flex'>
          {data.map((item, index) => {
            return (
              <button
                onClick={() => setActive(index)}
                key={item}
                style={font.style}
                className={`flex-1 ${
                  index == active && "bg-[#F1F9F1]"
                } font-medium  cursor-pointer text-sm lg:text-base border flex items-center justify-center border-[#BEF0AD] h-[48px]`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <p
          style={font.style}
          className='text-[#475569] text-xs lg:text-lg text-center lg:text-left leading-6 tracking-tight'
        >
          {activeInfo[active]}
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
