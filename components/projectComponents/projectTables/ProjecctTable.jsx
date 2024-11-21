import useDatabase from "@/hooks/useDatabase";
import { getStatusClass } from "@/lib/utils/helper";
import Link from "next/link";
import { useSelector } from "react-redux";

function ProjectTable() {
  return (
    <section className='w-full lg:w-[85%] px-5 lg:px-10 self-center h-full  '>
      {/* <div className='semiBold text-black text-[24px] tracking-[0] leading-[normal]'>
        Projects
      </div> */}
      <section>
        <TableHistory />
      </section>
    </section>
  );
}

export default ProjectTable;

const TableHistory = () => {
  const { projects } = useSelector((state) => state.projects);
  const { convertObjectIdToDate } = useDatabase();

  return (
    <div className='flex justify-center relative  p-8 bg-white rounded-[32px] border-2 border-solid border-[#efeeee items-center mt-10'>
      <div className='w-full  bg-white  rounded'>
        <div className='grid grid-cols-[0.5fr,1fr,1fr,1fr,1fr] place-items-center w-full'>
          <h6 className='semiBold py-5 pr-6 text-center hidden lg:flex uppercase'>
            S/N
          </h6>
          <h6 className='semiBold py-5 px-4 text-center  whitespace-nowrap'>
            Project Name
          </h6>
          <h6 className='semiBold py-5 px-4 hidden lg:flex text-center  whitespace-nowrap'>
            Initiation Date
          </h6>
          <h6 className='semiBold py-5 px-4 text-center'>Status</h6>
          <h6 className='semiBold py-5 px-4 text-center'></h6>
        </div>
        {projects?.map((v, k) => (
          <div
            key={v._id.toString()}
            className='grid grid-cols-[0.5fr,1fr,1fr,1fr,1fr] border-b   border-gray-200 place-items-center w-full'
          >
            <p className='py-5 pr-6 medium hidden lg:flex text-grayText text-base text-center whitespace-nowrap'>
              {k < 9 ? `0${k + 1}` : k + 1}
            </p>
            <p className='py-5 px-0 sm:px-4 medium text-grayText text-base text-center whitespace-nowrap'>
              {v.name}
            </p>
            <p className='py-5 px-0 sm:px-4 hidden lg:flex medium text-grayText text-base text-center whitespace-nowrap'>
              {convertObjectIdToDate(v._id)}
            </p>
            <p
              className={`py-5 px-0 sm:px-4 text-center text-base font-bold whitespace-nowrap ${getStatusClass(
                v
              )}`}
            >
              {v.status}
            </p>
            <Link
              href={`/project/${v._id}`}
              className='hidden lg:flex   border-binance_green light text-binance_green hover:bg-binance_green hover:text-white duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
