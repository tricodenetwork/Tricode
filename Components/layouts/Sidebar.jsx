import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";

const Sidebar = ({ Header, Message }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='w-[35%] hidden md:flex flex-col  items-center  justify-center bg-[#2b2b2b] min-h-screen'>
      <div className='logos absolute top-[3vh] left-[2vw]  text-white'>
        <Image
          loader={imageLoader}
          alt='logo'
          width={80}
          height={40}
          quality={100}
          className='w-[10vw]'
          src='/assets/images/logo.png'
        />
      </div>
      <div className='relative  w-[70%]  flex flex-col items-center top-[5vh]'>
        <div className='relative  mb-[44px] z-50'>
          <div className='absolute left-1/3 -translate-x-1/2  bottom-0 translate-y-1/2 -z-10'>
            <Image
              className=''
              loader={imageLoader}
              alt='ellipse'
              width={214.338}
              height={47.995}
              src='/assets/images/ellipse.png'
            />
          </div>
          <Image
            loader={imageLoader}
            alt='world hand'
            width={216}
            height={355.433}
            src='/assets/images/hand.png'
          />
        </div>
        <div className='flex-col flex items-center - uppercase[268px]'>
          <h4 className='mb- uppercase text-center text-white'>{Header}</h4>

          <p className='smallText text-left mt-3'>{Message}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
