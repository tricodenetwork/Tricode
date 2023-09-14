import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";


function ProjectTable() {


  return (
    <section className=" w-[75%] m-auto  ">
      <div className="flex justify-between">
        <h3 className={` capitalize   `}>New project(s)</h3>
        <Link href={'/menu/project/addnew'} className="font-bold text-green flex gap-3 text-green-600  items-center">
          <PlusIcon fontSize={32} /> Add New
        </Link>
      </div>
      <section>
        <Table />
      </section>





      <section className="my-10">
        <h3 className={` capitalize text-start`}>Project History</h3>
        <TableHistory />
      </section>

    </section>
  );
}


export default ProjectTable;


const Table = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <table className="w-full bg-white  rounded">
        <thead>
          <tr className="font-bold text-gray-600  text-sm leading-normal capitalize">
            <th className="py-3 pr-6 text-left">S/N</th>
            <th className="py-3 px-6 text-left whitespace-nowrap">Project Name</th>
            <th className="py-3 px-6 text-left  whitespace-nowrap">Initial Date</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {
            [1, 2, 3, 1, 6].map((v, k) => (
              <tr key={k} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 pr-6 text-left whitespace-nowrap">{k + 1}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">Project {k}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">2023-09-15</td>
                <td className={`py-3 px-6 text-left whitespace-nowrap ${v == 1 ? 'text-green-700' : v == 3 ? 'text-gray-400' : v == 6 ? 'text-purple-800' : 'text-gray-800'}`}>{v == 1 ? 'Ongoing' : v == 3 ? 'Paused' : v == 6 ? 'Awaiting  your review' : 'Returned for review '}</td>
                <td className="py-3 px-6 text-center">
                  <Link href={'/menu/project/projectID'} className="  border-green-800 font-bold text-green-800  rounded-full border px-8 py-1 my-2">
                    View
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};


const TableHistory = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <table className="w-full bg-white  rounded">
        <thead>
          <tr className="font-bold text-gray-600 uppercase text-sm leading-normal capitalize">
            <th className="py-3 pr-6 text-left">S/N</th>
            <th className="py-3 px-6 text-left  whitespace-nowrap">Project Name</th>
            <th className="py-3 px-6 text-left  whitespace-nowrap">Initial Date</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {
            [1, 2, 3, 1, 6].map((v, k) => (
              <tr key={k} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 pr-6 text-left whitespace-nowrap">{k + 1}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">Project {k}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">2023-09-15</td>
                <td className={`py-3 px-6 text-left whitespace-nowrap ${v == 1 ? 'text-green-700' : v == 3 ? 'text-gray-400' : v == 6 ? 'text-purple-800' : 'text-gray-800'}`}>{v == 1 ? 'Completed' : v == 3 ? 'Paused' : v == 6 ? 'Ongoing' : 'Returned for review '}</td>
                <td className="py-3 px-6 text-center">
                  <Link href={'/menu/project/projectID'} className="  border-green-800 font-bold text-green-800  rounded-full border px-8 py-1">
                    View
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
