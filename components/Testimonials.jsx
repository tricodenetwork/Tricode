import useFonts from "@/hooks/useFonts";
import Image from "next/image";
import React, { useRef } from "react";

const testimonials = [
  {
    desc: "I’ve found TRICODE PRO to be essential for managing complex projects with ease. It brings everything my team needs into one place, saving us time and helping us stay organized.",
    user: "Hellen Jummy",
    pic: "ada",
    role: "Financial Counselor",
  },
  {
    desc: "Using TRICODE PRO has transformed how I approach project management. The platform is intuitive and has improved both collaboration and productivity among my students.",
    user: "Ralph Edwards",
    pic: "cheng",
    role: "Math Teacher",
  },
  {
    desc: "TRICODE PRO has made it easy to track tasks and milestones, even for someone just starting out. It’s an excellent tool for staying on top of my academic projects and responsibilities.",
    user: "Hellena John",
    pic: "david",
    role: "Psychology Student",
  },
  {
    desc: "TRICODE PRO has really streamlined my workflow. It keeps me organized, allowing me to focus on what matters most without worrying about the details.",
    pic: "tom",
    user: "Hellena John",
    role: "Psychology Student",
  },
];

const Testimonials = () => {
  const { font } = useFonts();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust this value for the scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust this value for the scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='p-[40px] w-full sm:p-[80px]'>
      <div className='flex items-center mb-[40px] sm:mb-[80px] justify-between'>
        <h6
          style={font.style}
          className='text-app_black text-center sm:text-left text-lg lg:text-[56px] leading-none font-extrabold'
        >
          What everyone says
        </h6>
        <div className='gap-3 sm:gap-6 flex'>
          <button
            onClick={scrollLeft}
            className='w-[24px] h-[24px] sm:w-[48px] sm:h-[48px] relative rotate-0'
          >
            <Image src={"/assets/icons/circle_arrow.svg"} fill alt='arrow' />
          </button>
          <button
            onClick={scrollRight}
            className='w-[24px] h-[24px] sm:w-[48px] sm:h-[48px] relative rotate-180'
          >
            <Image src={"/assets/icons/circle_arrow.svg"} fill alt='arrow' />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className='flex w-full scrollbar-hide overflow-x-scroll'
      >
        <div className='flex px-[2vw] py-[2vh] items-center gap-6'>
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={font.style}
              className='flex flex-col justify-between min-w-[85vw] min-h-[250px] sm:min-w-[412px] text-lg p-[32px] sm:min-h-[305px] rounded-[12px] sm:rounded-[20px] shadow-[0px_5px_10px] shadow-black/10'
            >
              <p>{item.desc}</p>
              <div className='flex items-center gap-4'>
                <div className='w-[48px] h-[48px] relative sm:w-[64px] sm:h-[64px]'>
                  <Image
                    src={`/assets/profile_pics/${item.pic}.png`}
                    fill
                    className='rounded-full'
                    alt='profile'
                  />
                </div>
                <div>
                  <p style={font.style} className='text-lg'>
                    {item.user}
                  </p>
                  <p style={font.style} className='text-base text-[#475569]'>
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
