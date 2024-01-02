import Image from "next/image";
import { BiDotsVertical } from "react-icons/bi";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { formatDate } from "@/lib/utils/dateFunctions";
export const ConversationMessaging = () => {
  return (
    <div className='w-full h-full '>
      {/* Header */}
      <div className='pb-[20px] pl-[50px] w-[80%] mb-[50px] flex items-center gap-2 relative border-b border-b-[#eoeoeo]'>
        <div className='relative w-[45px] h-[45px] '>
          <Image
            src={"/assets/icons/Ellipse.png"}
            alt='chat'
            fill
            className='w-[45px] h-[45px] rounded-full'
          />
          <div className='absolute -bottom-[2px] right-1 w-3 h-3 bg-green-500 rounded-full ' />
        </div>
        <div className='semiBold ml-2 text-black text-2xl'>
          Uche Livingstone
        </div>
      </div>

      {/* Conversation */}
      <div className='flex-1 overflow-y-scroll ml-[50px]  py-2'>
        {/*** MESSAGE BUBBLE */}

        <div className='flex  gap-4'>
          <Image
            src={"/assets/icons/Ellipse.png"}
            alt='face'
            width={45}
            height={45}
            className='w-[45px] h-[45px] rounded-full'
          />
          <div>
            <div className='text-appBlue medium text-base my-2'>Jan Cooper</div>
            <div className='flex mb-2 items-start'>
              <div className='bg-gray-200 regular p-4 rounded-b-lg rounded-r-lg  text-appBlue max-w-md'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
              <button>
                <Image
                  src={"/assets/icons/dots.svg"}
                  width={28.68}
                  height={32}
                />
              </button>
            </div>
            <div className='flex mb-2 items-start'>
              <div className='bg-gray-200 rounded-b-lg regular p-4 rounded-r-lg  text-appBlue max-w-xs'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </div>
              <button>
                <Image
                  src={"/assets/icons/dots.svg"}
                  width={28.68}
                  height={32}
                />
              </button>
            </div>
            <div className='flex mb-2 items-start'>
              <div className='bg-gray-200 rounded-b-lg regular p-4 rounded-r-lg  text-appBlue max-w-xs'>
                Amet minim mollit
              </div>
              <button>
                <Image
                  src={"/assets/icons/dots.svg"}
                  width={28.68}
                  height={32}
                />
              </button>
            </div>
          </div>
        </div>

        {/***SENDERS MESSAGE BUBBLE */}
        <div className='flex justify-end mb-2 items-start gap-2'>
          <button>
            <IoCheckmarkDoneOutline />
          </button>
          <div className='bg-[--primary] rounded-b-lg rounded-l-lg p-2 text-white max-w-xs'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </div>
        </div>
        <div className='flex justify-end mb-2 items-start gap-2'>
          <button>
            <IoCheckmarkDoneOutline />
          </button>
          <div className='bg-[--primary] rounded-b-lg rounded-l-lg p-2 text-white max-w-xs'>
            Amet minim mollit
          </div>
        </div>
      </div>
    </div>
  );
};
