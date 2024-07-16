import MenuLayout from "@/components/layouts/MenuLayout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import axios from "axios";
import { useSession } from "next-auth/react";
import useDatabase from "@/hooks/useDatabase";
import { useRouter } from "next/router";
import FileUpload from "@/components/modals/FileUpload";
import { useSelector } from "react-redux";
import { CircleLoader } from "react-spinners";
import TopComponent from "@/components/TopComponent";

import { topComponents } from "@/Data/data";
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
  console.log(imageUrl, "urlimage");
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
      console.log(user);
      if (
        !(user?.role === "talent" || user?.role === "company" || user?.email)
      ) {
        router.push("/role");
      } else {
        return;
      }
    }
  }, [user]);

  //   if (!user) {
  //     return (
  //       <div className='flex flex-col justify-center items-center w-full h-full'>
  //         <CircleLoader
  //           className='w-[300px] lg:w-[500px]'
  //           loading={!false}
  //           color='green'
  //         />
  //         <p className='medium lg:text-xl mt-5 text-binance_green'>Loading</p>
  //       </div>
  //     );
  //   }

  return (
    <div className='min-h-max  h-max   p-5  lg:py-10 lg:px-[2vw] w-full justify-between items-end   flex'>
      {upload && (
        <div className='bg-black bg-opacity-80 w-full z-50  flex justify-center items-center  h-full fixed top-0 left-0 '>
          <FileUpload files={files} setFiles={setFiles} />
        </div>
      )}
      <div className='flex  h-full w-[70%]   xxl:w-[70%] flex-col justify-between'>
        <div className='mb-[40px]'>
          <p className='text-transparent text-[20px] tracking-[0] leading-[normal]'>
            <span className='text-[#6D717A] medium text-lg leading-none'>
              Welcome Back,{" "}
            </span>
            <span className='text-[#2b2b2b] medium text-lg'>
              {/* {user?.name?.split(" ")[0]} */}
              {"PM"}👋🏾
            </span>
            {/* <span className='text-[#666666]'>👋🏾</span> */}
          </p>
        </div>
        <div className='flex items-center mb-[65px] gap-[2vw]  w-[100%]'>
          {topComponents.map((items, index) => {
            return <TopComponent key={index.toString()} item={items} />;
          })}
        </div>
        <div className='w-full max-h-max h-full   mt-5 lg:mt-0 '>
          <h6 className='semiBold text-black text-[24px] tracking-[0] leading-[normal]'>
            Project History
          </h6>
          <div className='flex h-max overflow-hidden   justify-center relative  p-8 bg-white rounded-[32px] border-2 border-solid border-[#efeeee items-center mt-5'>
            <table className='w-full   bg-white  rounded'>
              <thead className='text-black'>
                <tr className='font-bold text-black  text-sm leading-normal capitalize'>
                  <th className='py-5 pr-6 text-center hidden lg:table-cell uppercase'>
                    S/N
                  </th>
                  <th className='py-5 px-4 text-center  whitespace-nowrap'>
                    Project Name
                  </th>
                  <th className='py-5 px-4 hidden lg:table-cell text-center  whitespace-nowrap'>
                    Initiation Date
                  </th>
                  <th className='py-5 px-4 text-center'>Status</th>
                </tr>
              </thead>
              <tbody className=''>
                {projects?.slice(0, 4).map((v, k) => (
                  <tr
                    onClick={() => router.push(`/menu/project/${v._id}`)}
                    key={k.toString()}
                    className='border-b hover:cursor-pointer  border-gray-200'
                  >
                    <td className='py-5 pr-6 medium hidden lg:table-cell text-grayText text-base text-center whitespace-nowrap'>
                      {k < 9 ? `0${k + 1}` : k + 1}
                    </td>
                    <td className='py-5 px-0 sm:px-4 medium text-grayText text-base text-center whitespace-nowrap'>
                      {v.name}
                    </td>
                    <td className='py-5 px-0 sm:px-4 hidden lg:table-cell medium text-grayText text-base text-center whitespace-nowrap'>
                      {convertObjectIdToDate(v._id)}
                    </td>
                    <td
                      className={`py-5 px-0 sm:px-4 capitalize text-center text-base font-bold whitespace-nowrap ${
                        v.status == "Completed".toLowerCase()
                          ? "text-binance_green"
                          : v.status == "Paused"
                          ? "text-[#d9d9d9]"
                          : v.status == "Awaiting your review"
                          ? "text-purple-800"
                          : v.status == "Started"
                          ? "text-cyan-400"
                          : v.status == "Ongoing"
                          ? "text-amber-400"
                          : "text-gray-800"
                      }`}
                    >
                      {v.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='relative  flex flex-col items-center bottom-[33.333vh] w-[90vw] lg:w-[27%] h-max pt-[100px] pb-[5vh] px-[1%] rounded-[32px] border-2 border-solid border-[#efeeee]'>
        {/* Heading / Sub Heading */}
        <div className='medium text-[#2b2b2] text-black text-xl tracking-[0] leading-[normal]'>
          Profile Information
        </div>
        {/* Content / Details */}
        <div className=' w-max mt-[6%]  space-y-[2.5vh] min-h-[80px] '>
          <div className='flex items-center '>
            <p className='min-w-[50px] mr-2 '>Name:</p>
            <p className='w-[80%] semiBold  pl-[1.5%] regular text-start text-appBlue'>
              {user?.name}
            </p>
          </div>
          <div className='flex items-center '>
            <p className='min-w-[50px] mr-2 '>Email:</p>
            <p className='w-[80%] semiBold break-all xxl:break-normal text-binance_green text-sm   pl-[1.5%] regular text-start'>
              {user?.email}
            </p>
          </div>
          <div className='flex items-center '>
            <p className='min-w-[50px] mr-2'>Role:</p>
            <p className='w-[80%] semiBold lowercase break-all xxl:break-normal  text-xs text-appOrange   pl-[1.5%] regular text-start'>
              {"Talent"}
            </p>
          </div>
        </div>
        {/* Profile Logo / Image */}
        <div
          className={`absolute w-[140px] h-[140px] top-[-67px] left-1/2 -translate-x-1/2`}
        >
          <Image
            fill
            className='border object-cover border-gray-400 rounded-full'
            alt='Group'
            src={imageUrl}
          />
          <Link href={"?imageUpload=true"}>
            <Image
              width={24}
              height={24}
              className='absolute top-[98px] left-[116px]'
              alt='Group'
              src='/assets/icons/edit.svg'
            />
          </Link>
          {user?.verified && (
            <Image
              width={40}
              height={40}
              className='absolute top-[13px] left-[111px]'
              alt='Group'
              src='/assets/icons/verified.svg'
            />
          )}
        </div>
      </div>
    </div>
  );
};
Dashboard.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Dashboard;
