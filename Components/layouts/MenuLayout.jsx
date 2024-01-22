import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import MenuList from "../MenuList";
import Dashboard from "../svg/Dashboard";
import Project from "../svg/Project";
import Help from "../svg/Help";
import Logout from "../svg/Logout";
import Teams from "../svg/Teams";
import Payment from "../svg/Payment";
import Ellipse from "../svg/Ellipse";
import Message from "../svg/Message";
import Bell from "../svg/Bell";
import Settings from "../svg/Settings";
import Link from "next/link";
import { useState } from "react";

const MenuLayout = ({ children }) => {
  // --------------------------------------------VARIABLES
  const route = useRouter();
  const parts = route.pathname.split("menu/");
  const title = parts.length > 1 ? parts[1].split("/")[0] : "";
  const [isOpen, setIsOpen] = useState(false);

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();
  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='w-full flex  flex-col justify-start'>
      <div className='w-full  bg-binance_green  flex items-center justify-between px-[3vw] lg:px-[2vw]  h-[9vh]'>
        <div className='items-center hidden lg:flex text-white'>
          <Image
            loader={imageLoader}
            alt='logo'
            width={120}
            height={40}
            quality={100}
            src='/assets/images/logo.png'
          />
        </div>
        <div className='flex  lg:hidden items-center text-white'>
          <Image
            loader={imageLoader}
            alt='logo'
            width={40}
            height={40}
            quality={100}
            src='/assets/images/slogo.png'
          />
        </div>

        <motion.h4
          transition={{ duration: 0.4 }}
          animate={{ opacity: [0, 100], x: ["-200%", "0%"] }}
          className='flex text-white'
        >
          {title}
        </motion.h4>
        <div className='lg:space-x-4 flex items-center justify-center lg:justify-between'>
          <div className='relative lg:flex hidden hover:scale-90 hover:cursor-pointer transition-all ease-out duration-100'>
            <div className='absolute -top-2 -right-2'>
              <Ellipse />
            </div>

            <Message />
          </div>
          <div className='relative lg:flex hidden hover:scale-90 hover:cursor-pointer transition-all ease-out duration-100'>
            <div className='absolute -top-2 -right-2'>
              <Ellipse />
            </div>
            <Bell />
          </div>
          <div className='w-[30px] lg:flex hidden  hover:scale-90 hover:rotate-[360deg] hover:cursor-pointer transition-all ease-out duration-100 relative rounded-full h-[30px]'>
            <Link href={"/settings/user"}>
              <Settings />
            </Link>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "url(/assets/icons/Ellipse.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className='w-[40px] hover:scale-90  hover:cursor-pointer transition-all ease-out duration-100 relative rounded-full h-[40px]'
          ></div>
        </div>
      </div>
      <div className='w-full relative max-h-[91dvh]  overflow-x-hidden  h-screen border-midorange items-start flex'>
        <div
          className={`lg:w-[17%] w-[80vw] absolute   top-0  lg:left-0 lg:relative h-[80%] ${
            isOpen
              ? "bg-binance_green lg:bg-white -right-[0px]    text-white "
              : "-right-[1000px]"
          } lg:flex flex-col border-r z-20 border-opacity-20  duration-700 ease-out  pt-[4vh] lg:pt-0 lg:mt-[7vh]  border-[#000000]`}
        >
          <MenuList isOpen={isOpen} Icon={Dashboard} name={"Dashboard"} />
          <MenuList isOpen={isOpen} Icon={Project} name={"Project"} />
          <MenuList isOpen={isOpen} Icon={Payment} name={"Payment"} />
          <MenuList isOpen={isOpen} Icon={Help} name={"Help"} />
          <MenuList isOpen={isOpen} Icon={Logout} name={"Logout"} />
        </div>
        <div className='max-h-full h-full overflow-scroll   scrollbar-hide  w-full lg:w-[83%] flex justify-center items-start'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MenuLayout;
