import Image from "next/image";
import React from "react";

const MessageItem = ({ img, text }) => {
  return (
    <div>
      <Image
        className='ml-[36px] rounded-full'
        width={64}
        height={64}
        src={img}
      />
      <p>{text}</p>
    </div>
  );
};

export default MessageItem;
