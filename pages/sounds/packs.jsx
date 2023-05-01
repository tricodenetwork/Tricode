import React from "react";
import Card from "../../Components/cards/Card";
import { background } from "../../Components/slider/Sliderdata";
import SoundLayout from "./soundLayout";

const packs = () => {
  return (
    <div className=''>
      <div className='cardArray  mx-auto w-[1200px] mt-10 grid grid-cols-5'>
        {background.map((item, index, array) => (
          <Card
            key={index}
            title={"African Jazz Groove"}
            url={item}
            artiste={"Ovd"}
            clefs={"50"}
          />
        ))}
      </div>
    </div>
  );
};
packs.getLayout = SoundLayout;
export default packs;

export const getStaticProps = async (params) => {
  const res = await fetch();
};
