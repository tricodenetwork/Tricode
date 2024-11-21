import { useSession } from "next-auth/react";
import React, { useCallback, useMemo } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const useChatroom = () => {
  const { user } = useSelector((state) => state.user);

  const createChatRoom = useMemo(
    () => async (receiverId) => {
      const chatRoom = {
        senderId: user?.email,
        receiverId,
      };

      try {
        // Batch request to fetch chat rooms and create/retrieve the room
        const [existingRooms, createdRoom] = await Promise.all([
          axios.get("/api/get/chatrooms").then((res) => res.data.data),
          axios.post("/api/post/room", chatRoom).then((res) => res.data.data),
        ]);

        const roomId = existingRooms?.find((room) => {
          const isSenderMatch =
            room.senderId === user?.email || room.senderId === receiverId;
          const isReceiverMatch =
            room.receiverId === user?.email || room.receiverId === receiverId;

          return isSenderMatch && isReceiverMatch;
        });

        return roomId?.[0]?._id || createdRoom;
      } catch (error) {
        console.error("Error creating/retrieving chat room:", error);
        return null;
      }
    },
    [user]
  );

  const fetchChatsByRoomId = async (id) => {
    try {
      const res = await axios.get(`/api/get/chats?id=${id}`);
      return res.data.data;
    } catch (error) {
      console.error("Error fetching chats by room ID:", error);
      return [];
    }
  };

  return { createChatRoom, fetchChatsByRoomId };
};

export default useChatroom;
