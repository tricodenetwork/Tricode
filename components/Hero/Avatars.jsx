import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const avatars = ["plus.png", "david.png", "tom.png", "cheng.png", "ada.png"];

const Avatars = () => {
  return (
    <div className='absolute bottom-0 border bg-gradient-to-r from-app_light_green/20 to-transparent p-4 rounded-[16px] -left-[5%]'>
      <div className='flex items-center mb-2 justify-between'>
        <p className='regular text-white text-xs'>
          Add a new member to the team
        </p>
        <Image
          src={"/assets/images/slogo.png"}
          width={24}
          height={24}
          alt='logo'
        />
      </div>
      <div className='flex items-center w-max'>
        {avatars.map((item, index) => (
          <motion.div
            key={item}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: index * 0.5,
            }}
            className={`w-[62px] h-[62px] relative ${
              index !== 0 && "border"
            } border-white rounded-full -ml-3`}
          >
            <Image
              alt='avatar'
              className='rounded-full'
              src={`/assets/profile_pics/${item}`}
              fill
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Avatars;
