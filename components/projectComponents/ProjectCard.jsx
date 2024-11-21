import { talents } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Status from "../Status";
import TeamMembers from "../TeamMembers";
import { getStatusClasses, getStatusClassesHex } from "@/lib/utils/helper";
import HourGlass from "../svg/HourGlass";

const ProjectCard = ({ project }) => {
  const statusColor = getStatusClasses(project?.status);
  const statusColorHex = getStatusClassesHex(project?.status);
  return (
    <div className=' w-[450px] xxl:w-[506px] h-max  shadow-[0px_4px_4px] shadow-black/30  rounded-[15px] p-[2.5%] flex flex-col '>
      {/* Title */}
      <div className='border-b border-black pb-[1.5vh] w-full flex justify-between'>
        <div className='flex gap-[.5vw] items-center'>
          <h2 className='font-bold capitalize text-xl xxl:text-[25px] leading-normal text-[#1b1b1b]'>
            {project?.name}
          </h2>
          <Image
            src={"/assets/icons/edit2.svg"}
            alt='edit'
            width={25}
            height={24.28}
          />
        </div>
        {project && <Status item={project} />}
      </div>
      {/* Description */}
      <p className='text-black font-medium h-[84px] overflow-hidden text-[13px] leading-snug mt-[4%]'>
        {project?.description.length > 400
          ? project?.description.slice(0, 280).concat("...")
          : project?.description.length > 20
          ? project?.description
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quas excepturi dolorum aliquam ad dolor consequatur, omnis illo laudantium praesentium repudiandae vero sapiente eum modi, dolore eos ut dolores voluptatibus?"}
      </p>
      {/* Details */}
      <div className='w-full mt-[4%] flex items-center justify-between'>
        <div className='flex items-center gap-[.5vw]'>
          <HourGlass color={statusColorHex} />

          <p
            style={{ backgroundColor: "transparent" }}
            className={`font-medium text-sm ${statusColor} bg-transparent uppercase`}
          >
            08 APRIL 2024
          </p>
        </div>
        <div className='flex items-center gap-[.5vw]'>
          <Image
            src={"/assets/icons/folder.svg"}
            width={19.89}
            height={20.32}
            alt='folder'
          />
          <p className='font-medium text-sm text-grayText'>5 Milestones</p>
        </div>
      </div>
      {/* Talents */}
      <div className='mt-[4%] w-full'>
        <TeamMembers team={project?.team} />
      </div>
      {/* View Project */}
      <Link
        href={`/project/${project?._id}`}
        className='border-b cursor-pointer hover:text-binance_green/80 hover:border-binance_green mt-[4%] border-black pb-1 text-grayText font-medium text-sm w-max '
      >
        View Project
      </Link>
    </div>
  );
};

export default ProjectCard;
