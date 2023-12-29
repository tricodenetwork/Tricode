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
      <motion.ul>
        <motion.li
          //   whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
          onClick={hideMenu}
          className={`${bgColor} ${
            isScrolled ? "hover:text-black" : "hover:text-binance_green"
          } duration-200 ease-out  ${className}`}
        >
          {`${text}`}
        </motion.li>
      </motion.ul>
    </Link>
  );
};

export default React.memo(LinkItem);
