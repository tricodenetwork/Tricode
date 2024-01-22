import Image from "next/image";
import { useRouter } from "next/router";
import { BiDotsVertical } from "react-icons/bi";
import { FiLink, FiSend } from "react-icons/fi";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { formatDate } from "@/lib/utils/dateFunctions";
import InputLine from "@/Components/InputLine";
import { MessageBox } from "react-chat-elements";

export const ConversationMessaging = () => {
  const router = useRouter();
  const { name } = router.query;
  // Assuming the name is in the format "firstname-lastname"
  const [firstName, lastName] = name ? name.split("-") : ["", ""];
  const fullName = `${firstName}`;

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="pb-[20px] pl-[50px] w-[80%] mb-[50px] flex items-center gap-2 relative border-b border-b-[#eoeoeo]">
        <div className="relative w-[45px] h-[45px] ">
          <Image
            src={"/assets/icons/Ellipse.png"}
            alt="chat"
            fill
            className="w-[45px] h-[45px] rounded-full"
          />
          <div className="absolute -bottom-[2px] right-1 w-3 h-3 bg-green-500 rounded-full " />
        </div>
        <div className="semiBold ml-2 text-black text-2xl">{fullName}</div>
      </div>

      {/* Conversation */}
      <div className="flex-1 overflow-y-auto ml-[30px] h-screen py-2">
        {/*** MESSAGE BUBBLE */}
        <div className="flex flex-col gap-3 items-start w-[70%]">
          <div className="flex flex-row gap-3 items-center">
            <Image
              src={"/assets/icons/Ellipse.png"}
              alt="face"
              width={45}
              height={45}
              className="w-[45px] h-[45px] rounded-full"
            />
            <div className="text-appBlue medium text-base my-2">Jan Cooper</div>
            <div className="text-stone-300 text-[12px] font-medium font-['Poppins']">
              10:30
            </div>
          </div>
          <MessageBox
            onReplyMessageClick={() => console.log("reply clicked!")}
            position={"left"}
            type={"text"}
            text={
              "Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure."
            }
          />
        </div>

        {/***SENDERS MESSAGE BUBBLE */}
        <div className="flex flex-col justify-end mb-2 ml-[20%] mr-4 items-end gap-2">
          <div className="flex flex-row gap-3 items-center">
            <div className="text-stone-300 text-[12px] font-['Poppins']">
              10:30
            </div>
            <Image
              src={"/assets/icons/Ellipse.png"}
              alt="face"
              width={45}
              height={45}
              className="w-[45px] h-[45px] rounded-full"
            />
          </div>
          <MessageBox
            reply={{
              photoURL: "https://facebook.github.io/react/img/logo.svg",
              title: "elit magna",
              titleColor: "#8717ae",
              message: "Aliqua amet incididunt id nostrud",
            }}
            onReplyMessageClick={() => console.log("reply clicked!")}
            position={"right"}
            type={"text"}
            text={
              "Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure."
            }
          />
          <MessageBox
            onReplyMessageClick={() => console.log("reply clicked!")}
            position={"right"}
            type={"text"}
            text={
              "Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure."
            }
          />
        </div>
      </div>

      <div className="flex fixed mx-auto bottom-3 w-[65vh] lg:w-[65vh] xl:w-[77vh] px-7 py-3 gap-4 bg-zinc-100 justify-between items-center rounded-[5px]">
        <FiLink className="text-[22px] font-bold cursor-pointer hover:text-binance_green" />
        <InputLine
          type="text"
          styles={`bg-zinc-100`}
          name="message"
          placeholder="Type here..."
        />
        <FiSend className="text-[22px] font-bold cursor-pointer text-binance_green" />
      </div>
    </div>
  );
};

{
  /* <div className="flex  gap-4">
          <div>
            <div className="flex mb-2 items-start">
              <div className="bg-gray-200 regular p-4 rounded-b-lg rounded-r-lg  text-appBlue max-w-md">
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
            <div className="flex mb-2 items-start">
              <div className="bg-gray-200 rounded-b-lg regular p-4 rounded-r-lg  text-appBlue max-w-xs">
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
            <div className="flex mb-2 items-start">
              <div className="bg-gray-200 rounded-b-lg regular p-4 rounded-r-lg  text-appBlue max-w-xs">
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
        </div> */
}

{
  /* <div className="flex justify-end mb-2 items-start gap-2">
          <button>
            <IoCheckmarkDoneOutline />
          </button>
          <div className="bg-[--primary] rounded-b-lg rounded-l-lg p-2 text-white max-w-xs">
            Amet minim mollit
          </div>
        </div> */
}
