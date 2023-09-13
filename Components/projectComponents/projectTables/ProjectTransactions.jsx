import { BackButton } from "@/Components/Button";

import Link from "next/link";


function ProjectTransactions() {


  return (
    <section className=" overflow-y-scroll h-full ">






      <section className="my-10">
        <TransactionHistory />
      </section>

      <div className="flex gap-3 justify-center items-center my-6">
        <BackButton/>
        <button className="  border-green-800 font-bold text-green-800  rounded-full border px-8 py-2">Pause Project</button>

        <button className="  text-white font-bold bg-[#38A312] rounded-full border px-8 py-2">Pay All</button>
        
      </div>
    </section>
  );
}


export default ProjectTransactions;




const TransactionHistory = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <table className="w-full bg-white  rounded">
        <thead>
          <tr className="font-bold text-gray-600 uppercase text-sm leading-normal capitalize">
            <th className="py-3 pr-6 text-left">S/N</th>
            <th className="py-3 px-6 text-left  whitespace-nowrap">Payment For</th>
            <th className="py-3 px-6 text-left  whitespace-nowrap">Contingency</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {
            [1, 2, 3, 1, 6].map((v, k) => (
              <tr key={k} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 pr-6 text-left whitespace-nowrap">{k + 1}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">Milestone {k}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">2023-09-15</td>
                <td className={`py-3 px-6 text-left whitespace-nowrap ${v == 1 ? 'text-orange-700' : 'text-green-400' }`}>{v == 1 ? 'Pending' :  'Paid' }</td>
                <td className="py-3 px-6 text-center">
                {v == 1 &&  <Link href={'projectID'} className="  border-green-800 font-bold text-green-800  rounded-full border px-8 py-2">
                    Pay now
                  </Link>  }
                 
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
