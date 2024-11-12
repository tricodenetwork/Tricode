import greenLady from "@/public/assets/lottie/greenlady.json";
import Lottie from "lottie-react";

export default function About({ mobile }) {
  return (
    <section
      className='px-8 lg:px-14 py-7 w-full lg:py-[90px] bg-gradient-to-l from-[#BBD2B3] to-stone-100 overflow-hidden justify-center items-center'
      id='about'
    >
      <div className='flex flex-col md:flex-row regular pt-[5em] md:pt-5 gap-3 md:gap-28 justify-center items-center w-full'>
        <div>
          <div className='text-binance_green  text-center sm:text-left text-2xl md:text-5xl semiBold tracking-wide'>
            About Us
          </div>
          <div className='text-binance_ash regular text-xs lg:text-base text-center mt-3 lg:text-left leading-6 tracking-tight'>
            <span className='text-[16px] text-zinc-700 font-bold'>
              TRICODE PRO{" "}
            </span>
            is a SaaS platform tailored for software development and digital
            hardware projects, designed to enhance productivity for remote
            technical teams. By integrating healthy work practices and fostering
            a collaborative social ecosystem, TRICODE PRO creates a seamless
            workspace where innovation thrives.
            <br />
            <br />
            <span className='text-[16px] text-zinc-700 font-bold'>
              Your Agile Development Partner:{" "}
            </span>
            TRICODE PRO enables businesses to tap into a curated pool of experts
            who specialize in creating custom software solutions, APIs, and
            tools that drive digital transformation. Whether you need support
            for software engineering or hardware product design, our team aligns
            with your goals, ensuring projects stay on track from ideation to
            Product Market Fit.
            <br />
            <br />
            <span className='text-[16px] text-zinc-700 font-bold'>
              Revolutionizing Collaboration:{" "}
            </span>
            TRICODE PRO redefines remote teamwork by offering real-time
            communication, dedicated project managers, and a robust project
            management system. With features like task tracking, milestone
            management, and cloud deployment, our platform optimizes workflows
            and keeps teams connected regardless of location.
            <br />
            <br />
            <span className='text-[16px] text-zinc-700 font-bold'>
              Our Mission
            </span>{" "}
            is to set a new standard for digital collaboration and agile project
            management in technology, health, and community development.
            <br />
            <br />
            <span className='text-[16px] text-zinc-700 font-bold'>
              Our vision:
            </span>{" "}
            To become the preferred platform for agile methodology, helping
            businesses across sectors bring their digital ambitions to life.
            {/* <span className='text-[16px] text-zinc-700 font-bold'>
              {" "}
              Agile Methodology{" "}
            </span>{" "} */}
          </div>
        </div>
        <Lottie
          className='relative   w-[35vw] md:w-[60vw]'
          animationData={greenLady}
          loop={true}
        />{" "}
      </div>
    </section>
  );
}
