import NotifyItem from "../lists/NotifyItem";
import Announce from "../svg/Announce";
import Alert from "../svg/Alert";
import People from "../svg/People";

const Notifications = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='w-[430px] h-[480px]'>
      <h3
        style={{ textTransform: "capitalize", color: "#2e2c2c" }}
        className='w-full rounded-t-[15px] pt-3 bg-[#ECF5F7] h-[60px] text-center capitalize'
      >
        Notifications
      </h3>
      <div className='w-[430px] h-[420px] px-5 pb-3 pt-3 overflow-y-auto'>
        <NotifyItem
          // Icon={Alert}
          notificationType={"Reminder"}
          time={"4:59pm"}
          bod={
            <p style={{ fontSize: 14 }} className='light w-[90%]'>
              Your <b>AI</b> project meeting set to hold <b>06:00pm GMT</b>{" "}
              starts in an hour{" "}
              <span className='text-[#2F8BE1]'>Start meeting 🔗</span>
            </p>
          }
        />
        <NotifyItem
          Icon={Announce}
          notificationType={"Announcement"}
          time={"2:25pm"}
          bod={
            <div>
              <b>Recomendations for you</b>
              <p style={{ fontSize: 14 }} className='light mt-1 w-[90%]'>
                We combed our catalog and pointers that may improve your
                project, check your details page
              </p>
            </div>
          }
        />
        <NotifyItem
          Icon={Alert}
          notificationType={"Alert"}
          time={"9:30am"}
          bod={
            <p style={{ fontSize: 14 }} className='light mt-1 w-[90%]'>
              You have <b>3 submitted projects</b> reviewed to attend to from
              your last <b>User Research and Development</b> process
            </p>
          }
        />

        <div className='flex justify-between w-full items-center'>
          <div className='w-[35%] bg-[#7C7B82] h-[2px] text-binance_black'></div>
          <p style={{ fontSize: 16 }} className='text-[#7C7B82] semiBold'>
            Yesterday
          </p>
          <div className='w-[35%] bg-[#7C7B82] h-[2px] text-binance_black'></div>
        </div>
        <NotifyItem
          Icon={People}
          notificationType={"Tricode"}
          time={"11:33pm"}
          bod={
            <p style={{ fontSize: 14 }} className='light mt-1 w-[90%]'>
              You have 2 messages from project manager
            </p>
          }
        />
      </div>
    </div>
  );
};
export default Notifications;
