import { useState } from "react";

export default function Toggle({func}) {
    const [switch_, setSwitch] = useState(false)
    return (
     <button 
        onClick={()=>{func(); setSwitch(!switch_)}} 
        className={`relative rounded-full w-[60px]  h-[30px] ${switch_?' bg-binance_green':'bg-ash'} border border-ash`}>
        <div className={`w-[29px] h-[29px] rounded-full bg-white absolute transition-all top-0 ${!switch_?' translate-x-0':' translate-x-[100%]'}`}></div>
     </button>
    );
  }