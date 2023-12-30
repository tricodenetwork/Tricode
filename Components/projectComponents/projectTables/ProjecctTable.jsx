import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const projectDetails = [
  { name: "A1 1", date: "2023-09-15", status: "Completed" },
  { name: "A1 1", date: "2023-09-15", status: "Returned for review" },
  { name: "A1 1", date: "2023-09-15", status: "Paused" },
  { name: "A1 1", date: "2023-09-15", status: "Started" },
  { name: "A1 1", date: "2023-09-15", status: "Ongoing" },
  { name: "A1 1", date: "2023-09-15", status: "Awaiting your review" },
];

function ProjectTable() {
  return (
    <section className='w-full lg:w-[85%] px-5 lg:px-10 m-auto h-full  '>
      <div className='flex  w-full justify-between'>
        <h3 className={` `}>New project (s)</h3>
        <Link
          href={"/menu/project/addnew"}
          className='font-bold text-green flex gap-3 text-green-600  items-center'
        >
          <PlusIcon fontSize={32} /> Add New
        </Link>
      </div>
      <section>
        <Table />
      </section>

      <section className='my-10'>
        <h3 className={` capitalize text-start`}>Project History</h3>
        <TableHistory />
      </section>
    </section>
  );
}

export default ProjectTable;

const Table = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <table className='w-full bg-white  rounded'>
        <thead>
          <tr className='font-bold text-black  text-sm leading-normal capitalize'>
            <th className='pb-5 pr-6 hidden lg:flex text-center'>S/N</th>
            <th className='pb-5 px-4 text-center whitespace-nowrap'>
              Project Name
            </th>
            <th className='pb-5 px-4 text-center hidden lg:flex whitespace-nowrap'>
              Initiation Date
            </th>
            <th className='pb-5 px-4 text-center'>Status</th>
            <th className='pb-5 px-4 hidden lg:flex text-center'></th>
          </tr>
        </thead>
        <tbody className=''>
          {projectDetails.map((v, k) => (
            <tr
              key={k}
              className='border-y-[0.8px] border-opacity-25 border-grayText  hover:bg-gray-100'
            >
              <td className='py-5 pr-6 medium hidden lg:flex text-grayText text-base text-center whitespace-nowrap'>
                {k < 9 ? `0${k + 1}` : k + 1}
              </td>
              <td className='py-5 px-4 medium text-grayText text-base text-center whitespace-nowrap'>
                {v.name}
              </td>
              <td className='py-5 px-4 medium hidden lg:flex text-grayText text-base text-center whitespace-nowrap'>
                {v.date}
              </td>
              <td
                className={`py-5 px-4 text-center text-base font-semibold whitespace-nowrap ${
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
              <td className='py-5 px-4 hidden lg:flex text-center'>
                <Link
                  href={"/menu/project/projectID"}
                  className='  border-binance_green light text-binance_green hover:bg-binance_green hover:text-white duration-300 h-[40px] text-xs w-[103px] text-center px-9 py-3 rounded-[50px]   border'
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHistory = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
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
            <th className='py-5 px-4 hidden lg:flex text-center'></th>
          </tr>
        </thead>
        <tbody className=''>
          {projectDetails.map((v, k) => (
            <tr key={k} className='border-b border-gray-200 hover:bg-gray-100'>
              <td className='py-5 pr-6 medium hidden lg:flex text-grayText text-base text-center whitespace-nowrap'>
                {k < 9 ? `0${k + 1}` : k + 1}
              </td>
              <td className='py-5 px-4 medium text-grayText text-base text-center whitespace-nowrap'>
                {v.name}
              </td>
              <td className='py-5 px-4 hidden lg:flex medium text-grayText text-base text-center whitespace-nowrap'>
                {v.date}
              </td>
              <td
                className={`py-5 px-4 text-center text-base font-bold whitespace-nowrap ${
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
              <td className='hidden lg:flex'>
                <Link
                  className='  border-binance_green light text-binance_green hover:bg-binance_green hover:text-white duration-300 h-[40px] text-xs w-[103px] text-center px-9 py-3 rounded-[50px]   border'
                  href={"/menu/project/projectID"}
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
