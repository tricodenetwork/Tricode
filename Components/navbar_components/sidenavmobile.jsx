import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import LinkItem from "../LinkItem";

const SideNavMobile = ({ children }) => {
  const hideMenu = useCallback(() => {
    setShowmenu(false);
  }, []);

  return (
    <div className="w-full h-[639px] z-[9999] top-[6.8vh] right-0 absolute bg-black m-auto justify-center items-center">
      <motion.nav
        initial={{ x: 0 }}
        animate={{ x: [200, 0] }}
        className="md:navbar mx-auto self-center pt-[7vh] justify-center items-center"
      >
        <div className="flex flex-col w-full gap-8 text-white justify-center items-center">
          <LinkItem
            hideMenu={hideMenu}
            path="/about"
            offColor={false}
            text="About us"
          />
          <LinkItem
            hideMenu={hideMenu}
            path="/services"
            offColor={false}
            text="Services"
          />
          <LinkItem
            hideMenu={hideMenu}
            path="/projects"
            offColor={false}
            text="Projects"
          />
          <LinkItem
            hideMenu={hideMenu}
            path="/communities"
            text="Communities"
          />
          <LinkItem
            hideMenu={hideMenu}
            path="#newsletter"
            text="Newsletter"
          />
        </div>
        <motion.div
          initial={{ width: "40%" }}
          animate={{ width: "20%" }}
          // transition={{ type: "spring", stiffness: 500, duration: 0.1 }}
          transition={{ duration: 0.2 }}
          className="icon flex flex-col gap-6 mx-auto mt-12 justify-center items-center"
        >
          <LinkItem
            text={"Register"}
            path={"/menu"}
            className={
              "medText p-3 rounded-lg border border-slate-500"
            }
          />
          <LinkItem
            hideMenu={hideMenu}
            path="/login"
            text="Login"
            className={`medText text-[white]`}
          />
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default SideNavMobile;