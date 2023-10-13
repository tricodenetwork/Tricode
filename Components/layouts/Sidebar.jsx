import useFunctions from "@/hooks/useFunctions";
import Image from "next/image";

const Sidebar = ({ Header, Message }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='w-[429px] hidden md:flex flex-col items-center pb-5 justify-end bg-[#2b2b2b] min-h-screen'>
      <div className='logos absolute top-0 left-3  text-white'>
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
      <div className='relative -top-[7vh]'>
        <div className='absolute right-[70px]  -bottom-[18px] z-40'>
          <Image
            className=''
            loader={imageLoader}
            alt='ellipse'
            width={214.338}
            height={47.995}
            src='/assets/images/ellipse.png'
          />
        </div>
        <div className='relative z-50'>
          <Image
            loader={imageLoader}
            alt='world hand'
            width={216}
            height={355.433}
            src='/assets/images/hand.png'
          />
        </div>
      </div>
      <div className='  flex-col flex items-center max-w-[268px]'>
        <h3 className='text- mb- text-white'>{Header}</h3>
        {/* <h5 className='text-white uppercase'>
          Lorem ipsum dolor sit amet consectetur.
        </h5> */}
        <p className='smallText mt-3'>
          {Message}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
