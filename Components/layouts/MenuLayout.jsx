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

const MenuLayout = (children) => {
  // --------------------------------------------VARIABLES
  const route = useRouter();
  const title = route.pathname.split("/").pop();
  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();
  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='w-full'>
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
        <div className='  space-x-4 flex justify-between'>
          <Image
            loader={imageLoader}
            alt='message'
            width={27.85}
            height={28}
            quality={100}
            src='/assets/icons/message.png'
          />
          <Image
            loader={imageLoader}
            alt='bell'
            width={27.85}
            height={28}
            quality={100}
            src='/assets/icons/Bell.png'
          />
          <Image
            loader={imageLoader}
            alt='settings'
            width={27.85}
            height={28}
            quality={100}
            src='/assets/icons/settings.png'
          />
          <Image
            loader={imageLoader}
            alt='user'
            width={27.85}
            height={28}
            quality={100}
            src='/assets/icons/Ellipse.png'
          />
        </div>
      </div>
      <div className='w-full h-screen items-center flex  max-h-screen'>
        <div className='w-[20%] h-[80%]  border-r border-opacity-20 relative top-[5vh] border-[#000000]'>
          <MenuList Icon={Dashboard} name={"Dashboard"} />
          <MenuList Icon={Teams} name={"Teams"} />
          <MenuList Icon={Project} name={"Project"} />
          <MenuList Icon={Payment} name={"Payment"} />
          <MenuList Icon={Help} name={"Help"} />
          <MenuList Icon={Logout} name={"Logout"} />
        </div>
        <div className='flex-1 justify-start items-center'>{children}</div>
      </div>
    </div>
  );
};

export default MenuLayout;
