import React, { useCallback } from "react";

import { useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import LinkItem from "../LinkItem";
import useFunctions from "@/hooks/useFunctions";

const Navbar = ({ children }) => {
  const [showmenu, setShowmenu] = useState(false);
  const controls = useAnimation();
  const hideMenu = useCallback(() => {
    setShowmenu(false);
  }, []);

  const { imageLoader } = useFunctions();

  return (
    <div className='bg-transparent  flex flex-col'>
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className='navbar absolute mx-auto self-center border-opacity-0 border-2 border-[#d7d7d7] top-[0vh]'
      >
        <motion.div
          initial={{}}
          animate={{
            y: [0, -15, 0, -15, 0, -17, 0, -12, 0],
          }}
          transition={{
            delay: 0.1,
            repeat: 7,
            duration: 4,
          }}
          className='logos hidden  text-white'
        >
          <Image
            loader={imageLoader}
            alt='logo'
            width={80}
            height={40}
            quality={100}
            className='w-[10vw] hidden'
            src='/assets/images/logo.png'
          />
        </motion.div>

        <motion.ul
          className='nav-menu w-[65%]'
          id={showmenu ? "mobile" : "hide"}
          whileHover={controls.stop}
        >
          <LinkItem
            hideMenu={hideMenu}
            path='/services'
            offColor={false}
            text='<Services />'
          />
          <LinkItem
            hideMenu={hideMenu}
            path='/communities'
            text='<Communities />'
          />
          <LinkItem
            hideMenu={hideMenu}
            path='/newsletter'
            text='<Newsletter />'
          />
        </motion.ul>
        <motion.div
          initial={{ width: "40%" }}
          animate={{ width: "20%" }}
          // transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
          transition={{ duration: 0.2 }}
          className='icon flex w-[40%] md:w-[20%] border-[#d7d7d7] border-l-2   justify-around  items-center'
        >
          <LinkItem text={"Register"} path={"/menu"} className={"medText"} />
          <Link legacyBehavior href={"/login"}>
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.9 }}
              // transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
              className='bg-[#d7d7d7] py-[4px] md:py-[8px] cursor-pointer hover:text-[#d7d7d7] duration-300 hover:bg-slate-500 px-[10px] md:px-[20px] rounded-sm  medText shadow-sm shadow-slate-600'
            >
              Login
            </motion.a>
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
