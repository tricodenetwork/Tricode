import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

const LinkItem = ({
  path,
  text,
  hideMenu,
  className,
  isScrolled,
  offColor = true,
}) => {
  const router = useRouter();
  const bgColor =
    router.pathname === "/login" && offColor
      ? "text-[#2b2b2b]"
      : "text-[#d7d7d7]";

  return (
    <Link href={path}>
      <motion.ul className='flex medText items-center  text-white'>
        <span className='text-sm'>{"<"}</span>
        <motion.li
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
          onClick={hideMenu}
          className={`${bgColor} ${
            isScrolled ? "text-white hover:text-black" : "text-white hover:text-binance_green"
          } duration-200 mx-1 hover:mr-5 ease-out  ${className}`}
        >
          {`${text}`}
        </motion.li>
        <span className='text-sm'>{"/ >"}</span>
      </motion.ul>
    </Link>
  );
};

export default React.memo(LinkItem);
