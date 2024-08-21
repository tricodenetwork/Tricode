import MenuLayout from "@/Components/layouts/MenuLayout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import axios from "axios";
import { useSession } from "next-auth/react";
import useDatabase from "@/hooks/useDatabase";
import { useRouter } from "next/router";
import FileUpload from "@/Components/modals/FileUpload";
import { useSelector } from "react-redux";
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

  function getStatusClass(v) {
    let statusClass;

    switch (v.status) {
      case "Paused":
        statusClass = "text-[#d9d9d9]";
        break;
      case "Awaiting your review":
        statusClass = "text-purple-800";
        break;
      case "Started":
        statusClass = "text-cyan-400";
        break;
      case "Ongoing":
        statusClass = "text-amber-400";
        break;
      case "Completed":
        statusClass = "text-binance_green";
        break;
      default:
        statusClass = "text-gray-800";
        break;
    }

    return statusClass;
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

  return (
    <div className='h-max p-5  lg:p-10 w-full  flex flex-col'>
      {upload && (
        <div className='bg-black bg-opacity-80 w-full z-50  flex justify-center items-center  h-full fixed top-0 left-0 '>
          <FileUpload files={files} setFiles={setFiles} />
        </div>
      )}
      <div className='flex flex-col justify-around lg:flex-row'>
        <div>
          <p className='text-transparent text-[20px] tracking-[0] leading-[normal]'>
            <span className='text-[#666666]'>Welcome Back, </span>
            <span className='text-[#2b2b2b] medium text-[24px]'>
              {user?.name?.split(" ")[0]}
            </span>
            <span className='text-[#666666]'>👋🏾</span>
          </p>
          <div className='text-[#8c8787] text-[15px] tracking-[0] leading-[normal]'>
            {formattedDate.toString()}
          </div>
          <div className='relative w-[90vw] lg:w-[383px] h-[377px] mt-[116px] bg-white rounded-[32px] border-2 border-solid border-[#efeeee]'>
            <div className="absolute top-[134px] left-[85px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#2b2b2b] text-[20px] tracking-[0] leading-[normal]">
              Profile Information
            </div>
            <div className='absolute w-[339px] h-[153px] top-[192px] left-[24px]'>
              <div className='relative w-[347px] h-[153px]'>
                <div className='absolute w-[105px] h-[153px] top-0 left-0'>
                  <div className="absolute w-[55px] top-0 left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#2b2b2b]  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    Name:
                  </div>
                  <div className="absolute w-[97px] top-[43px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#2b2b2b]  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    User Name:
                  </div>
                  <div className="absolute w-[50px] top-[86px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#2b2b2b]  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    Email:
                  </div>
                </div>
                <div className='absolute w-[243px] h-[153px] top-0 left-[104px]'>
                  <div className="absolute top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2b2b2b]  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    {user?.name}
                  </div>
                  <div className="absolute top-[43px] left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2b2b2b]  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    @monry
                  </div>
                  <div className="absolute top-[86px] left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#37a212]  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    {user?.email}
                  </div>
                </div>
              </div>
            </div>
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
          <div className='inline-flex mt-[74px] flex-col items-start gap-[10px] relative'>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2e2c2c] text-[16px] tracking-[0] leading-[normal]">
              Scheduled Meetings
            </div>
            <div className='inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]'>
              {projects?.map((project, index) => {
                return project?.meetings?.map((item, i) => (
                  <div
                    key={i.toString}
                    className='relative w-[376px] h-[78px] bg-white rounded-[14px] shadow-[0px_4px_10px_#0000000d]'
                  >
                    <p className='absolute top-[43px] left-[63px] medium text-[#8c8787] text-[10px] tracking-[0] leading-[normal]'>
                      {item.date}{" "}
                      <span className='medium text-[#8c8787] text-[10px]  tracking-[0] leading-[normal]'>
                        {item?.time}
                      </span>
                    </p>
                    <div className='absolute w-[181px] top-[18px] left-[63px] medium text-[#2e2c2c] text-[14px] tracking-[0] leading-[normal]'>
                      {item.name}
                    </div>
                    <Image
                      className='absolute w-[23px] h-[23px] top-[28px] left-[25px]'
                      width={23}
                      height={23}
                      alt='Group'
                      src='/assets/icons/verified_white.svg'
                    />
                  </div>
                ));
              })}
            </div>
          </div>
        </div>
        <div className='w-full mt-5 lg:mt-0 lg:w-[45vw]'>
          <div className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[normal]">
            Projects
          </div>
          <div className='flex justify-center relative  p-8 bg-white rounded-[32px] border-2 border-solid border-[#efeeee items-center mt-10'>
            <table className='w-full bg-white  rounded'>
              <thead className='text-black'>
                <tr className='font-bold text-black  text-sm leading-normal capitalize'>
                  <th className='py-5 pr-6 text-center hidden lg:flex uppercase'>
                    S/N
                  </th>
                  <th className='py-5 px-4 text-center  whitespace-nowrap'>
                    Project Name
                  </th>
                  <th className='py-5 px-4 hidden lg:flex text-center  whitespace-nowrap'>
                    Initiation Date
                  </th>
                  <th className='py-5 px-4 text-center'>Status</th>
                </tr>
              </thead>
              <tbody className=''>
                {projects?.map((v, k) => (
                  <tr
                    onClick={() => router.push(`/project/${v._id}`)}
                    key={v._id.toString()}
                    className='border-b hover:cursor-pointer  border-gray-200'
                  >
                    <td className='py-5 pr-6 medium hidden lg:flex text-grayText text-base text-center whitespace-nowrap'>
                      {k < 9 ? `0${k + 1}` : k + 1}
                    </td>
                    <td className='py-5 px-0 sm:px-4 medium text-grayText text-base text-center whitespace-nowrap'>
                      {v.name}
                    </td>
                    <td className='py-5 px-0 sm:px-4 hidden lg:flex medium text-grayText text-base text-center whitespace-nowrap'>
                      {convertObjectIdToDate(v._id)}
                    </td>
                    <td
                      className={`py-5 px-0 sm:px-4 text-center text-base font-bold whitespace-nowrap ${getStatusClass(
                        v
                      )}`}
                    >
                      {v.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='mt-[58px]'>
            <div className='flex relative justify-between'>
              <div className="[font-family:'Poppins-SemiBold',Helvetica] text-[#2e2c2c] text-[20px] tracking-[0] leading-[normal]">
                Project Manager Responses
              </div>
              <div className="[font-family:'Poppins-Regular',Helvetica] hidden font-normal text-[#37a212] text-[14px] tracking-[0] leading-[normal]">
                Visit projects
              </div>
              {/* <div className='absolute right-1 hidden -bottom-2 flex'>
                <LiaAngleLeftSolid color='#8C8888' />
                <LiaAngleRightSolid color='#8C8888' />
              </div> */}
            </div>
            <div className='p-5  overflow-x-scroll  space-x-10 w-[100%] scrollbar-hide  flex'>
              {projects?.map((project, index) => {
                return project?.report?.map((item, i) => {
                  return (
                    <div className='relative w-[438px] flex-[0_0_auto] h-[166px] bg-white rounded-[10px] shadow-[0px_4px_10px_#0000000d,0px_-4px_10px_#0000000d]'>
                      <div className='inline-flex flex-col items-start gap-[30px] relative top-[19px] left-[56px]'>
                        <p className="relative w-[326px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#2e2c2c] text-[13px] tracking-[0] leading-[normal]">
                          {item?.summary.slice(0, 80).concat("...")}
                        </p>
                        <div className='inline-flex items-center gap-[30px] relative '>
                          <Image
                            className='relative w-[57px] h-[57px]'
                            alt='Ellipse'
                            width={57}
                            height={57}
                            src='/assets/images/luke.svg'
                          />
                          <div className='inline-flex flex-col items-start gap-px relative '>
                            <div className="relative w-[96px] mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2e2c2c] text-[16px] tracking-[0] leading-[normal]">
                              {project?.manager}
                            </div>
                            <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#c5c2c2] text-[13px] tracking-[0] leading-[normal]">
                              Project Manager
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Dashboard.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Dashboard;
