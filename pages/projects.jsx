import MenuLayout from "@/components/layouts/MenuLayout";
import TalentLayout from "@/components/layouts/TalentLayout";
import { ProjectDetails } from "@/components/projectComponents/ProjectDetails";
import Image from "next/image";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BsFilePdf, BsFiletypeDocx } from "react-icons/bs";
import { FaRegFileExcel } from "react-icons/fa";

// Initial data
const initialTasks = {
  todo: [
    {
      id: "1",
      title: "Prototyping",
      description: "Complete the prototyping of the designed mobile screens",
      date: "15/04/2024",
    },
    {
      id: "2",
      title: "Prototyping",
      description: "Complete the prototyping of the designed mobile screens",
      date: "15/04/2024",
    },
    {
      id: "3",
      title: "Prototyping",
      description: "Complete the prototyping of the designed mobile screens",
      date: "15/04/2024",
    },
    {
      id: "4",
      title: "Prototyping",
      description: "Complete the prototyping of the designed mobile screens",
      date: "15/04/2024",
    },
  ],
  ongoing: [
    {
      id: "5",
      title: "Prototyping",
      description: "Complete the prototyping of the designed mobile screens",
      date: "15/04/2024",
    },
    {
      id: "6",
      title: "Prototyping",
      description: "Complete the prototyping of the designed mobile screens",
      date: "15/04/2024",
    },
  ],
  done: [
    {
      id: "7",
      title: "Prototyping",
      description: "Complete the prototyping of the designed mobile screens",
      date: "15/04/2024",
    },
  ],
};

