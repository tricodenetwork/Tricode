/* eslint-disable @next/next/no-img-element */
import SelectFile from "../customInputs/SelectFile";
import Editor from "../editor/RichTextEditor";
import { TbCameraPlus } from 'react-icons/tb';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { useState } from "react";
import countries from '../../lib/constants/countries.json'
import Image from "next/image";


function AddNew() {
    
    const [files, setFiles] = useState([]);
    const [selected, setSelectedCountry] = useState(countries[0]?.code.toLowerCase());
    const selectedCountry = (e) => {
        console.log(e.target.value)
        setSelectedCountry(e.target.value?.toLowerCase())
    }
    return (
        <section className="p-10 w-[75%] m-auto overflow-y-scroll h-full ">
            <h2 className={` capitalize  font-bold text-xl mb-2`}>Add new project</h2>
            <p className="text-gray-500 mb-2">The information in this section below will be shared with tradespeople in order to produce estimates. Please help us to protect your privacy by not including any Personally Identifiable Information (e.g. your name, email address, etc).</p>
            <h2 className={` capitalize font-bold text-xl  mb-2`}>How would you like to name your project?</h2>

            <input className={`py-3 border-b-2 border-b-gray-400 w-full mb-5`} placeholder="Type your project name" />

            <h2 className={` capitalize  font-bold text-xl mb-2`}>Describe the work required clearly so that builders can understand.</h2>

            <p className="text-gray-500 mb-2">If the style (including colors) are important please mention them explicitly to avoid confusion and unexpected costs. If you&apos;re unsure of what to write here you might find our advice on this page useful: <span className="text-green-600">Suggestions</span></p>

            <Editor />


            <h2 className={` capitalize  font-bold text-xl mt-5 mb-2`}>Please upload at least one photo, video or design of the work to be undertaken.</h2>
            <p className="text-gray-500 mb-2">For example if you are replacing a door lock please take a photo of the existing lock.</p>

            <div className="flex gap-3 items-center overflow-x-scroll my-4 py-4">
                <SelectFile name="Take Picture/ video" icon={TbCameraPlus} setFiles={setFiles} otherFiles={files} />
                <SelectFile name="Upload Files" icon={HiOutlineDocumentDuplicate} setFiles={setFiles} otherFiles={files} />
                {files.map((file, i) => (
                    <p className="ml-4 whitespace-nowrap" key={i}>{file.name}</p>
                ))}
            </div>

            <h2 className={` capitalize  font-bold text-xl mb-2`}>How do we contact you?</h2>
           
            <div className="flex gap-3 items-center  my-2">
                <div className="flex justify-center gap-4">
                    <div className="flex justify-center gap-2">
                   
                    <img
                        src={`https://flagcdn.com/16x12/${selected}.png`}
                        
                        className="w-10 rounded-full h-10"
                        alt={selected} />
                        <select onChange={selectedCountry}>
                            {countries.map((con, i) => (
                                <option key={i} value={con.code}>{con.dial_code}</option>
                            ))}
                        </select>
                        <input className="border-b-2 border-b-gray-300" type="phone"/>
                    </div>

                    <div className="flex justify-center gap-2 items-end">
                   
                    <div>Email</div>
                    <input className="border-b-2 border-b-gray-300" type="email"/>
                   </div>
                </div>

            </div>

            <div className="w-full flex justify-center my-5">
            <button className="bg-green-500 text-white rounded-full py-2 px-16 self-center">Submit Now</button>

            </div>
        </section>
    );
}

export default AddNew;
