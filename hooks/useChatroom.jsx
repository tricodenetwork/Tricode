import { useSession } from "next-auth/react";
import React, { useCallback } from "react";
import useDatabase from "./useDatabase";
import axios from "axios";

const useChatroom = () => {
  const { data: session } = useSession();
  const { rooms } = useDatabase();
  const createChatRoom = useCallback(async (receiverId) => {
    const chatRoom = {
      senderId: session?.user?.email,
      receiverId,
    };
    if (rooms) {
      const roomId = rooms?.filter((room) => {
        const isSenderMatch =
          room.senderId === session?.user?.email ||
          room.senderId === receiverId;
        const isReceiverMatch =
          room.receiverId === session?.user?.email ||
          room.receiverId === receiverId;

        return isSenderMatch && isReceiverMatch;
      });

      if (roomId?.length == 0) {
        const res = await axios.post("/api/post/room", chatRoom);

        return res.data.data;
      } else {
        return roomId[0]?._id;
      }
    }
  });

  return { createChatRoom };
};

export default useChatroom;