const Project = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = [...tasks[source.droppableId]];
    const destColumn = [...tasks[destination.droppableId]];
    const [movedTask] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, movedTask);

    setTasks((prevTasks) => ({
      ...prevTasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    }));
  };

  return (
    <section className='w-full md:p-8 p-4'>
      <div className='flex justify-start items-start gap-4 w-full md:w-[60%] p-4 flex-col md:flex-row rounded-2xl border border-stone-300'>
        <div className=''>
          <Image
            alt='user'
            width={80}
            height={40}
            quality={100}
            className='w-[100px] h-[100px] rounded-full'
            src='/assets/images/av1.jpg'
          />
        </div>
        <div className='flex flex-col items-start'>
          <h2 className='font-bold text-2xl'>John Wick</h2>
          <div className='font-thin'>@bogyman</div>
          <div className='text-2xl'>UI/UX DESIGNER</div>
        </div>
      </div>

      <div className='flex flex-col text-left items-start justify-start gap-4 w-full  p-4 mt-8 bg-ash rounded'>
        <span className='flex gap-8'>
          <h3>Project name</h3>
          <p>AI platform</p>
        </span>
        <span className='flex gap-12 text-left'>
          <h3>Description</h3>
          <p className='text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. at tempora
            corrupti molestias placeat aut veniam.
          </p>
        </span>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className='grid grid-cols-1 md:grid-cols-3 items-start gap-4 w-full mt-8 rounded'>
          {Object.entries(tasks).map(([columnId, columnTasks], index) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <div
                  className={`p-4 flex flex-col gap-4 rounded-md ${
                    columnId === "todo"
                      ? "bg-red-100"
                      : columnId === "ongoing"
                      ? "bg-yellow-100"
                      : "bg-green-100"
                  }`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3 className='text-center font-bold text-2xl capitalize'>
                    {columnId}
                  </h3>
                  {columnTasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className='p-4 rounded-md bg-white shadow-md cursor-move flex flex-col gap-2'
                        >
                          <div className='flex justify-between items-center'>
                            <div className='text-gray-600 font-bold'>
                              #{task.id}
                            </div>

                            <div>
                              <div
                                onClick={() =>
                                  setIsPopupVisible(
                                    isPopupVisible === task.id ? null : task.id
                                  )
                                }
                                className='cursor-pointer'
                              >
                                <Image
                                  alt='more'
                                  width={80}
                                  height={40}
                                  quality={100}
                                  className='w-[30px] h-[30px]'
                                  src='/assets/icons/more.svg'
                                />
                              </div>
                              {isPopupVisible === task.id && (
                                <div className='flex flex-col bg-white absolute top-[12rem] ml-[-7rem] mt-3 z-99 w-[147px] h-[6rem] shadow-xl rounded-md'>
                                  <a
                                    className='hover:bg-primary hover:text-white border-b p-3 rounded-t-md'
                                    href='#'
                                  >
                                    Move Card
                                  </a>
                                  <a
                                    className='hover:bg-primary hover:text-white p-3 rounded-b-md'
                                    href='#'
                                  >
                                    Add comment
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>

                          <h4 className='text-xl font-semibold'>
                            {task.title}
                          </h4>
                          <p className='text-gray-500'>{task.description}</p>
                          <div className='flex justify-between items-center mt-4 text-gray-400 text-sm'>
                            <div className=''>
                              <Image
                                alt='user'
                                width={80}
                                height={40}
                                quality={100}
                                className='w-[40px] h-[40px] rounded-full'
                                src='/assets/images/av1.jpg'
                              />
                            </div>
                            <span className='flex items-center cursor-pointer'>
                              <div className=''>
                                <Image
                                  alt='comment'
                                  width={20}
                                  height={20}
                                  quality={100}
                                  className='w-[20px] h-[40px] rounded-full'
                                  src='/assets/icons/comment_symbols.svg'
                                />
                              </div>
                              <span>4</span>
                            </span>
                            <span>{task.date}</span>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      <section className=' mt-10 pt-10'>
        <h1 className='border-b w-full  text-binance_green font-bold text-xl '>
          Project Manager Feedback
        </h1>

        <section className='my-6 '>
          <div className='flex justify-between items-end '>
            <h2 className='font-bold'>Project Manager</h2>
            <div className='flex gap-4 items-end'>
              <div className=' font-bold'>Posted on:</div>
              <span> 12/01/2023, 11:30 AM</span>
            </div>
          </div>
          <div className='font-bold text-gray-600 text-xl my-4'>
            Luke Kajola
          </div>
          <div>
            <span className='font-bold'>Status: </span>
            <span className=' text-binance_green'>Project ongoing</span>
          </div>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
          <ol className=' list-decimal p-4 flex flex-col gap-4 my-6'>
            <li>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </li>
            <li>sit aliqua dolor do amet sint. </li>
            <li>
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </li>
          </ol>

          <div>
            <h2 className=' font-semibold my-4'>Photo(s)/Video(s)</h2>
            <div className='flex gap-3'>
              <div className='w-[150px] h-[80px] bg-gray-200 rounded-md'></div>
              <div className='w-[150px] h-[80px] bg-gray-200 rounded-md'></div>
              <div className='w-[150px] h-[80px] bg-gray-200 rounded-md'></div>
            </div>
          </div>
          <div>
            <h2 className=' font-semibold my-4'>Files(s)</h2>
            <div className='flex justify-between'>
              <div className='flex gap-3 text-binance_green'>
                <div className='flex gap-2 items-center'>
                  <BsFilePdf />
                  <span>abc.pdf</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <BsFiletypeDocx />
                  <span>xyz.doc</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <FaRegFileExcel />
                  <span>pqr.xls</span>
                </div>
              </div>

              <button className=' w-fit bg-binance_green text-white p-2 rounded-full px-6'>
                Download report
              </button>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-4'>
          <h1 className='border-b w-full  text-binance_green font-bold text-xl '>
            Your Feedback
          </h1>
          <h3>Give your feedback on any task to your project manager</h3>
          <textarea className=' outline-none h-[150px] border  p-4' />
          <div className='w-full flex gap-4 justify-center'>
            <button className=' w-fit border-binance_green border text-binance_green p-2 rounded-full'>
              Cancel
            </button>
            <button className=' w-fit bg-binance_green text-white p-2 rounded-full px-6'>
              Download report
            </button>
          </div>
        </section>
      </section>

      <section className=' mt-10 pt-10'>
        <h1 className='border-b w-full  text-binance_green font-bold text-xl py-6'>
          New project alert
        </h1>

        <section className='my-6 '>
          <div className='flex justify-between items-end '>
            <h2 className='font-bold'>Project Manager</h2>
            <div className='flex gap-4 items-end'>
              <div className=' font-bold'>Posted on:</div>
              <span> 12/01/2023, 11:30 AM</span>
            </div>
          </div>
          <div className='font-bold text-gray-400 text-xl my-4'>
            Luke Kajola
          </div>
          <p>
            {" "}
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </section>

        <div>
          <section className=' overflow-x-scroll'>
            <table>
              <thead className=' font-bold '>
                <tr>
                  <td className='p-3 mx-3'>S/N</td>
                  <td className=' whitespace-nowrap p-3 mx-3'>Project Name</td>
                  <td className='p-3 mx-3'>Date</td>
                  <td className='p-3 mx-3'>Discription</td>
                  <td className='p-3 mx-3'>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 mx-3'> 1</td>
                  <td className='p-3 mx-3 border-b'>Project Name</td>
                  <td className='p-3 mx-3 border-b'>Date</td>
                  <td className='  p-2 mx-3 border-b'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Amet minim mollit non deserunt ullamco
                  </td>
                  <td className='p-3 mx-3 border-b'>
                    <button className=' text-white bg-binance_green rounded-full px-4 py-2 whitespace-nowrap'>
                      View project
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='p-3 mx-3'> 1</td>
                  <td className='p-3 mx-3 border-b'>Project Name</td>
                  <td className='p-3 mx-3 border-b'>Date</td>
                  <td className=' min-w-[200px] p-2 mx-3 border-b'>
                    Amet minim serunt ullamco
                  </td>
                  <td className='p-3 mx-3 border-b'>
                    <button className=' text-white bg-binance_green rounded-full px-4 py-2 whitespace-nowrap'>
                      View project
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='p-3 mx-3'> 1</td>
                  <td className='p-3 mx-3 border-b'>Project Name</td>
                  <td className='p-3 mx-3 border-b'>Date</td>
                  <td className=' min-w-[200px] p-2 mx-3 border-b'>
                    Amet minim mollit non ullamco
                  </td>
                  <td className='p-3 mx-3 border-b'>
                    <button className=' text-white bg-binance_green rounded-full px-4 py-2 whitespace-nowrap'>
                      View project
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </section>
  );
};

Project.getLayout = function getLayout(page) {
  return <MenuLayout>{page}</MenuLayout>;
};

export default Project;
