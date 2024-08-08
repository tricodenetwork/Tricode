import { BackButton } from "@/Components/Button";
import AppButton, { AppButton2 } from "@/Components/AppButton";

import Link from "next/link";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import useDatabase from "@/hooks/useDatabase";

function ProjectTransactions({ project }) {
  const { user } = useDatabase();
  const config = {
    public_key: "FLWPUBK_TEST-fae61d03498ae9059ded435a0eb17bf3-X",
    tx_ref: Date.now(),
    amount: "500",
    currency: "USD",
    payment_options: "card,googlepay,applepay,barter,account",
    customer: {
      email: user?.email ?? "johndoe@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "Milestone Payment",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
  const payment = () => {
    console.log("key", process.env.NEXT_PUBLIC_FLUTTER_KEY);
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {
        console.log("Closed");
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
                className={`py-6 px-6 text-center capitalize   medium whitespace-nowrap ${
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
                    onClick={() => payment()}
                    className='  border-binance_green active:bg-opacity-60 light text-binance_green hover:bg-binance_green hover:text-white duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
                  >
                    Pay
                  </button>
                ) : (
                  <button
                    disabled
                    className='  border-binance_green light disabled:cursor-not-allowed bg-binance_green text-white duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
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
