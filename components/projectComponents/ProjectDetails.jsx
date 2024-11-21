import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import useFunctions from "@/hooks/useFunctions";
import BackButton from "../Button";
import { AppButton2 } from "../AppButton";
import { getStatusClass } from "@/lib/utils/helper";

export const ProjectDetails = ({ project }) => {
  const { imageLoader } = useFunctions();

  return (
    <section className=' w-full m-auto mt-[60px] '>
      <h3 className='w-full py-2 border-b border-[#e0e0e0] text-binance_green mb-[40px]'>
        Project Manager Feedback
      </h3>
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
        <h3 className={`text-start text-lg mb-5 mt-3 text-grayText uppercase `}>
          {project?.manager}
        </h3>
        <div className='flex items-center'>
          <span className='text-appBlue medium text-sm'>Status : </span>{" "}
          <span className={`${getStatusClass(project)} medium text-sm ml-1`}>
            {project?.report &&
              project?.report[project?.report?.length - 1]?.status}
          </span>
        </div>
      </div>

      <section className='mt-10 mb-8'>
        {project?.report ? (
          <div className='flex flex-col items-start'>
            <p className=' text-grayText medium'>
              {project?.report &&
                project?.report[project?.report?.length - 1]?.summary}
            </p>
            <ol className='text-grayText ml-4 medium list-decimal'>
              {project.report[project.report.length - 1]?.highlights.map(
                (item, index) => {
                  return (
                    <li key={index.toString()} className='my-4 medium'>
                      {item}
                    </li>
                  );
                }
              )}
            </ol>
          </div>
        ) : null}
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
};
