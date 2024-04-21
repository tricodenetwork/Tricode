
import TalentLayout from "@/Components/layouts/TalentLayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";


function Teams() {
  const [search, setSearch] = useState('');

  return (
    <section className=" p-6 w-full">
    <div className="flex justify-between items-center w-full">
      <div className=" flex gap-3">
        <div className="border-b flex items-center bg-ash px-4 rounded">
            <button className=" font-bold text-2xl"><CiSearch/></button>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Find someone" className=" outline-none p-2 bg-transparent"/>
        </div>
        <label className="border-b flex items-center bg-ash px-4 rounded">
            <input type="date" value={search} onChange={(e)=>setSearch(e.target.value)}  className=" outline-none p-2 bg-transparent "/>
        </label>
      </div>
      <div className="flex gap-8">
        <div>16 Result(s) Found</div>
        <div> 
          <span>Filter By</span>
          <select className=" text-binance_green outline-none">
            <option>Latest</option>
          </select>
          </div>
      </div>
    </div>

    <section className="w-[90%] m-auto my-4">
      <h1 className=" font-bold text-center">FinTechXperience</h1>

      <div className="md:p-10 flex flex-wrap gap-4">
          {
            [1,1,1,1,1,1,1,1].map((e,i)=>(
              <div key={e+i} className="flex flex-col gap-4 items-center">
                <div className=" text-center">Project Manager</div>
                <div className=" w-[217px] h-[146px] grid place-content-center shadow-md rounded-lg">
                <Image
                    alt='avatar'
                    width={80}
                    height={40}
                    quality={100}
                    className='w-[50px] h-[50px] rounded-full '
                    src="/assets/images/av3.jpg"
                    />
                </div>
                <Link href={'/'} className=" px-8 py-1 border border-binance_green text-binance_green rounded-full m-auto">
                View Profile
                </Link>
              </div>

            ))
          }
      </div>
    </section>
    </section>
  );
}


Teams.getLayout = function getLayout(page) {
    return <TalentLayout>{page}</TalentLayout>;
  };
export default Teams;