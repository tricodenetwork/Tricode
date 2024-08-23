import { userArray } from "@/lib/constants/fakeUsers";
import { extractHoursAndMinutes } from "@/lib/utils/dateFunctions";
import Image from "next/image";
import SearchComponent from "../editor/SearchComponent";
import { useEffect, useState } from "react";
import { ChatItem } from "react-chat-elements";
import { useRouter } from "next/router";
import useChatroom from "@/hooks/useChatroom";
import useDatabase from "@/hooks/useDatabase";
import { useSession } from "next-auth/react";

export default function MessageList() {
  // --------------------------------------------VARIABLES

  const [val, setVal] = useState("");
  const router = useRouter();
  const { createChatRoom } = useChatroom();
  const { projects, allUsers } = useDatabase();
  const { data: session } = useSession();
  // Retrieve team from sessionStorage on component mount

  const [team, setTeam] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTeam = sessionStorage.getItem("team");
      return storedTeam ? JSON.parse(storedTeam) : null;
    }
    return null;
  });

  useEffect(() => {
    if (projects && allUsers && typeof window !== "undefined") {
      // Concatenate teams' names from projects
      const teamMembers = projects
        .filter((item) => item.company === session?.user?.name)
        .map((project) => project.teams)
        .flat();

      // Filter allUsers based on concatenated team names
      const newTeam = allUsers.filter((user) =>
        teamMembers.includes(user.name)
      );

      // Update state and store in sessionStorage
      setTeam(newTeam);
      sessionStorage.setItem("team", JSON.stringify(newTeam));
    }
  }, [projects, allUsers, session]);

  useEffect(() => {
    if (projects && allUsers) {
      // Concatenate teams' names from projects
      const teamMembers = projects
        .filter((item) => item.company === session?.user?.name)
        .map((project) => project.teams)
        .flat();

      // Filter allUsers based on concatenated team names
      const newTeam = allUsers.filter((user) =>
        teamMembers.includes(user.name)
      );

      // Update state and store in sessionStorage
      setTeam(newTeam);
      sessionStorage.setItem("team", JSON.stringify(newTeam));
    }
  }, [projects, allUsers, session]);

  const openRoom = async (user) => {
    // Implement the logic for opening a room
    const roomId = await createChatRoom(user.email);

    router.push(`/menu/project/chat/?id=${roomId}&name=${user.name}`);
  };

  return (
    <section className='w-full h-full pb-12 border-r border-grayText'>
      <div className='w-[90%] mb-0 space-x-3 px-2 py-2 border-b border-[#e0e0e0] flex items-center justify-start rounded-md'>
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
      <div className='w-full h-full scrollbar-hide overflow-scroll'>
        {team?.map((user, key) => (
          <div onClick={() => openRoom(user)} className='' key={key.toString()}>
            <ChatItem
              avatar={"/assets/icons/Ellipse.png"}
              alt={"profile_pic"}
              title={<div className='text-sm capitalize'>{user.name}</div>}
              subtitle={<div className='light text-xs'>what are you doing</div>}
              // date={user.lastOnline}
              // unread={2}
              className='chat-item'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
