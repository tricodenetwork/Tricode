import TalentLayout from "@/Components/layouts/TalentLayout";

import Image from "next/image";


import { BsFilePdf, BsFiletypeDocx } from "react-icons/bs";
import { FaRegFileExcel } from "react-icons/fa";
///AKE DATA
const ongoing = [
    'Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi.',
    'Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi.',
    'Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi.',
    'Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi.',
    'Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi.',
]
const done = [
    'Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi.',
    'Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi.',

]
const todo = [
    'Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi.',
    'Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi.',
    'Lorem ipsum dolor sit amet consectetur. At netus in integer nec. Ac non diam venenatis aenean nulla eu sagittis scelerisque facilisi.',

]
const Project =()=> {

return (
    <section className=" w-full md:p-8 p-4">
        <div className="flex justify-center items-start gap-4 w-full border p-4 rounded flex-col md:flex-row">
            <div className="">
            <Image
              alt='user'
              width={80}
              height={40}
              quality={100}
              className='w-[100px] h-[100px] rounded-full'
              src="/assets/images/av1.jpg"
            />
            </div>
            <div className="flex flex-col items-start">
                <h2 className=" font-bold text-2xl">John Wick</h2>
                <div className=" font-thin">@bogyman</div>
                <div className=" text-2xl">Sending People to their maker</div>
            </div>
        </div>
        <div className="flex flex-col  items-start gap-4 w-full  p-4 mt-8 bg-ash rounded">
        <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
            <h2 className=" font-bold">Project</h2>
            <p className="">AI platform</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
            <h2 className=" font-bold">Description</h2>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. at tempora corrupti molestias placeat aut veniam.</p>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4 w-full  mt-8  rounded">
            <div className=" bg-ash p-4 flex flex-col gap-4 rounded-md">
                <h3 className=" text-center font-bold text-2xl">Todo</h3>
                {todo.map((tx,i)=>(
                    <div key={i} className="p-4 rounded-md bg-white cursor-move">
                        {tx}
                    </div>
                ))}
            </div>
            <div className=" bg-ash p-4 flex flex-col gap-4 rounded-md">
                <h3 className=" text-center font-bold text-2xl">Doing/Ongoing</h3>
                {ongoing.map((tx,i)=>(
                    <div key={i} className="p-4 rounded-md bg-white  cursor-move">
                        {tx}
                    </div>
                ))}
            </div>
            <div className=" bg-ash p-4 flex flex-col gap-4 rounded-md">
                <h3 className=" text-center font-bold text-2xl">Done</h3>
                {done.map((tx,i)=>(
                    <div key={i} className="p-4 rounded-md bg-white  cursor-move">
                        {tx}
                    </div>
                ))}
            </div>
        </div>

        <section className=" mt-10 pt-10">
            <h1 className="border-b w-full  text-binance_green font-bold text-xl ">Project Manager Feedback</h1>

            <section className="my-6 ">
                <div className="flex justify-between items-end ">
                    <h2 className="font-bold">Project Manager</h2>
                    <div className="flex gap-4 items-end">
                        <div className=" font-bold">Posted on:</div>
                        <span> 12/01/2023,  11:30 AM</span>

                    </div>
                </div>
                <div className="font-bold text-gray-600 text-xl my-4">Luke Kajola</div>
                <div>
                    <span className="font-bold">Status: </span>
                    <span className=" text-binance_green">Project ongoing</span>
                </div>

                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <ol className=" list-decimal p-4 flex flex-col gap-4 my-6" >
                <li >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </li>
                <li>sit aliqua dolor do amet sint. </li>
                <li>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
                </ol>

                <div>
                    <h2 className=" font-semibold my-4">Photo(s)/Video(s)</h2>
                    <div className="flex gap-3">
                        <div className="w-[150px] h-[80px] bg-gray-200 rounded-md"></div>
                        <div className="w-[150px] h-[80px] bg-gray-200 rounded-md"></div>
                        <div className="w-[150px] h-[80px] bg-gray-200 rounded-md"></div>
                    </div>
                </div>
                <div>
                    <h2 className=" font-semibold my-4">Files(s)</h2>
                   <div className="flex justify-between">
                   <div className="flex gap-3 text-binance_green">
                        <div className="flex gap-2 items-center"><BsFilePdf/><span>abc.pdf</span></div>
                        <div className="flex gap-2 items-center"><BsFiletypeDocx/><span>xyz.doc</span></div>
                        <div className="flex gap-2 items-center"><FaRegFileExcel/><span>pqr.xls</span></div>
                    </div>

                    <button className=" w-fit bg-binance_green text-white p-2 rounded-full px-6">Download report</button>
                   </div>

                </div>
            </section>

            <section  className="flex flex-col gap-4">
            <h1 className="border-b w-full  text-binance_green font-bold text-xl ">Your Feedback</h1>
            <h3>Give your feedback on any task to your project manager</h3>
            <textarea className=" outline-none h-[150px] border  p-4"/>
                <div className="w-full flex gap-4 justify-center"><button className=" w-fit border-binance_green border text-binance_green p-2 rounded-full">Cancel</button><button className=" w-fit bg-binance_green text-white p-2 rounded-full px-6">Download report</button></div>
            </section>

                

        </section>

        <section className=" mt-10 pt-10">
            <h1 className="border-b w-full  text-binance_green font-bold text-xl py-6">New project alert</h1>

            <section className="my-6 ">
                <div className="flex justify-between items-end ">
                    <h2 className="font-bold">Project Manager</h2>
                    <div className="flex gap-4 items-end">
                        <div className=" font-bold">Posted on:</div>
                        <span> 12/01/2023,  11:30 AM</span>
                    </div>
                </div>
                <div className="font-bold text-gray-400 text-xl my-4">Luke Kajola</div>
                <p>  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </section>

            <div>
             

             <section className=" overflow-x-scroll">
               <table >
               <thead className=" font-bold " >
                   <tr>
                   <td className="p-3 mx-3">S/N</td>
                    <td className=" whitespace-nowrap p-3 mx-3">Project Name</td>
                    <td className="p-3 mx-3">Date</td>
                    <td className="p-3 mx-3">Discription</td>
                    <td className="p-3 mx-3">Status</td>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-3 mx-3"> 1</td>
                        <td className="p-3 mx-3 border-b">Project Name</td>
                        <td className="p-3 mx-3 border-b">Date</td>
                        <td className="  p-2 mx-3 border-b">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco</td>
                        <td className="p-3 mx-3 border-b"><button className=" text-white bg-binance_green rounded-full px-4 py-2 whitespace-nowrap">View project</button></td>
                    </tr>
                    <tr>
                        <td className="p-3 mx-3"> 1</td>
                        <td className="p-3 mx-3 border-b">Project Name</td>
                        <td className="p-3 mx-3 border-b">Date</td>
                        <td className=" min-w-[200px] p-2 mx-3 border-b">Amet minim serunt ullamco</td>
                        <td className="p-3 mx-3 border-b"><button className=" text-white bg-binance_green rounded-full px-4 py-2 whitespace-nowrap">View project</button></td>
                    </tr>
                    <tr>
                        <td className="p-3 mx-3"> 1</td>
                        <td className="p-3 mx-3 border-b">Project Name</td>
                        <td className="p-3 mx-3 border-b">Date</td>
                        <td className=" min-w-[200px] p-2 mx-3 border-b">Amet minim mollit non  ullamco</td>
                        <td className="p-3 mx-3 border-b"><button className=" text-white bg-binance_green rounded-full px-4 py-2 whitespace-nowrap">View project</button></td>
                    </tr>
                  
                </tbody>
               </table>
                </section>
                

            </div>
           

                

        </section>


    </section>
  );
}
Project.getLayout = function getLayout(page) {
  return <TalentLayout>{page}</TalentLayout>;
};
export default Project;
