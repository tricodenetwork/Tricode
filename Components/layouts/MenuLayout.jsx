import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";
import { useRouter } from "next/router";

const MenuLayout = () => {
  // --------------------------------------------VARIABLES
  const route = useRouter();
  const title = route.pathname.split("/").pop();
  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();
  //------------------------------------------------------------------USE EFFECTS

  return (
    <div>
      <div className='w-full bg-binance_green flex items-center justify-between px-[2vw]  h-[9vh]'>
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
    </div>
  );
};

export default MenuLayout;
