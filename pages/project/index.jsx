import Loader from "@/components/Loader";
import SearchComponent from "@/components/editor/SearchComponent";
import MenuLayout from "@/components/layouts/MenuLayout";
import ProjectCard from "@/components/projectComponents/ProjectCard";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
const Project = () => {
  // --------------------------------------------VARIABLES
  const [search, setSearch] = useState("");
  const { projects } = useSelector((state) => state.projects);

  //-----------------------------------------------------------FUNCTIONS

  //------------------------------------------------------------------USE EFFECTS

  if (!projects) {
    return <Loader />;
  }

  return (
    <div className='min-h-[91vh] h-auto px-[5%]   pb-[25vh]  py-10 w-full flex flex-col'>
      <div className='flex justify-between   w-[1046px] mx-auto items-end'>
        <SearchComponent setSearch={setSearch} />
        <Link
          href={"/project/add"}
          className='medium text-xs w-[17%] py-[2vh] justify-center rounded-full hover:translate-x-2 bg-binance_green text-white flex gap-3  duration-100 hover:scale-105  items-center'
        >
          <PlusIcon fontSize={32} /> Create Project
        </Link>
      </div>
      <div className='w-[1046px] mx-auto mt-[2%]    flex-wrap  h-full  gap-x-[30px] gap-y-[30px] flex'>
        {projects
          .filter(
            (item) =>
              item?.name?.toLowerCase()?.includes(search.toLowerCase()) ?? true
          )
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
