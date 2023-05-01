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
import { updateAddress } from "../../store/slice-reducers/Web3slice";
import { useDispatch } from "react-redux";
import { motion, useAnimation } from "framer-motion";

// import { ethers } from 'ethers';
import Logo from "./Logo";

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

  return (
    <div>
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className='navbar stick top-0  '
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
            className='logos'
          >
            <Link href='/'>
              <Logo />
            </Link>
          </motion.div>
          <div className='menu-icons' onClick={toggleMenu}>
            {showmenu ? (
              <RiCloseLine color={primary} size={35} />
            ) : (
              <AiOutlineBars color={primary} size={35} />
            )}
          </div>
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
                transition={{ type: "tween", duration: 0.2 }}
                onClick={() => {
                  hideMenu;
                }}
              >
                Home
              </motion.li>
            </Link>
            <motion.li
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "tween", duration: 0.2 }}
              onClick={hideMenu}
              className='flex'
            >
              <Link
                href='/sounds'
                style={{
                  color:
                    route.pathname == "/sounds"
                      ? "rgb(100 116 139)"
                      : "inherit",
                }}
              >
                $ounds
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "tween", duration: 0.2 }}
              onClick={hideMenu}
            >
              <Link href='/join' target={"targetFrame"}>
                NFTs
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "tween", duration: 0.2 }}
              onClick={hideMenu}
            >
              <Link href='./songs'>Merch</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "tween", duration: 0.2 }}
              onClick={hideMenu}
            >
              <Link className='opacity-50' href=''>
                $ales
              </Link>
            </motion.li>
          </motion.ul>
        </menu>

        <div className='icon flex items-center'>
          <li>
            <Link onClick={connectWallet} href='/'>
              {defaultAccount ? (
                <div className='flex flex-col items-center'>
                  <TiTick color='var(--primary)' />
                  <p className='text-[10px]'>Connected!!</p>
                </div>
              ) : (
                <GiWallet />
              )}
            </Link>
          </li>
          <li>
            <Link href='/songs'>
              <IoMdCart />
            </Link>
          </li>
          <li>
            <Link href='/Join'>
              <FaUserAlt />
            </Link>
          </li>
        </div>
      </motion.nav>
      {children}
    </div>
  );
};

export default Navbar;
