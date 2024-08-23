import MenuLayout from "@/Components/layouts/MenuLayout";
import FilterComponent from "@/Components/customInputs/FilterComponent";
import SearchComponent from "@/Components/editor/SearchComponent";
import Image from "next/image";

const TeamCard = ({ title, src }) => {
  return (
    <div className='w-[217px] flex flex-col items-center h-[221px] relative'>
      <h6 className='regular mb-4 text-[16px] text-[#131418]'>{title}</h6>
      <div className='w-[90%] h-[140px] flex justify-center items-center rounded-[20px] shadow-md shadow-slate-400'>
        <Image
          width={88}
          height={88}
          className='mx-auto mt-4 self-center '
          src={src}
          alt='team-member'
        />
      </div>
      <button className='w-[129px] mt-5 hover:bg-binance_green duration-300 hover:text-white medium text-[12px] self-center border border-binance_green text-binance_green h-[33px] rounded-3xl'>
        View Profile
      </button>
    </div>
  );
};

const members = [
  { title: "Project Manager", src: "/assets/images/team.png" },
  { title: "Researcher", src: "/assets/images/team.png" },
  { title: "Marketer", src: "/assets/images/team.png" },
  { title: "Front-end Dev", src: "/assets/images/team.png" },
  { title: "UI/UX Designer", src: "/assets/images/team.png" },
  { title: "Researcher", src: "/assets/images/team.png" },
  { title: "Marketer", src: "/assets/images/team.png" },
  { title: "Front-end Dev", src: "/assets/images/team.png" },
  { title: "Project Manager", src: "/assets/images/team.png" },
  { title: "Researcher", src: "/assets/images/team.png" },
  { title: "Marketer", src: "/assets/images/team.png" },
  { title: "Front-end Dev", src: "/assets/images/team.png" },
  { title: "UI/UX Designer", src: "/assets/images/team.png" },
  { title: "Researcher", src: "/assets/images/team.png" },
  { title: "Marketer", src: "/assets/images/team.png" },
  { title: "Front-end Dev", src: "/assets/images/team.png" },
];

const Teams = () => {
  // --------------------------------------------VARIABLES

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS
  return (
    <div className='h-max p-5  lg:p-10 w-full flex flex-col'>
      <div className='flex lg:mx-7 mt-8 justify-between w-[90%]'>
        <div className=' w-[60%] lg:w-[40%]'>
          <SearchComponent />
        </div>
        <div className='flex mr-10  items-center'>
          <p className='regular hidden lg:flex text-[#131418] mr-6 text-[12px]'>
            16 Result(s) Found
          </p>
          <p className='regular text-[#131418] mr-2 text-xs lg:text-[14px]'>
            Filter By
          </p>
          <FilterComponent
            placeholder={"Latest"}
            items={["Latest", "Highest", "Level"]}
          />
        </div>
      </div>
      <section className=' w-full lg:w-[996px] mt-8   py-4  scrollbar-hide h-max border-[#EFEFEF] border-[0.5px] rounded-3xl self-center'>
        <h6 className='semiBold text-lg lg:text-[24px] mb-3 text-[#2b2b2b] text-center w-full'>
          FinTechXperience
        </h6>
        <div className='w-full flex flex-wrap gap-3 justify-center'>
          {members.map((member, i) => {
            return (
              <TeamCard
                key={i.toString()}
                title={member.title}
                src={member.src}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
Teams.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Teams;
