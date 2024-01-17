function TinyCircle() {
  return (
    <div
      style={{
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        backgroundColor: "#B7AFAF", // or any color you prefer
      }}
    ></div>
  );
}

function Circle(props) {
  const { size = "10px", color = "blue" } = props;

  return (
    <div
      className='rounded-full'
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    ></div>
  );
}
function DottedLineSVG() {
  return (
    <svg
      width='2'
      style={{ marginTop: 2, marginBottom: 2 }}
      height='70'
      xmlns='http://www.w3.org/2000/svg'
    >
      <line
        x1='1'
        y1='0'
        x2='1'
        y2='50'
        stroke='#706E6E'
        strokeWidth='1'
        strokeDasharray='3,5' // this creates the dotted pattern
      />
    </svg>
  );
}
const NotifyItem = ({ notificationType, time, bod, Icon }) => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  return (
    <div className='w-[95%] mb-6'>
      <div className='flex items-center'>
        <div>{Icon && <Icon />}</div>
        <div className='medium ml-4 w-full relative text-[#B7AFAF] space-x-2 flex items-center'>
          <p style={{ fontSize: 14 }}>{notificationType}</p>
          <Circle size={"3px"} color={"#B7AFAF"} />
          <p style={{ fontSize: 12 }}>{time}</p>
          <div className='absolute right-0'>
            <Circle size={"14px"} color={"#FF8282"} />
          </div>
        </div>
      </div>
      <div className='flex items-start mt-1'>
        <div className='flex mr-3 flex-col max-w-max items-center justify-between'>
          <Circle size={"4px"} color='#706E6E' />
          <DottedLineSVG />
          <Circle size={"4px"} color='#706E6E' />
        </div>
        {bod}
      </div>
    </div>
  );
};
export default NotifyItem;
