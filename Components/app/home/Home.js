import React from "react";
import Slider from "../../../slider/SoundsSlider";
import NftSlider from "../../../slider/NftSlider";
import Mslide from "../../../slider/Mslide";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Nftdata } from "../../../slider/Nftdata";
import { sliderData } from "../../../slider/Sliderdata";
import { Msdata } from "../../../slider/Msdata";
import { Typography } from "@mui/material";

const Home = () => {
  // const keyword  = useSelector(state=>state.form.initialstate)
  // console.log(keyword);
  return (
    <div className='Homediv relative'>
      {/* <p>music to calm your nerves!!!</p> */}
      {/* <Slider
        name={sliderData}
        button={"Explore Sounds"}
        Header={" sOUNDS.."}
      />
      <Slider name={Nftdata} button={"N0n-Fungibles"} Header={" Nftees.."} />
      <Slider name={Msdata} button={"Explore Merch"} Header={"  Merch.. "} /> */}
    </div>
  );
};

export default Home;
