import { userArray } from "@/lib/constants/fakeUsers";
import { extractHoursAndMinutes } from "@/lib/utils/dateFunctions";
import Image from "next/image";
import SearchComponent from "../editor/SearchComponent";
import { useState } from "react";
import { ChatItem } from "react-chat-elements";

export default function MessageList() {
  const [val, setVal] = useState("");

  return (
    <section className=' w-full h-full pb-12 border-r border-grayText '>
      <div className=' w-[90%] mb-0 space-x-3 px-2 py-2 border-b border-[#e0e0e0] flex items-center justify-start rounded-md'>
        <div className='w-[24px] h-[24px] relative'>
          <Image src={"/assets/icons/glass.svg"} fill alt='glass' />
        </div>
        <input
          placeholder='Find tradesperson...'
          value={val}
          className='bg-transparent font-medium text-sm tracking-[0] leading-[normal] whitespace-nowrap outline-none text-[#e0e0e0]'
          onChange={(e) => {
            setVal(e.target.value);
          }}
          type='text'
        />
      </div>
      <div className='w-full h-full scrollbar-hide  overflow-scroll'>
        {userArray.map((user, key) => (
          <div className='' key={key.toString()}>
            <ChatItem
              avatar={"/assets/icons/Ellipse.png"}
              alt={"profile_pic"}
              title={<div className=' text-sm capitalize'>{user.fullName}</div>}
              subtitle={<div className='light text-xs'>what are you doing</div>}
              date={user.lastOnline}
              // unread={2}
              className='chat-item'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
