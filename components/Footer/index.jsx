import useFunctions from "@/hooks/useFunctions";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export default function Footer({ mobile }) {
  const { imageLoader } = useFunctions();
  return (
    <>
      <section
        className="mx-auto px-4 py-[3vh] relative md:px-[105px] pt-5  h-max   lg:h-[496px] w-full bg-[#1B1B1B]"
        id="footer"
      >
        <div className="flex flex-col md:flex-row gap-3 md:justify-between items-start w-full">
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

            <div
              style={inter.style}
              className="text-white text-sm md:text-lg font-normal"
            >
              The future of remote collaborative space
            </div>
            <h4 className="text-xl lg:text-3xl mt-6  text-white">
              TRICODE PRO LTD
            </h4>
          </div>

          <div className="mt-6">
            <div
              style={inter.style}
              className="text-white text-base md:text-lg lg:mb-[19px] font-bold"
            >
              Links
            </div>
            <div className="flex flex-col md:w-max mt-3  md:gap-4 text-white regular text-sm md:text-base leading-[37.81px]">
              <Link href={"/about"}>
                <div className="regular hover:text-binance_green hover:scale-110 duration-150 hover:cursor-pointer">{`<About Us />`}</div>
              </Link>
              <Link href={"/services"}>
                <div className="regular hover:text-binance_green hover:scale-110 duration-150 hover:cursor-pointer">{`<Services />`}</div>
              </Link>
              <Link href={"/projects"}>
                <div className="regular hover:text-binance_green hover:scale-110 duration-150 hover:cursor-pointer">{`<Projects />`}</div>
              </Link>
              {/* <Link href={"/communities"}>
                <div className='regular hover:text-binance_green hover:scale-110 duration-150 hover:cursor-pointer'>{`<Communities />`}</div>
              </Link> */}
              <Link href={"/newsletter"}>
                <div className="regular hover:text-binance_green hover:scale-110 duration-150 hover:cursor-pointer">{`<Newsletter />`}</div>
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <div
              style={inter.style}
              className="text-white text-base md:text-lg lg:mb-[19px] font-bold"
            >
              Legal
            </div>
            <div className="flex flex-col md:w-max mt-3 md:gap-4 text-white regular text-sm md:text-base leading-[37.81px]">
              <a
                href="https://docs.google.com/document/d/11WJxVNHBbLwVLqnS9RD5GbAj29KGH_dtTKELUY7pc9I/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="regular hover:text-binance_green hover:scale-110 duration-150 hover:cursor-pointer">
                  Terms & Conditions
                </div>
              </a>
              <a
                href="https://docs.google.com/document/d/1RSSrBgUm6XXpu1nOdAMnXPATY5yFUSu96appxhxRuiA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="regular hover:text-binance_green hover:scale-110 duration-150 hover:cursor-pointer">
                  Refund Policy
                </div>
              </a>
              <a
                href="https://docs.google.com/document/d/1HY7u3xd8mdmYXhqAYBG5XiZdoROAwCx6RIldtRZNhas/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="regular hover:text-binance_green hover:scale-110 duration-150 hover:cursor-pointer">
                  Privacy Policy
                </div>
              </a>
            </div>
          </div>

          <div className="mt-6 items-start justify-start">
            <div
              style={inter.style}
              className="text-white text-base mb-3 md:text-lg font-bold "
            >
              Contact us
            </div>
            {/* <div
              style={inter.style}
              className="text-white text-sm md:text-lg mb-3 font-normal  leading-[30px]"
            >
              Contact us through any of the <br />
              following channels{" "}
            </div> */}
            <div
              style={inter.style}
              className="text-white text-sm md:text-lg lg:mt-5 flex flex-col  lg:space-y-5 font-normal  leading-[30px]"
            >
              <div className="max-w-[200px]">BNB Plaza Lawoke Lake</div>
              <a href="tel:+2349060700888">+234 906 070 0888</a>

              <a href="tel:+27682311138">+27 68 231 1138</a>
              <a href="mailto:contact@tricode.pro">contact@tricode.pro</a>
            </div>
            <div className="w-[20vw] absolute bottom-14 right-10 mt-[6em] md:flex hidden text-white items-start justify-around">
              <div className="hover:scale-125 duration-150 hover:cursor-pointer">
                <LinkedInIcon />
              </div>
              <div className="hover:scale-125 duration-150 hover:cursor-pointer">
                <InstagramIcon />
              </div>
              <div className="hover:scale-125 duration-150 hover:cursor-pointer">
                <TwitterIcon />
              </div>
              <div className="hover:scale-125 duration-150 hover:cursor-pointer">
                <GitHubIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
