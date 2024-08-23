import TalentLayout from "@/chest/layouts/TalentLayout";

import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoMdCamera, IoIosSend } from "react-icons/io";
import { LuPaperclip } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";
import Link from "next/link";

const Chat = () => {
  const [search, setSearch] = useState("");
  const [chat, setChat] = useState("");
  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(blob);

        //FOR FEED BACK TO LISTEN TO THE RECORDED AUDIO
        // recordedAudio.src = audioUrl;
      };

      mediaRecorder.start();
      startButton.disabled = true;
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  }
  return (
    <section className=' flex gap-4 flex-col md:flex-row p-4'>
      <aside className='w-full md:w-[20%] md:min-h-screen md:border-r md:p-4'>
        <div className='border-b flex items-center'>
          <button className=' font-bold text-2xl'>
            <CiSearch />
          </button>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Find someone'
            className=' outline-none p-2 bg-transparent'
          />
        </div>
        <div className='w-full'>
          <Link
            href='/chat/id'
            className='flex  my-2 items-center justify-between  text-binance_green hover:bg-ash w-full p-2 rounded'
          >
            <div className='flex gap-2  items-center w-full'>
              <Image
                alt='logo'
                width={80}
                height={40}
                quality={100}
                className='w-[40px] h-[40px] rounded-full '
                src='/assets/images/av1.jpg'
              />
              <div>
                <h2 className='text font-semibold'>Teammate</h2>
                <div className='text-gray-500'>17-05</div>
              </div>
            </div>
            <div>2</div>
          </Link>
          {[1, 1, 1, 1, 1, 1].map((_, i) => (
            <Link
              href='/chat/id'
              key={i}
              className='flex gap-2 my-2 items-center hover:bg-ash w-full p-2 rounded'
            >
              <div className='flex gap-2  items-center w-full '>
                <Image
                  alt='logo'
                  width={80}
                  height={40}
                  quality={100}
                  className='w-[40px] h-[40px] rounded-full '
                  src='/assets/images/av1.jpg'
                />
                <div>
                  <h2 className='text font-semibold'>Teammate</h2>
                  <div className='text-gray-500'>17-05</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </aside>
      <section className='w-full relative'>
        {/* CHAT HEADER */}
        <div className='p-6 border-b flex gap-4 items-center w-full relative '>
          <div className=' relative'>
            <Image
              alt='avatar'
              width={80}
              height={40}
              quality={100}
              className='w-[50px] h-[50px] rounded-full '
              src='/assets/images/av3.jpg'
            />
            <span className=' absolute w-4 h-4 rounded-full bg-binance_green bottom-[-2px] border-2 border-white right-1'></span>
          </div>
          <h2 className=' font-bold text-xl'>Uche Livingstone</h2>
          <div className='w-fit px-4 py-2 bg-ash absolute bottom-[-20%] rounded-full m-auto left-0 right-0'>
            12:01:2024
          </div>
        </div>
        {/* END CHAT HEADER */}

        <section className='flex flex-col md:p-10 py-4 overflow-y-scroll overflow-x-hidden h-[70vh]'>
          <div className='min-h-[200px] self-start flex gap-2  md:max-w-[50%] w-fit'>
            <Image
              alt='logo'
              width={80}
              height={40}
              quality={100}
              className='w-[50px] h-[50px] rounded-full '
              src='/assets/images/av3.jpg'
            />

            <div>
              <div className='flex justify-between gap-4 my-2'>
                <h2>Jan Cooper</h2>
                <div className='text-ash'>10:30</div>
              </div>
              <div className='p-4 bg-ash rounded-md rounded-tl-[0px] my-2  w-fit'>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className='p-4 bg-ash rounded-md rounded-tl-[0px] my-2 w-fit'>
                <p>Exercitation.</p>
              </div>
            </div>
          </div>
          {/* <div className="relative self-start flex gap-2  my-10 h-10 border-b w-full "> <div className="w-fit px-4 py-2 bg-ash absolute bottom-[-50%] rounded-full m-auto left-0 right-0">Today</div></div> */}
          <div className='flex min-h-[200px] self-end md:max-w-[50%] gap-2 w-fit'>
            <div className=' flex flex-col gap-2 items-end'>
              <div className='flex justify-end gap-4 my-2'>
                <div className='text-ash'>10:30</div>
              </div>
              <div className='flex items-end gap-2'>
                <IoCheckmarkDoneSharp className='my-1 text-xl text-binance_green' />
                <div className='p-4 bg-binance_green text-white rounded-md rounded-tr-[0px] my-2  w-fit'>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className='flex items-end gap-2'>
                <IoCheckmarkDoneSharp className='my-1 text-xl' />
                <div className='p-4 bg-binance_green text-white rounded-md rounded-tr-[0px] my-2  w-fit'>
                  <p>Amet nostrud amet.</p>
                </div>
              </div>
            </div>
            <Image
              alt='logo'
              width={80}
              height={40}
              quality={100}
              className='w-[50px] h-[50px] rounded-full '
              src='/assets/images/av2.jpg'
            />
          </div>
        </section>
        <section className=' bg-ash w-full p-4 flex gap-1 items-end my-3'>
          <div className='flex gap-2'>
            <label className='cursor-pointer'>
              <IoMdCamera className=' text-2xl text-gray-500' />
              <input
                name='file-input'
                type='file'
                className=' hidden'
                id='file-upload'
                accept='image/*'
              />
            </label>
            <label className='cursor-pointer'>
              <LuPaperclip className=' text-2xl text-gray-500' />
              <input
                name='file-input'
                type='file'
                className=' hidden'
                accept='/*'
              />
            </label>
            <button className='cursor-pointer' onClick={startRecording}>
              <FaMicrophone className=' text-2xl text-gray-500' />
            </button>
          </div>
          <div className='p-2 w-full border-b border-gray-800 flex'>
            <input
              value={chat}
              className='w-full bg-transparent outline-none'
              placeholder='Type here...'
              onChange={(e) => setChat(e.target.value)}
            />
            <button tabIndex={0}>
              <IoIosSend className=' text-2xl text-binance_green' />
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};
Chat.getLayout = function getLayout(page) {
  return <TalentLayout>{page}</TalentLayout>;
};
export default Chat;
