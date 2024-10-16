const semiBold = { fontSize: 24, fontFamily: "Poppins-SemiBold" };
const Bold = { fontSize: 12, fontFamily: "Poppins" };
const Regular = {
  fontSize: 16,
  fontFamily: "Poppins-Light",
};

const ProfileCard = () => {
  return (
    <div className=' w-[95%] lg:w-[90%] h-[150px]  py-5 px-3 flex items-center justify-around rounded-lg bg-binance_green'>
      <div
        style={semiBold}
        className=' w-[80px] h-[80px] lg:w-[104px] text-white text-sm lg:text-base flex items-center justify-center lg:h-[104px] rounded-full border-[3px] border-white bg-white bg-opacity-10'
      >
        85%
      </div>
      <div className='flex flex-col items-start  justify-center'>
        <div>
          <h6 className='text-white semiBold mb-1 text-lg lg:text-2xl '>
            Profile Information
          </h6>
          <p className='relative regular text-sm lg:text-base bottom-1 text-white'>
            Lorem, ipsum dolor sit amet
          </p>
        </div>
        <button
          style={Bold}
          className='py-2 px-2 duration-200 mt-2 hover:scale-105  bg-white text-[#999999] rounded-md'
        >
          Complete your profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
