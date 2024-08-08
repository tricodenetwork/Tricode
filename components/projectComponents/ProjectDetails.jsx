import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import useFunctions from "@/hooks/useFunctions";
import { BackButton } from "../Button";
import { AppButton2 } from "../AppButton";
import Link from "next/link";
// import html2pdf from "html2pdf.js";
import { useRef } from "react";
import { usePDF } from "react-to-pdf";

function ProjectDetails({ project }) {
  const { imageLoader } = useFunctions();
  const reportRef = useRef();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const handleDownload = () => {
    const element = reportRef.current;
    const options = {
      margin: 1,
      filename: "project_report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // html2pdf().from(element).set(options).save();
  };

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
      {project?.report ? (
        <div ref={reportRef}>
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

            {project?.report && (
              <div className='flex flex-col items-start'>
                <p className=' text-grayText medium'>
                  {project?.report &&
                    project?.report[project?.report?.length - 1]?.summary}
                </p>
                {project?.report[project?.report.length - 1]?.highlights && (
                  <ol className='text-grayText ml-4 medium list-decimal'>
                    {project?.report[
                      project?.report.length - 1
                    ]?.highlights.map((highlight, index) => (
                      <li key={index} className='my-4 medium'>
                        {highlight}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            )}
          </section>

          <div className='mb-4'>
            <div className='font-bold mb-2'>Photo(s) / Video(s)</div>
            <div className='flex gap-2'>
              {[
                "/files/photo1.png",
                "/files/photo2.png",
                "/files/photo3.png",
              ].map((src, index) => (
                <div key={index} className='w-[99px] h-[68px] relative'>
                  <Image
                    loader={imageLoader}
                    alt={`photo${index + 1}`}
                    fill
                    quality={100}
                    src={src}
                    className='bg-slate-600 rounded-lg'
                  />
                </div>
              ))}
              <div className='w-[99px] h-[68px] relative'>
                <Image
                  loader={imageLoader}
                  alt='photo4'
                  fill
                  quality={100}
                  src='/files/photo4.png'
                  className='bg-slate-600 rounded-lg'
                />
                <Image
                  loader={imageLoader}
                  alt='overlay'
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
            <div className='flex gap-3 font-medium text-[#38A310]'>
              {[
                {
                  src: "/assets/icons/pdf.svg",
                  name: "abc.pdf",
                  width: 19,
                  height: 19,
                },
                {
                  src: "/assets/icons/word.svg",
                  name: "abc.doc",
                  width: 19,
                  height: 19,
                },
                {
                  src: "/assets/icons/xls.svg",
                  name: "abc.xls",
                  width: 14,
                  height: 14,
                },
              ].map((file, index) => (
                <div key={index} className='flex items-center'>
                  <Image
                    src={file.src}
                    alt='icon'
                    width={file.width}
                    height={file.height}
                    className='mr-1 object-cover'
                  />
                  {file.name}
                </div>
              ))}
            </div>
          </div>
          <div className='mt-10'>
            <div className='font-bold'>Link(s)</div>
            <Link
              href={"https://figma.com/ovdizzle"}
              className={"text-binance_green mt-1 font-medium"}
            >
              https://figma.com/ovdizzle
            </Link>
          </div>
        </div>
      ) : (
        <div className='text-binance_green w-full h-[200px] flex items-center justify-center'>
          No Report Yet
        </div>
      )}

      <div className='flex gap-3 justify-center items-center my-6'>
        <BackButton />
        {project?.report && (
          <button
            className='  border-binance_green regular text-binance_white bg-binance_green hover:bg-white hover:text-binance_green duration-300 h text-xs  text-center px-9 py-3 rounded-[50px]   border'
            onClick={handleDownload}
          >
            Download report
          </button>
        )}
      </div>
    </section>
  );
}

export default ProjectDetails;
