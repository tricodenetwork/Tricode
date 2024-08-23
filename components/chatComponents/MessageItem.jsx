import Image from "next/image";
import React from "react";

const MessageItem = ({ img, text, receiver }) => {
  return (
    <div className={`flex gap-3 items-start ${receiver?' self-start':' self-end flex-row-reverse'}`}>
      <Image
        className={` rounded-full `}
        width={64}
        height={64}
        src={img}
        alt=""
      />
     <div className={` flex flex-col ${!receiver&&' text-end'} max-w-[50%]`}>
      <div className={` text-gray-600 `}>4:13 pm</div>
      <p className={`  ${!receiver&&' text-start'}`}>{text}</p>
     </div>
    </div>
  );
};

export default MessageItem;
