import Image from "next/image";
import { BiDotsVertical } from "react-icons/bi";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { formatDate } from "@/lib/utils/dateFunctions";
export const ConversationMessaging = () => {
  return (
    <div className=" h-full ">
      {/* Header */}
      <div className=" p-4 flex items-center gap-2 relative border-b border-b-gray-400">
        <div className="relative w-[45px] h-[45px] ">
          <Image
            src={"/assets/icons/Ellipse.png"}
            alt=""
            width={34}
            height={34}
            className="w-[45px] h-[45px] rounded-full"
          />
          <div className="absolute bottom-0 -right-1 w-4 h-4 bg-green-500 rounded-full " />
        </div>
        <div>Uche Livingstone</div>
      </div>

      {/* Conversation */}
      <div className="flex-1 overflow-y-scroll  py-2">
        {/*** MESSAGE BUBBLE */}

        <div className="flex  gap-4">
        <Image
            src={"/assets/icons/Ellipse.png"}
            alt=""
            width={34}
            height={34}
            className="w-[45px] h-[45px] rounded-full"
          />
        <div >
          <div  className='text-gray my-2'>
            {formatDate(Date.now())}
            </div>
          <div className="flex mb-2 items-start">
            <div className="bg-gray-200 rounded-b-lg rounded-r-lg p-2 text-gray-700 max-w-xs">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </div>
            <button>
              <BiDotsVertical />
            </button>
          </div>
          <div className="flex mb-2 items-start">
            <div className="bg-gray-200 rounded-b-lg rounded-r-lg p-2 text-gray-700 max-w-xs">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint.
            </div>
            <button>
              <BiDotsVertical />
            </button>
          </div>
          <div className="flex mb-2 items-start">
            <div className="bg-gray-200 rounded-b-lg rounded-r-lg p-2 text-gray-700 max-w-xs">
              Amet minim mollit
            </div>
            <button>
              <BiDotsVertical />
            </button>
          </div>
       </div>
      </div>

        {/***SENDERS MESSAGE BUBBLE */}
        <div className="flex justify-end mb-2 items-start gap-2">
          <button>
            <IoCheckmarkDoneOutline />
          </button>
          <div className="bg-[--primary] rounded-b-lg rounded-l-lg p-2 text-white max-w-xs">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </div>
        </div>
        <div className="flex justify-end mb-2 items-start gap-2">
          <button>
            <IoCheckmarkDoneOutline />
          </button>
          <div className="bg-[--primary] rounded-b-lg rounded-l-lg p-2 text-white max-w-xs">
            Amet minim mollit
          </div>
        </div>
      </div>
    </div>
  );
};
