import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";
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

const MenuLayout = ({ children }) => {
  // --------------------------------------------VARIABLES
  const route = useRouter();
  const parts = route.pathname.split("menu/");
  const title = parts.length > 1 ? parts[1].split("/")[0] : "";

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();
  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='w-[100vw]'>
      <div className='w-full absolute top-0 bg-binance_green flex items-center justify-between px-[2vw]  h-[9vh]'>
        <div className='flex items-center text-white'>
          <Image
            loader={imageLoader}
            alt='logo'
            width={120}
            height={40}
            quality={100}
            src='/assets/images/logo.png'
          />
        </div>

        <h4 className='text-white'>{title}</h4>
        <div className='space-x-4 flex items-center justify-between'>
          <div className='relative md:flex hidden hover:scale-90 hover:cursor-pointer transition-all ease-out duration-100'>
            <div className='absolute -top-2 -right-2'>
              <Ellipse />
            </div>

            <Message />
          </div>
          <div className='relative md:flex hidden hover:scale-90 hover:cursor-pointer transition-all ease-out duration-100'>
            <div className='absolute -top-2 -right-2'>
              <Ellipse />
            </div>
            <Bell />
          </div>
          <div className='w-[30px] md:flex hidden  hover:scale-90 hover:rotate-[360deg] hover:cursor-pointer transition-all ease-out duration-100 relative rounded-full h-[30px]'>
            <Link href={"/menu/settings/user"}>
              <Settings />
            </Link>
          </div>

          <div
            style={{
              background: "url(/assets/icons/Ellipse.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className='w-[34px] hover:scale-90 hover:cursor-pointer transition-all ease-out duration-100 relative rounded-full h-[34px]'
          ></div>
        </div>
      </div>
      <div className='w-full   h-screen border-midorange items-center flex  max-h-screen'>
        <div className='w-[20%] h-[80%] hidden md:flex flex-col border-r border-opacity-20 relative top-[5vh] border-[#000000]'>
          <MenuList Icon={Dashboard} name={"Dashboard"} />
          <MenuList Icon={Teams} name={"Teams"} />
          <MenuList Icon={Project} name={"Project"} />
          <MenuList Icon={Payment} name={"Payment"} />
          <MenuList Icon={Help} name={"Help"} />
          <MenuList Icon={Logout} name={"Logout"} />
        </div>
        <div className='h-[91vh] absolute bottom-0 left-[20%] w-[80%] flex justify-center items-center'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MenuLayout;
