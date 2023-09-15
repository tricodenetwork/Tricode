import { ConversationMessaging } from "@/Components/chatComponents/ConversationComponent";
import MessageList from "@/Components/chatComponents/MessageList";
import MenuLayout from "@/Components/layouts/MenuLayout";

const Chat = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-full flex gap-4 items-center w-full p-10'>
      <div className="w-1/3 h-full">
        <MessageList/>
      </div>
      <div className="w-[75%] h-full ">
        <ConversationMessaging/>
      </div>
    </div>
  );
};
Chat.getLayout = MenuLayout;
export default Chat;
