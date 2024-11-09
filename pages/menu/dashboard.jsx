import MenuLayout from "@/components/layouts/MenuLayout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import FileUpload from "@/components/modals/FileUpload";
import useDatabase from "@/hooks/useDatabase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { CircleLoader } from "react-spinners";
const projectDetails = [
  { name: "A1 1", date: "2023-09-15", status: "Completed" },
  { name: "A1 1", date: "2023-09-15", status: "Returned for review" },
  { name: "A1 1", date: "2023-09-15", status: "Paused" },
  { name: "A1 1", date: "2023-09-15", status: "Started" },
  { name: "A1 1", date: "2023-09-15", status: "Ongoing" },
  { name: "A1 1", date: "2023-09-15", status: "Awaiting your review" },
];

const Dashboard = () => {
  // --------------------------------------------VARIABLES
  const currentDate = new Date();
  const { data: session, status } = useSession();
  const { projects, user } = useDatabase();
  const router = useRouter();
  // const { user } = useSelector((state) => state);
  const upload = router.query?.imageUpload;
  const imageUrl = user?.image
    ? user?.image
    : user?.profile_pic
    ? `/profile_pics/${user?.email + "_" + user?.profile_pic}`
    : "/assets/images/company.svg";
  // console.log(session, "sessio");
  // console.log(status, "status");
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    currentDate
  );
  const [files, setFiles] = useState([]);

  //-----------------------------------------------------------FUNCTIONS

  function convertObjectIdToDate(oid) {
    const timestamp = parseInt(oid.substring(0, 8), 16) * 1000;
    const date = new Date(timestamp);

    // Format the date to 'YYYY-MM-DD'
    const formattedDate = date.toISOString().split("T")[0];

    return formattedDate;
  }

  //------------------------------------------------------------------USE EFFECTS
  useEffect(() => {
    if (user) {
      if (
        !(user?.role === "talent" || user?.role === "company" || user?.email)
      ) {
        router.push("/role");
      } else {
        switch (user?.role) {
          case "talent":
            router.replace("https://talent.tricode.pro");
            break;
          case "client":
            router.replace("https://client.tricode.pro");
            break;
          case "pm":
            router.replace("https://pm.tricode.pro");
            break;

          default:
            return;
        }
      }
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <CircleLoader
          className='w-[300px] lg:w-[500px]'
          loading={!false}
          color='green'
        />
        <p className='medium lg:text-xl mt-5 text-binance_green'>Loading</p>
      </div>
    );
  }
};
export default Dashboard;
