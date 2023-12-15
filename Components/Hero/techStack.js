import Image from "next/image";
import { useState, useEffect } from "react";
import { marquees } from "./data";
import Marquee from "react-fast-marquee";

export default function Marq() {
  return (
    <>
      <Marquee direction="left" speed={80} delay={5}>
        {marquees.map((marquee) => {
          return (
            <div className="image_wrapper">
              <img src={marquee.img} alt="" />
            </div>
          );
        })}
      </Marquee>
    </>
  );
}
