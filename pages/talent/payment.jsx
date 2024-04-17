import TalentLayout from "@/Components/layouts/TalentLayout";
import { IoMdAdd } from "react-icons/io";
import { RiEqualFill } from "react-icons/ri";
const Payments = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='w-[80%] m-auto'>
        <div className="flex text-binance_green h-[193px] justify-between  border-2 w-full items-center px-16">
          <div className="flex gap-4 items-end">
          <div>
                <small>Total Payment</small>
                <h2 className="text-[48px] leading-[1]">£6,500</h2>
            </div>
            <span  ><IoMdAdd className="text-[48px]"/></span>
            <div>
             <small>Total Payment</small>
             <h2 className="text-[48px] leading-[1]">£6,500</h2>
            </div>
            <span  ><RiEqualFill className="text-[48px]"/></span>
          </div>
           
            <div>
             <small>Total Payment</small>
             <h2 className="text-[48px] leading-[1]">£6,500</h2>
            </div>
        </div>
        <div className="flex justify-between items-start my-6">
                <div className=" font-bold text-binance_green">Details</div>
                <div className=" text-ash flex gap-1 font-bold">Chat <span className=" bg-binance_green text-white rounded-full p-1 w-[24px] h-[24px] grid place-content-center">2</span></div>
        </div>
        <div>
        <table className="w-full" >
               <thead className=" font-bold " >
                   <tr>
                   <td className="p-3 mx-3">S/N</td>
                    <td className=" whitespace-nowrap p-3 mx-3">Project Name</td>
                    <td className="p-3 mx-3">Amount</td>
                    <td className="p-3 mx-3">Duration</td>
                    <td className="p-3 mx-3">Payment Status</td>
                    <td className="p-3 mx-3">Outstanding</td>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-3 mx-3"> 1</td>
                        <td className="p-3 mx-3 border-b">A11</td>
                        <td className="p-3 mx-3 border-b">£2000</td>
                        <td className="  p-2 mx-3 border-b">10 hours</td>
                        <td className="p-3 mx-3 border-b text-binance_green">Completed</td>
                        <td className="p-3 mx-3 border-b">£0</td>
                    </tr>
                    <tr>
                        <td className="p-3 mx-3"> 1</td>
                        <td className="p-3 mx-3 border-b">A11</td>
                        <td className="p-3 mx-3 border-b">£2000</td>
                        <td className="  p-2 mx-3 border-b">10 hours</td>
                        <td className="p-3 mx-3 border-b text-binance_green">Completed</td>
                        <td className="p-3 mx-3 border-b">£1000</td>
                    </tr>
                    <tr>
                        <td className="p-3 mx-3"> 1</td>
                        <td className="p-3 mx-3 border-b">A11</td>
                        <td className="p-3 mx-3 border-b">£2000</td>
                        <td className="  p-2 mx-3 border-b">10 hours</td>
                        <td className="p-3 mx-3 border-b text-ash">Paused</td>
                        <td className="p-3 mx-3 border-b">£500</td>
                    </tr>
                    <tr>
                        <td className="p-3 mx-3"> 1</td>
                        <td className="p-3 mx-3 border-b">A11</td>
                        <td className="p-3 mx-3 border-b">£2000</td>
                        <td className="  p-2 mx-3 border-b">10 hours</td>
                        <td className="p-3 mx-3 border-b text-midorange">Pending</td>
                        <td className="p-3 mx-3 border-b">£2000</td>
                    </tr>
                </tbody>
               </table>

               <div className="flex my-10 justify-center items-start gap-3">
                 <div className="flex gap-8 items-center">
                    <span className=" font-bold">Total</span>
                    <span className=" text-binance_green">£10,000</span>
                 </div>
                 <span className="w-[400px] border-b border-black  border-dotted h-4"></span>
                 <span>£3500</span>
               </div>
        </div>

    </div>
  );
};
Payments.getLayout = function getLayout(page) {
    return <TalentLayout>{page}</TalentLayout>;
  };

export default Payments;
