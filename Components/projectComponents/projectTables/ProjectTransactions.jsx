import { BackButton } from "@/Components/Button";
import AppButton, { AppButton2 } from "@/Components/AppButton";

import Link from "next/link";

const projectMilestones = [
  {
    name: "Initial Deposit",
    amount: "$2000",
    contingency: "$300",
    status: "Paid",
  },
  { name: "Research", amount: "$2000", contingency: "$300", status: "Paid" },
  {
    name: "UI/UX design",
    amount: "$2000",
    contingency: "$200 (Max. $400)",
    status: "Pending",
  },
  {
    name: "Development",
    amount: "$2000",
    contingency: "$200 (Max. $400)",
    status: "Pending",
  },
  {
    name: "Testing",
    amount: "$2000",
    contingency: "$200 (Max. $400)",
    status: "Pending",
  },
  // { name: "A1 1", amount: "$2000", contingency:"$00" status: "Awaiting your review" },
];

function ProjectTransactions({ project }) {
  let PM = true;
  return (
    <section className='   '>
      <section className='my-10 '>
        <TransactionHistory project={project} />
      </section>

      {!PM ? (
        <div className='flex gap-3 justify-center items-center my-6'>
          <BackButton />
          <AppButton href={"/"} title={"Pause project"} />
          <AppButton2 href={"/"} title={"Pay all"} />
        </div>
      ) : (
        <div className='flex gap-3 justify-center items-center my-6'>
          <AppButton href={"/"} title={"Pause project"} />
          <AppButton2 href={"report"} title={"Project Report"} />
        </div>
      )}
    </section>
  );
}

export default ProjectTransactions;

const TransactionHistory = ({ project }) => {
  return (
    <div className='flex justify-center items-center lg:scrollbar-hide overflow-x-scroll lg:overflow-x-clip mt-10'>
      <table className='w-full bg-white  rounded'>
        <thead>
          <tr className='font-bold text-gray-600  text-sm leading-normal capitalize'>
            <th className='py-6 pr-6 text-center  uppercase'>S/N</th>
            <th className='py-6 px-6 text-center  whitespace-nowrap'>
              Payment For
            </th>
            <th className='py-6 px-6 text-center  whitespace-nowrap'>Amount</th>
            <th className='py-6 px-6 text-center  whitespace-nowrap'>
              Contingency
            </th>
            <th className='py-6 px-6 text-center'>Status</th>
            <th className='py-6 px-6 text-center'>Pay</th>
          </tr>
        </thead>
        <tbody className='text-gray-600 text-sm font-light'>
          {project?.milestones?.map((v, k) => (
            <tr
              key={k.toString()}
              className='border-b border-gray-200 hover:bg-gray-100'
            >
              <td className='py-6 pr-6 text-center whitespace-nowrap'>
                {k < 9 ? `0${k + 1}` : k + 1}
              </td>
              <td className='py-6 px-6 text-center whitespace-nowrap'>
                {v.payment}
              </td>
              <td className='py-6 px-6 text-center whitespace-nowrap'>
                {v.amount}
              </td>
              <td className='py-6 px-6 text-center whitespace-nowrap'>
                {v.contingency}
              </td>

              <td
                className={`py-6 px-6 text-center capitalize   medium whitespace-nowrap ${
                  v.status == "pending" ? "text-appOrange" : "text-[#27AE60]"
                }`}
              >
                {v.status}
              </td>
              <td className='py-3 px-6 text-center'>
                {v.status == "pending" && (
                  <Link
                    href={"/menu/project/projectID"}
                    className='  border-binance_green light text-binance_green hover:bg-binance_green hover:text-white duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
                  >
                    Pay
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
