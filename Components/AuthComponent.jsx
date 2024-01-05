import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const AuthComponent = () => {
  const ellipseStyle =
    "w-[50px] md:w-[60px] flex items-center hover:rotate-[90deg] duration-100 hover:scale-90 hover:cursor-pointer justify-center bg-[#D9D9D9] h-[50px] md:h-[60px] rounded-full";
  return (
    <div className='flex w-[200px] md:w-[279.468px] h-[65px] justify-between'>
      <div onClick={() => signIn("google")} className={ellipseStyle}>
        <Image
          className='auth_image'
          width={33.2}
          height={33.2}
          alt='google'
          src={"/assets/icons/mdi_google.png"}
        />
      </div>
      <div onClick={() => signIn("github")} className={ellipseStyle}>
        <Image
          className='auth_image'
          width={33.2}
          height={33.2}
          src={"/assets/icons/github-mark.png"}
          alt='github'
        />
      </div>
      <div onClick={() => signIn("slack")} className={ellipseStyle}>
        <Image
          className='auth_image '
          width={33.2}
          height={33.2}
          src={"/assets/icons/Slack-mark-RGB.png"}
          alt='slack'
        />
      </div>
    </div>
  );
};

export default AuthComponent;
