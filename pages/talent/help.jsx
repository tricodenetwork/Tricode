import MenuLayout from "@/Components/layouts/MenuLayout";
import MessageItem from "@/Components/chatComponents/MessageItem";
import { FiPaperclip } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import TalentLayout from "@/Components/layouts/TalentLayout";
import { useState } from "react";
const Help = () => {
  // --------------------------------------------VARIABLES
    const [current, setCurrent] = useState(1)
  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS


  return (
    <div className='h-max p-5  lg:p-10 w-full flex flex-col relative'>
        <div className=" flex gap-4 items-center mb-6 w-[90%] lg:w-[75%] self-center ">
            <button className={`px-8 border text-binance_green border-binance_green ${current === 1 && 'bg-binance_green text-white'}  py-2 rounded-full`} onClick={()=>setCurrent(1)}>Support</button>
            <button className={`px-8 border text-binance_green border-binance_green ${current === 2 && 'bg-binance_green text-white'}  py-2 rounded-full`} onClick={()=>setCurrent(2)}>FOQ</button>
            <button className={`px-8 border text-binance_green border-binance_green ${current === 3 && 'bg-binance_green text-white'}  py-2 rounded-full`} onClick={()=>setCurrent(3)}>Forums</button>
        </div>
        {
            current === 1 && <Support/> 
        }
         {
            current === 2 && <FOQ/> 
        }
         {
            current === 3 && <Forums/> 
        }

    </div>
  );
};

Help.getLayout = function getLayout(page) {
  return <TalentLayout>{page}</TalentLayout>;
};
export default Help;




function Forums(){
    return (
        <div className='w-[90%] lg:w-[75%] border-2 self-center  border-binance_green rounded-[17px] h-[656px] overflow-y-hidden relative'>
           Working on it
        </div>
    )
}

function  FOQ (){
    return (
        <div className='w-[90%] lg:w-[75%]  self-center   h-[656px] overflow-y-hidden relative'>
            <h6 className=' font-bold text-xl text-center'>
            FOQ
            </h6>
            <p>Lorem ipsum dolor sit amet consectetur. Magnis leo quam pharetra suscipit euismod platea. Consequat tincidunt sociis sed ut.</p>
          <div>
            <div className=" my-6">
                <h6 className=' font-bold text-xl mb-4'>
                Can I?
                </h6>
                <p>Lorem ipsum dolor sit amet consectetur. Magnis leo quam pharetra suscipit euismod platea. Consequat tincidunt sociis sed ut.</p>
            </div>

            <div className=" my-6">
                <h6 className=' font-bold text-xl mb-4'>
                Can I?
                </h6>
                <p>Lorem ipsum dolor sit amet consectetur. Magnis leo quam pharetra suscipit euismod platea. Consequat tincidunt sociis sed ut.</p>
            </div>
            <div className=" my-6">
                <h6 className=' font-bold text-xl mb-4'>
                Can I?
                </h6>
                <p>Lorem ipsum dolor sit amet consectetur. Magnis leo quam pharetra suscipit euismod platea. Consequat tincidunt sociis sed ut.</p>
            </div>
            <div className=" my-6">
                <h6 className=' font-bold text-xl mb-4'>
                Can I?
                </h6>
                <p>Lorem ipsum dolor sit amet consectetur. Magnis leo quam pharetra suscipit euismod platea. Consequat tincidunt sociis sed ut.</p>
            </div>
         

          </div>
        </div>
    )
}

function  Support (){
    return (
        <div className='w-[90%] lg:w-[75%] border-2 self-center  border-binance_green rounded-[17px] h-[656px] overflow-y-hidden relative'>
            <h6 className='bg-binance_green h-[8%] flex items-center px-[68px] text-white w-full text-center lg:text-left'>
            Send us a message
            </h6>
            <div className='pt-[5vh] flex flex-col gap-2 px-4'>
                <MessageItem img={"/assets/images/help.svg"} text={"Hi.Have any questions? Please aski"}  receiver={true}/>
                <MessageItem img={"/assets/images/av2.jpg"}
                text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."}  receiver={false}/>
            </div>
            <div className="flex gap-3 m-auto absolute bottom-2 w-[90%] left-0 right-0 items-center">
            <FiPaperclip className=" text-2xl"/>
            <BsEmojiSmile className=" text-2xl"/>
            <div className="p-2 px-6 bg-ash flex justify-between w-full items-center rounded-2xl">
                <input type="text" className="w-[80%] px-2 py-4 outline-none bg-transparent text-xl" placeholder="Enter your message"/>
                <IoIosSend className=" text-2xl text-binance_green"/>
            </div>
            <IoMicOutline className=" text-4xl"/>
            </div>
        </div>
    )
}