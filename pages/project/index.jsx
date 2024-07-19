import MenuLayout from "@/components/layouts/MenuLayout";
import ProjectTable from "@/components/projectComponents/projectTables/ProjecctTable";
import Loader from "@/components/Loader";
import SearchComponent from "@/components/editor/SearchComponent";
import ProjectCard from "@/components/projectComponents/ProjectCard";
import useDatabase from "@/hooks/useDatabase";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
const Project = () => {
  // --------------------------------------------VARIABLES
  const { projects, convertObjectIdToDate } = useDatabase();
  const [search, setSearch] = useState("");
  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  if (!projects) {
    return <Loader />;
  }

  return (
    <div className='min-h-[91vh] h-auto px-[7%] bg-[#F9F9F9] pb-[25vh]  py-10 w-full flex flex-col'>
      <div className='flex justify-between items-end'>
        <SearchComponent setSearch={setSearch} />
        <Link
          href={"/project/add"}
          className='medium text-xs w-[17%] py-[2vh] justify-center rounded-full hover:bg-appOrange bg-binance_green text-white flex gap-3  hover:text-grayText duration-100 hover:scale-110  items-center'
        >
          <PlusIcon fontSize={32} /> Create Project
        </Link>
      </div>
      <div className='w-full mt-[2%] flex-wrap h-full  justify-start gap-[5%] flex'>
        {projects
          .filter((item) => item?.name?.toLowerCase()?.includes(search) ?? true)
          .map((project, i) => {
            return <ProjectCard key={i.toString()} project={project} />;
          })}
      </div>
    </div>
  );
};

Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};
export default Project;
