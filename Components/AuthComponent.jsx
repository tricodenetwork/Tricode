import Image from "next/image";
import React from "react";

const AuthComponent = () => {
  const ellipseStyle =
    "w-[50px] md:w-[65px] flex items-center justify-center bg-[#D9D9D9] h-[50px] md:h-[65px] rounded-full";
  return (
    <div className='flex w-[200px] md:w-[279.468px] h-[65px] justify-between'>
      <div className={ellipseStyle}>
        <Image
          className='auth_image'
          width={33.2}
          height={33.2}
          alt='google'
          src={"/assets/icons/mdi_google.png"}
        />
      </div>
      <div className={ellipseStyle}>
        <Image
          className='auth_image'
          width={33.2}
          height={33.2}
          src={"/assets/icons/ic_baseline-apple.png"}
          alt='apple'
        />
      </div>
      <div className={ellipseStyle}>
        <Image
          className='auth_image'
          width={33.2}
          height={33.2}
          src={"/assets/icons/file-icons_microsoft-outlook.png"}
          alt='microsoft'
        />
      </div>
    </div>
  );
};

export default AuthComponent;
