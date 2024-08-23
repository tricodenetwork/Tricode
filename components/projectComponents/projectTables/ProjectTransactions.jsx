import AppButton, { AppButton2 } from "@/Components/AppButton";

import Link from "next/link";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import useDatabase from "@/hooks/useDatabase";
import { useEffect, useState } from "react";
import { BackButton } from "@/components/BackButton";

function ProjectTransactions({ project }) {
  const { user } = useDatabase();
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTER_KEY,
    tx_ref: Date.now().toString(),
    amount: 0, // This will be set dynamically in the payment function
    currency: "NGN",
    payment_options: "card,googlepay,applepay,barter,account,mobilemoneyghana",
    customer: {
      email: user?.email ?? "johndoe@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  // Setup the Flutterwave payment handler

  // Function to trigger the payment with a specific amount
  const payment = (amount) => {
    handleFlutterPayment({
      config: { ...config, amount: amount }, // Dynamically set the amount
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {
        console.log("Payment modal closed");
      },
    });
  };

  return (
    <section className='   '>
      <section className='my-10'>
        <TransactionHistory payment={payment} project={project} />
      </section>

      <div className='flex gap-3 justify-center items-center my-6'>
        <BackButton />
        <AppButton href={"/"} title={"Pause project"} />
        <AppButton2 href={"/"} title={"Pay all"} />
      </div>
    </section>
  );
}

export default ProjectTransactions;

const TransactionHistory = ({ project, payment }) => {
  return (
    <div className='flex justify-center items-center lg:scrollbar-hide overflow-x-scroll mt-10'>
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
                {k < 9 ? `0${k + 2}` : k + 1}
              </td>
              <td className='py-6 px-6 text-center whitespace-nowrap'>
                {v.name}
              </td>
              <td className='py-6 px-6 text-center whitespace-nowrap'>
                ${v.amount}
              </td>
              <td className='py-6 px-6 text-center whitespace-nowrap'>
                ${v.contingency}
              </td>

              <td
                className={`py-6 px-6 text-center capitalize medium whitespace-nowrap ${
                  v.status.toLowerCase() == "pending"
                    ? "text-appOrange"
                    : "text-[#27AE60]"
                }`}
              >
                {v.status}
              </td>
              <td className='py-3 px-6 text-center'>
                {v.status.toLowerCase() == "pending" ? (
                  <button
                    onClick={() => {
                      payment(v.amount);
                    }}
                    className='border-binance_green active:bg-opacity-60 light text-binance_green hover:bg-binance_green hover:text-white duration-300 h text-xs text-center px-9 py-3 rounded-[50px] border'
                  >
                    Pay
                  </button>
                ) : (
                  <button
                    disabled
                    className='border-binance_green light disabled:cursor-not-allowed bg-binance_green text-white duration-300 h text-xs text-center px-9 py-3 rounded-[50px] border'
                  >
                    Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
