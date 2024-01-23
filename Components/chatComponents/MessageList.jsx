import { userArray } from "@/lib/constants/fakeUsers";
import { extractHoursAndMinutes } from "@/lib/utils/dateFunctions";
import Image from "next/image";
import SearchComponent from "../editor/SearchComponent";
import { useState } from "react";
import Link from "next/link";
import { ChatItem } from "react-chat-elements";
import { useRouter } from "next/router";

export default function MessageList() {
  const router = useRouter();

  const [val, setVal] = useState("");

  return (
    <section className=" w-full h-full scrollbar-hide border-r border-grayText overflow-scroll ">
      <div className="mb-5 space-x-3 mx-5 px-2 py-2 border-b border-[#e0e0e0] flex items-center justify-center rounded-md">
        <div className="w-[24px] h-[24px] relative">
          <Image src={"/assets/icons/glass.svg"} fill alt="glass" />
        </div>
        <input
          placeholder="Find tradesperson..."
          value={val}
          className="bg-transparent font-medium text-sm tracking-[0] leading-[normal] whitespace-nowrap outline-none text-[#e0e0e0]"
          onChange={(e) => {
            setVal(e.target.value);
          }}
          type="text"
        />
      </div>
      {userArray.map((user, key) => (
        <div
          onClick={() =>
            router.push(`/menu/project/chat/?name=${user.fullName}`)
          }
          className="flex w-full items-start gap-2 hover:bg-gray-100 p-2 rounded-sm"
          key={(key + user.lastOnline).toString()}
        >
          <ChatItem
            avatar={"/assets/icons/Ellipse.png"}
            alt={""}
            title={user.fullName}
            subtitle={`"What are you doing?"`}
            date={extractHoursAndMinutes(user.lastOnline)}
            unread={user.unread}
          />
          {/* <Image
            src={"/assets/icons/Ellipse.png"}
            alt=""
            width={34}
            height={34}
            className="w-[45px] h-[45px] rounded-full"
          />
          <div>
            <div className="font-bold text-sm capitalize">{user.fullName}</div>
            <p className="text-xs text-[#bdbdbd]">
              {extractHoursAndMinutes(user.lastOnline)}
            </p>
          </div> */}
        </div>
      ))}
    </section>
  );
}
