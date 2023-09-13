
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import useFunctions from "@/hooks/useFunctions";
import {useRouter} from 'next/router'
import { BackButton } from "../Button";


function ProjectDetails() {
    const { imageLoader } = useFunctions();
   

    return (
        <section className=" w-full m-auto overflow-y-scroll h-full  mt-6">
            <div className="flex justify-between">
                <h2 className={` capitalize  font-bold text-xl mb-2 `}>Project Manager</h2>
                <div className=" "><span className="font-bold">Posted on:</span> 12/01/2023,  11:30 AM</div>
            </div>
            <div>
                <h2 className={` font-bold text-xl mb-2 text-gray-600 uppercase `}>Luke Kajola</h2>
                <div className=" flex gap-2 text-[#38A312]">
                    <div className="flex gap-2 items-center "><BsFillTelephoneFill /><span>+23444444444</span></div>
                    <div className="flex gap-2 items-center "><AiOutlineMail /><span> lukekajola@gmail.com</span></div>
                </div>
            </div>

            <section className="my-10">
                <div className="mb-5">
                    <h3 className="text-xl font-bold capitalize text-start">Project</h3>
                    <div>Status: <span className="text-[#38A312]">Project completed</span></div>
                </div>

                <div>
                    <p>
                        Amet minim mollit non deserunt ullamco
                        est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet
                    </p>
                    <ul >
                            <li className="my-4"><span>1. </span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </li>
                            <li className="my-4"><span>2. </span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </li>
                            <li className="my-4"><span>3. </span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </li>
                        </ul>
                </div>
            </section>


            <div className="my-4">
                <div className="font-bold">Photo(s)/Video(s)</div>
                <div className="flex gap-2">
                    <Image
                        loader={imageLoader}
                        alt='logo'
                        width={100}
                        height={100}
                        quality={100}
                        src='/assets/images/logo.png'
                        className="bg-slate-600 rounded-lg"
                    />

                    <Image
                        loader={imageLoader}
                        alt='logo'
                        width={100}
                        height={100}
                        quality={100}
                        src='/assets/images/logo.png'
                        className="bg-slate-600 rounded-lg"
                    />
                    <Image
                        loader={imageLoader}
                        alt='logo'
                        width={100}
                        height={100}
                        quality={100}
                        src='/assets/images/logo.png'
                        className="bg-slate-600 rounded-lg"
                    />
                </div>
            </div>



            <div className="my-4">
                <div className="font-bold">Files(s)</div>
                <div className="flex gap-3 font-bold text-[#38A310]     ">
                    <div>abc.pdf</div>
                    <div>abc.doc</div>
                    <div>abc.xls</div>

                </div>
            </div>

            <div className="flex gap-3 justify-center items-center my-6">
                <BackButton/>
                <button className="  text-white font-bold bg-[#38A312] rounded-full border px-8 py-2">Download Report</button>
            </div>
        </section>
    );
}


export default ProjectDetails;