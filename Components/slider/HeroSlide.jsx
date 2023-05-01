import React, { useEffect, useState } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { array } from "yup/lib/locale";
import "./heroSlide.css";
import { sliderData, Splice, background } from "./Sliderdata";

const HeroSlide = ({ name }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = Splice.length;

  const autoscroll = true;
  let slideInterval;
  let intervalTime = 6000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft;
  };

  function auto() {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + slider.clientWidth;
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoscroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line
  }, [currentSlide]);
  return (
    <div
      style={{
        display: "block",
        overflow: "hidden",
        position: "relative",
      }}
      className=' heroSlide
      flex items-center h-[250px] max-w-[1200px] mx-auto mb-5'
    >
      <div
        id='slider'
        style={{ borderRadius: 10 }}
        className='w-full h-full flex  flex-nowrap overflow-x-scroll scroll scroll-smooth whitespace-nowrap'
      >
        {background.map((entry, index, array) => (
          <a className='grid grid-cols-[660px] mr-[2px]  '>
            <div
              style={{
                backgroundImage: `url(${background[index]})`,
                // overflow: "hidden",
              }}
              className=''
            >
              {/* <img src={Splice[index]} /> */}
            </div>
          </a>
        ))}
      </div>

      <BiArrowToLeft onClick={prevSlide} className='arr left ' />
      <BiArrowToRight onClick={nextSlide} className='arr right ' />
    </div>
  );
};

export default HeroSlide;

{
  /* <img src={Splice[0]} width={"253px"} height={250} />
<img src={Splice[1]} width={"660px"} height={250} />
<img src={Splice[2]} width={"253px"} height={250} /> */
}
