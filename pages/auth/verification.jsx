import Sidebar from "@/Components/layouts/Sidebar";
import Link from "next/link";
import Button from "@/Components/Button";
import OTPInput from "@/Components/OTPInput";

const Index = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <>
      <div className='flex min-h-screen  items-center'>
        <Sidebar Header="Welcome Back" />
        <div className='bg-midorang mx-auto login min-h-max flex flex-col px-3 justify-center items-center'>
          <h3>SMS Verification</h3>
          <div className="mt-5">
            <div className="w-[90%] md:w-[424px] member mb-2 text-lg">A text message with a six digit verification code has been sent to your phone number ending in X  X  X  X  X  X 6 0 9 7</div>
            <OTPInput length={6} onChange={(value, index) => console.log(`Digit ${index + 1}: ${value}`)} />
            <div className="text-binance_green mt-3 text-sm md:text-xl font-semibold">Send another code</div>
            <div className='w-full mt-4'>
              <Link className='w-full mt-4' href='/auth/new-password'>
                <Button styles={"w-[60%] md:w-full mx-auto"} Action={"Continue"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
