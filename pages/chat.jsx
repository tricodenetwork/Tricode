import { useEffect, useState } from "react";
import { ConversationMessaging } from "@/components/chatComponents/ConversationComponent";
import MessageList from "@/components/chatComponents/MessageList";
import MenuLayout from "@/components/layouts/MenuLayout";
import { useSwipeable } from "react-swipeable";

const Chat = () => {
  const [showMessageList, setShowMessageList] = useState(true);

  const handleSwipe = (deltaX) => {
    // Set a threshold for swipe distance
    if (deltaX > 50) {
      setShowMessageList(true);
    } else if (deltaX < -50) {
      setShowMessageList(false);
    }
  };
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.deltaX > 50) {
        setShowMessageList(true);
      } else if (eventData.deltaX < -50) {
        setShowMessageList(false);
      }
    },
  });

  return (
    <div
      {...handlers}
      className='h-full flex gap-4 items-center w-full pt-10 pl-5 overflow-clip scrollbar-hide'
    >
      {showMessageList && (
        <div className='w-full lg:w-[25%] h-full'>
          <MessageList />
        </div>
      )}
      {!showMessageList && (
        <div className='w-[75%] h-full'>
          <ConversationMessaging />
        </div>
      )}
      <div className='w-[70%] hidden lg:flex h-full'>
        <ConversationMessaging />
      </div>
    </div>
  );
};

Chat.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};

export default Chat;
