import MenuLayout from "@/Components/layouts/MenuLayout";
import FilterComponent from "@/components/customInputs/FilterComponent";
import SearchComponent from "@/components/editor/SearchComponent";

const TeamCard = ({ title, src }) => {
  return (
    <div className='w-[217px] flex flex-col items-center h-[221px] relative'>
      <h6 className='regular mb-4 text-[16px] text-[#131418]'>{title}</h6>
      <div className='w-[90%] h-[140px] flex justify-center items-center rounded-[20px] shadow-md shadow-slate-400'>
        <img
          className='w-[88px] mx-auto mt-4 self-center h-[88px]'
          src={src}
          alt='team-member'
        />
      </div>
      <button className='w-[129px] mt-8 medium text-[12px] self-center border border-binance_green text-binance_green h-[33px] rounded-3xl'>
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
    <div className='h-full w-full flex flex-col  justify-start items-start'>
      <div className='flex mx-7 mt-8 justify-between w-[90%]'>
        <div className='w-[40%]'>
          <SearchComponent />
        </div>
        <div className='flex mr-10  items-center'>
          <p className='regular text-[#131418] mr-6 text-[12px]'>
            16 Result(s) Found
          </p>
          <p className='regular text-[#131418] mr-2 text-[14px]'>Filter By</p>
          <FilterComponent
            placeholder={"Latest"}
            items={["Latest", "Highest", "Level"]}
          />
        </div>
      </div>
      <section className='w-[996px] mt-8 overflow-y-scroll scrollbar-hide h-[621px] border-[#EFEFEF] border-[0.5px] rounded-3xl self-center'>
        <h6 className='semiBold text-[24px] my-4 text-[#2b2b2b] text-center w-full'>
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
