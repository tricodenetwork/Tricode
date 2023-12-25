import Image from "next/image";
import { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import useFunctions from "@/hooks/useFunctions";

export default function Footer({ mobile }) {
  const { imageLoader } = useFunctions();
  return (
    <>
      <section
        className="py-5 mx-auto px-4 md:px-8 md:py-[5vh] w-full bg-[#1B1B1B] justify-center items-end"
        id="footer"
      >
        <div className="flex flex-col md:flex-row gap-3 md:gap-9 justify-between items-start w-full">
          <div>
            <div className="flex flex-row gap-[12vh] justify-between items-center w-full">
              <Image
                loader={imageLoader}
                alt="logo"
                width={80}
                height={40}
                quality={100}
                className="w-[30vw] md:w-[16vw] ml-[-7px]"
                src="/assets/images/logo.png"
              />
              <div className="flex md:hidden gap-3 text-white items-end justify-around">
                <LinkedInIcon />
                <InstagramIcon />
                <TwitterIcon />
                <GitHubIcon />
              </div>
            </div>

            <div className="text-white text-sm md:text-lg font-normal font-['Inter']">
              The future of remote collaborative space
            </div>
          </div>

          <div className="mt-6">
            <div className="text-white text-base md:text-lg font-bold font-['Inter']">
              Links
            </div>
            <div className="md:w-[16vh] text-white text-sm md:text-base leading-[37.81px]">
              {`<About Us />`}
              <br />
              {`<Services />`}
              <br />
              {`<Projects />`}
              <br />
              {`<Communities />`}
              <br />
              {`<Newsletter />`}
            </div>
          </div>

          <div className="mt-6">
            <div className="text-white text-base md:text-lg font-bold font-['Inter']">
              Contact us
            </div>
            <div className="text-white text-sm md:text-lg font-normal font-['Inter'] leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </div>
            <div className="text-white text-sm md:text-lg font-normal font-['Inter'] leading-[30px]">
              +923183561921
            </div>
          </div>
        </div>
        <div className="w-[30vw] md:flex hidden text-white items-end justify-around">
          <LinkedInIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
        </div>
      </section>
    </>
  );
}
