import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";

const Sidebar = ({ Header, Message }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='lg:w-[35%] w-full relative   h-[25%] flex lg:flex-col lg:items-center  lg:justify-center bg-binance_ash lg:h-full'>
      <div className='logos absolute top-[2vh] lg:top-[3vh] left-[2vw] righ-[2vw]  text-white'>
        <Image
          loader={imageLoader}
          alt='logo'
          width={80}
          height={40}
          quality={100}
          priority={true}
          className='w-[10vw]'
          src='/assets/images/logo.png'
        />
      </div>
      <div className='lg:relative h-auto   absolute top-1/2 -translate-y-1/2 lg:-translate-y-0 w-full justify-center  lg:w-[70%]  flex lg:flex-col items-center lg:top-[5vh]'>
        <div className='relative hidden  lg:flex lg:mb-[44px] z-50'>
          <div className='absolute left-1/3 -translate-x-1/2  bottom-0 translate-y-1/2 -z-10'>
            <Image
              className=''
              loader={imageLoader}
              alt='ellipse'
              width={214.338}
              height={47.995}
              priority={true}
              src='/assets/images/ellipse.png'
            />
          </div>
          <Image
            loader={imageLoader}
            priority={true}
            alt='world hand'
            width={216}
            height={355.433}
            src='/assets/images/hand.png'
          />
        </div>
        <div className='flex-col  lg:left-0 relative   self-center w-full flex items-start lg:items-center'>
          <h4 className='text-lg lg:uppercase text-center w-[50%]  self-center lg:w-[70%] text-white'>
            {Header}
          </h4>

          <p className='smallText hidden lg:flex break-normal   lg:w-full text-left lg:text-ceter mt-3'>
            {Message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
