import Image from "next/image";
import { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import useFunctions from "@/hooks/useFunctions";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Footer({ mobile }) {
  const { imageLoader } = useFunctions();
  return (
    <>
      <section
        className='mx-auto px-4 md:px-[105px] pt-5  h-[1052px] lg:h-[496px] w-full bg-[#1B1B1B]'
        id='footer'
      >
        <div className='flex flex-col md:flex-row gap-3 md:gap-28 justify-start items-start w-full'>
          <div>
            <div className='flex flex-row gap-[12vh] justify-between items-center w-full'>
              <Image
                loader={imageLoader}
                alt='logo'
                width={80}
                height={40}
                quality={100}
                className='w-[30vw] md:w-[16vw] ml-[-7px]'
                src='/assets/images/logo.png'
              />
              <div className='flex md:hidden gap-3 text-white items-end justify-around'>
                <LinkedInIcon />
                <InstagramIcon />
                <TwitterIcon />
                <GitHubIcon />
              </div>
            </div>

            <div
              style={inter.style}
              className='text-white text-sm md:text-lg font-normal'
            >
              The future of remote collaborative space
            </div>
          </div>

          <div className='mt-6'>
            <div
              style={inter.style}
              className='text-white text-base md:text-lg font-bold'
            >
              Links
            </div>
            <div className='flex flex-col md:w-max mt-3 md:gap-2 text-white regular text-sm md:text-base leading-[37.81px]'>
              <div className='regular'>{`<About Us />`}</div>
              <div className='regular'>{`<Services />`}</div>
              <div className='regular'>{`<Projects />`}</div>
              <div className='regular'>{`<Communities />`}</div>
              <div className='regular'>{`<Newsletter />`}</div>
            </div>
          </div>

          <div className='mt-6 items-start justify-start'>
            <div
              style={inter.style}
              className='text-white text-base mb-3 md:text-lg font-bold '
            >
              Contact us
            </div>
            <div
              style={inter.style}
              className='text-white text-sm md:text-lg mb-3 font-normal  leading-[30px]'
            >
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry.{" "}
            </div>
            <div
              style={inter.style}
              className='text-white text-sm md:text-lg font-normal  leading-[30px]'
            >
              +923183561921
            </div>
            <div className='w-[20vw] absolute bottom-14 right-10 mt-[6em] md:flex hidden text-white items-start justify-around'>
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
              <GitHubIcon />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
