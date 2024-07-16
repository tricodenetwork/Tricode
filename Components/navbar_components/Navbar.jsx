import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import LinkItem from "../LinkItem";
import useFunctions from "@/hooks/useFunctions";
import SideNavMobile from "./sidenavmobile";
import LinkItem2 from "../LinkItem2";
import { useRouter } from "next/router";

const Navbar = ({ children }) => {
  const [showmenu, setShowmenu] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { imageLoader } = useFunctions();
  const router = useRouter();
  const gray = router.pathname === "/about";

  const controls = useAnimation();
  const hideMenu = useCallback(() => {
    setShowmenu(false);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`${
        isScrolled || sideNav
          ? "bg-binance_green"
          : gray
          ? "bg-binance_ash bg-opacity-10"
          : "bg-transparent"
      } fixed h-[60px] sm:h-[90px] lg:h-[90px]   z-50 flex flex-col`}
    >
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className=' navbar px-[1.5vw] mx-auto top-[0vh]'
      >
        <div className='logos '>
          <Link href={"http://talent.localhost:3000/help"}>
            <Image
              loader={imageLoader}
              alt='logo'
              width={80}
              height={40}
              quality={100}
              className='w-[30vw] lg:w-[16vw]'
              src='/assets/images/logo.png'
            />
          </Link>
        </div>
        <div className='w-[55%] gap-4 hidden lg:flex justify-around items-start'>
          <LinkItem
            hideMenu={hideMenu}
            path='/about'
            offColor={false}
            text='About us'
            isScrolled={isScrolled}
          />
          <LinkItem
            hideMenu={hideMenu}
            path='#services'
            offColor={false}
            text='Services'
            isScrolled={isScrolled}
          />
          <LinkItem
            hideMenu={hideMenu}
            path='#projects'
            offColor={false}
            text='Projects'
            isScrolled={isScrolled}
          />
          {/* <LinkItem
            hideMenu={hideMenu}
            path='/faq'
            offColor={false}
            text='FAQ'
            isScrolled={isScrolled}
          /> */}
          <LinkItem
            hideMenu={hideMenu}
            path='#newsletter'
            text='Newsletter'
            isScrolled={isScrolled}
          />
        </div>
        <motion.div
          initial={{ width: "30%" }}
          animate={{ width: "17%" }}
          // transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
          transition={{ duration: 0.2 }}
          className='icon flex w-[40%] lg:w-[20%] justify-around  items-center'
        >
          <LinkItem2
            text={"Register"}
            path={"/auth/register"}
            className={
              "medText p-3 rounded-lg lg:flex hidden text-white border border-white"
            }
            isScrolled={isScrolled}
          />
          <LinkItem2
            hideMenu={hideMenu}
            path='/auth/login'
            text='Login'
            className={`medText text-white lg:flex hidden`}
            isScrolled={isScrolled}
          />
        </motion.div>

        <div
          onClick={() => setSideNav(!sideNav)}
          className='text-white flex lg:hidden'
        >
          {sideNav ? (
            <IoCloseSharp className='text-[3vh]' />
          ) : (
            <MdOutlineMenu className='text-[3vh]' />
          )}
        </div>
        {sideNav && <SideNavMobile setShowmenu={setShowmenu} />}
      </motion.nav>
    </div>
  );
};

export default Navbar;
