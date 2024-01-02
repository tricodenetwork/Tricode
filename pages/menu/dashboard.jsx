import MenuLayout from "@/Components/layouts/MenuLayout";
import ProjectTable from "@/components/projectComponents/projectTables/ProjecctTable";
import Image from "next/image";
import Link from "next/link";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

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

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='h-max p-5  lg:p-10 w-full  flex flex-col'>
      <div className='flex flex-col justify-around lg:flex-row'>
        <div>
          <p className='text-transparent text-[20px] tracking-[0] leading-[normal]'>
            <span className='text-[#666666]'>Welcome Back, </span>
            <span className='text-[#2b2b2b] medium text-[24px]'>Company</span>
            <span className='text-[#666666]'>👋🏾</span>
          </p>
          <div className='text-[#8c8787] text-[15px] tracking-[0] leading-[normal]'>
            August 17, Wednesday
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
                  <p className="absolute w-[87px] top-[129px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-transparent  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    <span className='text-[#2b2b2b]'>Password</span>
                    <span className='text-[#666666]'>:</span>
                  </p>
                </div>
                <div className='absolute w-[243px] h-[153px] top-0 left-[104px]'>
                  <div className="absolute top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2b2b2b]  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    Company Name
                  </div>
                  <div className="absolute top-[43px] left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2b2b2b]  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    @companyname
                  </div>
                  <div className="absolute top-[86px] left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#37a212]  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    Companyname@gmail.com
                  </div>
                  <div className="absolute top-[129px] left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2b2b2b]  text-xs s:text-sm  lg:text-[16px] tracking-[0] leading-[normal]">
                    Companyname$01
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute w-[140px] h-[140px] top-[-67px] left-1/2 -translate-x-1/2 bg-[url(/assets/images/company.svg)] bg-[100%_100%]'>
              <Image
                width={24}
                height={24}
                className='absolute top-[98px] left-[116px]'
                alt='Group'
                src='/assets/icons/edit.svg'
              />
              <Image
                width={40}
                height={40}
                className='absolute top-[13px] left-[111px]'
                alt='Group'
                src='/assets/icons/verified.svg'
              />
            </div>
          </div>
          <div className='inline-flex mt-[74px] flex-col items-start gap-[10px] relative'>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2e2c2c] text-[16px] tracking-[0] leading-[normal]">
              Scheduled Meetings
            </div>
            <div className='inline-flex flex-col items-start gap-[10px] relative flex-[0_0_auto]'>
              <div className='relative w-[376px] h-[78px] bg-white rounded-[14px] shadow-[0px_4px_10px_#0000000d]'>
                <p className="absolute top-[43px] left-[63px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#8c8787] text-[10px] tracking-[0] leading-[normal]">
                  Aug 2, 2022 from 8am - 10am
                </p>
                <div className="absolute w-[181px] top-[18px] left-[63px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#2e2c2c] text-[14px] tracking-[0] leading-[normal]">
                  Software Architecture
                </div>
                <Image
                  className='absolute w-[23px] h-[23px] top-[28px] left-[25px]'
                  width={23}
                  height={23}
                  alt='Group'
                  src='/assets/icons/verified_white.svg'
                />
              </div>
              <div className='relative w-[376px] h-[78px] bg-white rounded-[14px] shadow-[0px_4px_10px_#0000000d]'>
                <p className="absolute top-[43px] left-[63px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#8c8787] text-[10px] tracking-[0] leading-[normal]">
                  Aug 2, 2022 from 8am - 10am
                </p>
                <div className="absolute w-[181px] top-[18px] left-[63px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#2e2c2c] text-[14px] tracking-[0] leading-[normal]">
                  Software Architecture
                </div>
                <Image
                  className='absolute w-[23px] h-[23px] top-[28px] left-[25px]'
                  alt='Group'
                  width={23}
                  height={23}
                  src='/assets/icons/verified_white.svg'
                />
              </div>
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
                {projectDetails.map((v, k) => (
                  <tr
                    key={k.toString()}
                    className='border-b  border-gray-200 hover:bg-gray-100'
                  >
                    <td className='py-5 pr-6 medium hidden lg:flex text-grayText text-base text-center whitespace-nowrap'>
                      {k < 9 ? `0${k + 1}` : k + 1}
                    </td>
                    <td className='py-5 px-0 sm:px-4 medium text-grayText text-base text-center whitespace-nowrap'>
                      {v.name}
                    </td>
                    <td className='py-5 px-0 sm:px-4 hidden lg:flex medium text-grayText text-base text-center whitespace-nowrap'>
                      {v.date}
                    </td>
                    <td
                      className={`py-5 px-0 sm:px-4 text-center text-base font-bold whitespace-nowrap ${
                        v.status == "Completed"
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
          <div className='mt-[58px]'>
            <div className='flex relative justify-between'>
              <div className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2e2c2c] text-[20px] tracking-[0] leading-[normal]">
                Project Manager Responses
              </div>
              <div className="[font-family:'Poppins-Regular',Helvetica] hidden font-normal text-[#37a212] text-[14px] tracking-[0] leading-[normal]">
                Visit projects
              </div>
              <div className='absolute right-1 hidden -bottom-2 flex'>
                <LiaAngleLeftSolid color='#8C8888' />
                <LiaAngleRightSolid color='#8C8888' />
              </div>
            </div>
            <div className='mt-5  overflow-x-scroll  space-x-10 w-[100%] scrollbar-hide  flex'>
              <div className='relative w-[438px] flex-[0_0_auto] h-[166px] bg-white rounded-[10px] shadow-[0px_4px_10px_#0000000d,0px_-4px_10px_#0000000d]'>
                <div className='inline-flex flex-col items-start gap-[30px] relative top-[19px] left-[56px]'>
                  <p className="relative w-[326px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#2e2c2c] text-[13px] tracking-[0] leading-[normal]">
                    Lorem ipsum dolor sit amet consectetur. Id eget fringilla
                    varius pulvinar nisl sit nam aliquam.
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
                        Luke Kajola
                      </div>
                      <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#c5c2c2] text-[13px] tracking-[0] leading-[normal]">
                        Project Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative w-[438px] flex-[0_0_auto] h-[166px] bg-white rounded-[10px] shadow-[0px_4px_10px_#0000000d,0px_-4px_10px_#0000000d]'>
                <div className='inline-flex flex-col items-start gap-[30px] relative top-[19px] left-[56px]'>
                  <p className="relative w-[326px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#2e2c2c] text-[13px] tracking-[0] leading-[normal]">
                    Lorem ipsum dolor sit amet consectetur. Id eget fringilla
                    varius pulvinar nisl sit nam aliquam.
                  </p>
                  <div className='inline-flex items-center gap-[30px] relative '>
                    <Image
                      className='relative w-[57px] h-[57px]'
                      alt='Ellipse'
                      width={57}
                      height={57}
                      src='/assets/images/luke.svg'
                    />
                    <div className='inline-flex flex-col items-start gap-px relative'>
                      <div className="relative w-[96px] mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2e2c2c] text-[16px] tracking-[0] leading-[normal]">
                        Luke Kajola
                      </div>
                      <div className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-[#c5c2c2] text-[13px] tracking-[0] leading-[normal]">
                        Project Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
