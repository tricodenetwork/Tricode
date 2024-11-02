import { Roboto_Flex } from "next/font/google";
import Image from "next/image";
import Marq from "../Hero/techStack";

const font = Roboto_Flex({
  subsets: ["cyrillic-ext", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Connect({ mobile }) {
  return (
    <section
      className='p-[30px] lg:p-[80px] w-full bg-[#F5F9F1] h-[375px] lg:h-[475px] overflow-hidden flex flex-col justify-between items-center'
      id='intro'
    >
      <h2
        style={font.style}
        className='text-app_black font-extrabold  w-full text-center text-3xl lg:text-[56px]'
      >
        All the tools that you need
      </h2>
      <p
        style={font.style}
        className='text-app_black w-[80%] lg:w-[65%] mx-auto relative bottom-[4%]  text-center lg:text-[20px]'
      >
        Access everything required to build, launch, and scale. Streamline your
        workflow with powerful tools designed for both development and
        production, all in one place.
      </p>
      <Marq />
    </section>
  );
}
