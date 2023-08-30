import React from "react";
import { GiWallet } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";

// import { ethers } from 'ethers';
import DrawingComponent from "../DrawingComponent";
import Image from "next/image";

const Navbar = ({ children }) => {
  let sm = typeof window !== "undefined" && window.innerWidth < 789;
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [showmenu, setShowmenu] = useState(false);
  const dispatch = useDispatch();
  const controls = useAnimation();

  const connectWallet = async () => {
    // console.log('requesting accounts');
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setDefaultAccount(accounts[0]);
        dispatch(updateAddress(accounts[0]));
      } catch (error) {
        console.log("err:" + error);
      }
    } else {
      console.log("metamask not detected");
    }
  };

  let primary = "#25092c";
  // let secondary="#9be8a1"

  const toggleMenu = () => {
    setShowmenu(!showmenu);
  };
  const hideMenu = () => {
    setShowmenu(false);
  };

  const route = useRouter();
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div>
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className='navbar px-[3vw] sticky top-0  '
      >
        <div className='logo-menu'>
          <motion.div
            initial={{}}
            animate={{
              y: [0, -15, 0, -15, 0, -17, 0, -12, 0],
              // x: [0, 0, 0, 0, 0, 15, 0, 0, 0, 0],
            }}
            transition={{
              delay: 0.1,
              repeat: 7,
              duration: 4,
              // x: { delay: 8, duration: 5, repeat: 2 },
            }}
            className='logos text-white'
          >
            <Image
              loader={imageLoader}
              alt='logo'
              width={140}
              height={50}
              quality={100}
              className='w-[10vw]'
              src='/assets/images/logo.png'
            />
          </motion.div>
        </div>

        <menu>
          <motion.ul
            className='nav-menu'
            id={showmenu ? "mobile" : "hide"}
            whileHover={controls.stop}
          >
            <Link href='/'>
              <motion.li
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.8 }}
                drag
                dragSnapToOrigin
                onHoverStart={(e, i) => {
                  console.log(e, i);
                }}
                className='text-[#07F307]'
                transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
                onClick={() => {
                  hideMenu;
                }}
              >
                {"< Home / >"}
              </motion.li>
            </Link>
            <Link href='/'>
              <motion.li
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.8 }}
                drag
                dragSnapToOrigin
                onHoverStart={(e, i) => {
                  console.log(e, i);
                }}
                transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
                onClick={() => {
                  hideMenu;
                }}
              >
                {"< Our Services / >"}
              </motion.li>
            </Link>
            <Link href='/'>
              <motion.li
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.8 }}
                drag
                dragSnapToOrigin
                onHoverStart={(e, i) => {
                  console.log(e, i);
                }}
                transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
                onClick={() => {
                  hideMenu;
                }}
              >
                {"< About / >"}
              </motion.li>
            </Link>
          </motion.ul>
        </menu>

        {/* <div className='icon flex scale-50 items-center'>
          <MenuIcon />
          <DrawingComponent />
        </div> */}
        <div className='icon flex border-green-500  items-center'>
          <MenuIcon color='white' style={{ fontSize: 50, color: "#07F307" }} />
        </div>
      </motion.nav>
      {children}
    </div>
  );
};

export default Navbar;
