import Image from "next/image";
import React from "react";

const AuthComponent = () => {
  const ellipseStyle =
    "w-[50px] md:w-[60px] flex items-center justify-center bg-[#D9D9D9] h-[50px] md:h-[60px] rounded-full";
  return (
    <div className="flex w-[200px] md:w-[279.468px] h-[65px] justify-between">
      <div className={ellipseStyle}>
        <Image
          className="auth_image"
          width={33.2}
          height={33.2}
          alt="google"
          src={"/assets/icons/mdi_google.png"}
        />
      </div>
      <div className={ellipseStyle}>
        <Image
          className="auth_image"
          width={33.2}
          height={33.2}
          src={"/assets/icons/github-mark.png"}
          alt="github"
        />
      </div>
      <div className={ellipseStyle}>
        <Image
          className="auth_image"
          width={33.2}
          height={33.2}
          src={"/assets/icons/Slack-mark-RGB.png"}
          alt="slack"
        />
      </div>
    </div>
  );
};

export default AuthComponent;
