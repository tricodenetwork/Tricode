import useDatabase from "@/hooks/useDatabase";
import InputWithHeader from "../customInputs/InputWithHeader";
import SmallButton from "../customInputs/SmallButton";
const semiBold = { fontSize: 24, fontFamily: "Poppins-SemiBold" };
const Bold = { fontSize: 12, fontFamily: "Poppins" };
const Regular = {
  fontSize: 16,
  fontFamily: "Poppins-Light",
};

const User = () => {
  const { user } = useDatabase();
  return (
    <div className='flex-1 bg-[#f2f2f2] h-max w-[95%] self-center py-5 lg:py-10  flex justify-center  rounded-md mr-5 pl-5 lg:pl-10 '>
      <div className=' w-full lg:w-[70%] h-full'>
        <div className='h-[70px] flex-col flex justify-around mb-2'>
          <h6 className='text-black semiBold text-lg lg:text-2xl'>
            User Management
          </h6>
          <p className='text-black semiBold text-base lg:text-xl'>Profile</p>
        </div>
        <div className='border-b  pb-4 flex flex-col justify-between w-[100%] border-black'>
          <InputWithHeader
            header={"Full Name"}
            placeholder={"John Okafor Cena"}
            value={user?.name}
          />
          {/* <InputWithHeader header={"Surname"} placeholder={"Cena"} /> */}
          <InputWithHeader
            header={"Email address"}
            placeholder={"johncena@gmail.com"}
            value={user?.email}
          />
          <div className='flex mt-5'>
            <SmallButton
              Action={"Cancel"}
              styles={
                "border-2 border-binance_green mr-4 hover:scale-105 duration-200  w-[110px] text-binance_green"
              }
            />
            <SmallButton
              Action={"Save"}
              styles={
                "border-2 border-binance_green hover:bg-binance_ash duration-200 bg-binance_green w-[110px] text-white"
              }
            />
          </div>
        </div>
        <div className='border-b border-opacity-20 border-black pb-5 my-6 w-[100%]'>
          <SmallButton
            Action={"Update Password"}
            styles={
              "w-[200px] bg-binance_green text-white border-2 border-binance_green"
            }
          />
        </div>
        <div className='mt-10 pt-5 relative'>
          <p
            style={{ fontSize: 18, fontFamily: "Poppins-SemiBold" }}
            className='text-black'
          >
            Deactivate
          </p>
          <p
            style={{ fontSize: 16, fontFamily: "Poppins-Light" }}
            className='text-ash2'
          >
            If you no longer want to recieve emails
          </p>
          <SmallButton
            Action={"Deactivate"}
            styles={
              "w-[140px] lg:w-[180px] absolute right-1  top-0 bg-binance_green text-white border-2 border-binance_green"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default User;
