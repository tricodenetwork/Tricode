import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import useFunctions from "@/hooks/useFunctions";
import { BackButton } from "../Button";
import { AppButton2 } from "../AppButton";

function ProjectDetails({ project }) {
  const { imageLoader } = useFunctions();

  return (
    <section className=' w-full m-auto mt-6 '>
      <div className='flex justify-between items-center '>
        <h3 className={` capitalize  w-[25vw] lg:w-[30%] text-start mb-2 `}>
          Project Manager
        </h3>
        <div className='medium text-[10px]  lg:text-xs mr-5 lg:mr-20  text-grayText '>
          <span className='text-black  text-[10px]  lg:text-xs mr-1 lg:mr-2'>
            Posted on:
          </span>{" "}
          12/01/2023, 11:30 AM
        </div>
      </div>
      <div>
        <h3 className={`text-start mb-4 text-grayText uppercase `}>
          {project?.manager}
        </h3>
        <div className=' flex lg:flex-row flex-col gap-2 lg:text-[5px] text-[#38A312]'>
          <div className='flex gap-1 text-xs  lg:text-sm items-center '>
            <BsFillTelephoneFill size={10} />
            <span className='text-xs  lg:text-sm'>+2348056047738</span>
          </div>
          <div className='flex gap-1 items-center '>
            <AiOutlineMail size={10} />
            <span className='text-xs  lg:text-sm'> lukekajola@gmail.com</span>
          </div>
        </div>
      </div>

      <section className='mt-10 mb-8'>
        <div className='mb-5'>
          <h3 className='font-bold capitalize mb-1 text-start'>Project</h3>
          <div className='text-xs medium  lg:text-sm'>
            Status:{" "}
            <span className='text-[#38A312] text-xs  lg:text-sm medium'>
              {project?.status}
            </span>
          </div>
        </div>

        <div className='flex flex-col items-start'>
          <p className=' text-grayText medium'>
            {project?.report[project?.report.length - 1]?.summary}
          </p>
          <ol className='text-grayText ml-4 medium list-decimal'>
            <li className='my-4 medium'>
              {project?.report[project?.report.length - 1]?.highlights[0]}
            </li>
            <li className='my-4 medium'>
              {project?.report[project?.report.length - 1]?.highlights[1]}
            </li>
            <li className='my-4 medium'>
              {project?.report[project?.report.length - 1]?.highlights[2]}
            </li>
          </ol>
        </div>
      </section>

      <div className='mb-4'>
        <div className='font-bold mb-2'>Photo(s) / Video(s)</div>
        <div className='flex gap-2'>
          <div className='w-[99px] h-[68px] relative'>
            <Image
              loader={imageLoader}
              alt='logo'
              fill
              quality={100}
              src='/files/photo1.png'
              className='bg-slate-600 rounded-lg'
            />
          </div>
          <div className='w-[99px] h-[68px] relative'>
            <Image
              loader={imageLoader}
              alt='logo'
              fill
              quality={100}
              src='/files/photo2.png'
              className='bg-slate-600 rounded-lg'
            />
          </div>
          <div className='w-[99px] h-[68px] relative'>
            <Image
              loader={imageLoader}
              alt='logo'
              fill
              quality={100}
              src='/files/photo3.png'
              className='bg-slate-600 rounded-lg'
            />
            <Image
              loader={imageLoader}
              alt='logo'
              width={19}
              height={19}
              quality={100}
              src='/files/photo4.png'
              className='w-[19px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[19px] rounded-lg'
            />
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <div className='font-bold'>Files(s)</div>
        <div className='flex gap-3 font-medium text-[#38A310]     '>
          <div className='flex'>
            <Image
              src={"/assets/icons/pdf.svg"}
              alt='icon'
              width={19}
              height={19}
              className='mr-1'
            />
            abc.pdf
          </div>
          <div className='flex'>
            <Image
              src={"/assets/icons/word.svg"}
              alt='icon'
              width={19}
              height={19}
              className='mr-1'
            />
            abc.doc
          </div>
          <div className='flex'>
            <Image
              src={"/assets/icons/xls.svg"}
              alt='icon'
              width={14}
              height={14}
              className='mr-1'
            />
            abc.xls
          </div>
        </div>
      </div>

      <div className='flex gap-3 justify-center items-center my-6'>
        <BackButton />
        {/* <button className='  text-white font-bold bg-[#38A312] rounded-full border px-8 py-2'>
          Download Report
        </button> */}
        <AppButton2 href={"/"} title={"Download report"} />
      </div>
    </section>
  );
}

export default ProjectDetails;
