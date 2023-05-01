import { useState,useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./slider.css"
import {Msdata,} from "./Msdata"





const Sliders = () => {
const [currentSlide, setCurrentSlide] = useState(0);
const slideLength = Msdata.length;

const autoscroll =true;
let slideInterval;
let intervalTime = 6000;

const nextSlide =  () => {
  setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
}
const prevSlide =  () => {
  setCurrentSlide(currentSlide === 0 ? slideLength-1 : currentSlide - 1)
}

function auto(){
  slideInterval = setInterval(nextSlide,intervalTime)
}

useEffect(()=>{
  setCurrentSlide(0)
},[]);


useEffect(()=>{
  if(autoscroll){
    auto();
  }
  return()=> clearInterval(slideInterval)
  // eslint-disable-next-line
},[currentSlide]);



  return (
    <div className="slider">
    <AiOutlineArrowLeft className="arrow  prev" onClick={prevSlide}/>
    <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/> 

   {Msdata.map((slide,index) =>{
    return (
    <div className={index === currentSlide ? "slide current" :
    "slide"} key ={index}>
        {index === currentSlide && (
          <> 
          <div> 
          <img src={slide.image} alt="drums" className="Merch"/></div>
            <div className="content">
                <h5>{slide.description}</h5>
                <hr color="green" />
                </div> 
           
            </>
        )}
          
    </div>
    )
   })}
<div className="butt"><h6>Explore Merch</h6>
             </div>  
    </div>
  )
}

export default Sliders
