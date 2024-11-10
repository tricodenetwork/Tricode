import MenuList from "@/components/MenuList";
import LogOut from "@/components/modals/LogOut";
import ModalComponent from "@/components/modals/ModalComponent";
import NotificationModal from "@/components/modals/NotificationModal";
import Notifications from "@/components/modals/Notifications";
import Bell from "@/components/svg/Bell";
import Dashboard from "@/components/svg/Dashboard";
import Ellipse from "@/components/svg/Ellipse";
import Help from "@/components/svg/Help";
import Logout from "@/components/svg/Logout";
import Message from "@/components/svg/Message";
import Payment from "@/components/svg/Payment";
import Project from "@/components/svg/Project";
import Settings from "@/components/svg/Settings";
import useFunctions from "@/hooks/useFunctions";
import { PROJECTS, USER, USERS } from "@/lib/constants/queries";
import fetchGraphQLData from "@/lib/utils/fetchGraphql";
import { setProjects } from "@/store/slice-reducers/projectsSlice";
import { initializeUser } from "@/store/slice-reducers/userSlice";
import { setUsers } from "@/store/slice-reducers/usersSlice";
import { ViewHorizontalIcon, ViewVerticalIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const slideVariants = {
  hidden: { opacity: 50, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 50, x: -50 },
};

const MenuLayout = ({ children }) => {
  // --------------------------------------------VARIABLES
  const route = useRouter();
  const { user } = useSelector((state) => state.user);
  const { data: session } = useSession();

  const parts = route.pathname.split("menu/");
  const title = parts.length > 1 ? parts[1].split("/")[0] : "";
  const [isOpen, setIsOpen] = useState(true);
  const [notification, setNotification] = useState(false);
  const [logout, setLogout] = useState(false);
  const [viewHorizontal, setViewHorizontal] = useState(false);
  const projectId = route?.query?.projectId;
  const dispatch = useDispatch();

  //-----------------------------------------------------------FUNCTIONS
  const { imageLoader } = useFunctions();
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  //------------------------------------------------------------------USE EFFECTS
  useEffect(() => {
    if (session?.user?.email) {
      const fetchData = async () => {
        let data = await fetchGraphQLData(USER, { email: session.user.email });
        let projects = await fetchGraphQLData(PROJECTS);
        let users = await fetchGraphQLData(USERS);
        // const sess = await getServerAuthSession();

        if (data && users && projects) {
          dispatch(initializeUser(data.user));
          dispatch(setUsers(users.users));
          dispatch(setProjects(projects.projects));
        }
      };

      fetchData();
    }
    // const fetchSession = async () => {
    //   const res = await fetch("https://tricode.pro/api/auth/session", {
    //     credentials: "include",
    //   });
    //   console.log("ans", res.json());
    //   return res.ok ? await res.json() : null;
    // };
    // const sess = fetchSession();
    console.log("session", session);
  }, [session, dispatch]);

  return (
    <div
      style={inter.style}
      className='w-full flex overflow-hidden flex-col justify-start'
    >
      {logout && (
        <ModalComponent close={() => setLogout(false)} Content={LogOut} />
      )}
      {notification && (
        <NotificationModal set={setNotification} Content={Notifications} />
      )}
      <div className='w-full  bg-binance_green  flex items-center justify-between px-[3vw] lg:px-[2vw]  h-[9vh]'>
        <Link href={"/"} className='items-center hidden lg:flex text-white'>
          <Image
            loader={imageLoader}
            alt='logo'
            width={120}
            height={40}
            quality={100}
            src='/assets/images/logo.png'
          />
        </Link>
        <div className='flex  lg:hidden items-center text-white'>
          <Image
            loader={imageLoader}
            alt='logo'
            width={40}
            height={40}
            quality={100}
            src='/assets/images/slogo.png'
          />
        </div>

        <motion.h4
          transition={{ duration: 0.4 }}
          animate={{ opacity: [0, 100], x: ["0%", "0%"] }}
          className='flex text-white'
        >
          {title}
        </motion.h4>
        <div className='lg:space-x-4 flex items-center justify-center lg:justify-between'>
          <div className='relative lg:flex hidden hover:scale-90 hover:cursor-pointer transition-all ease-out duration-100'>
            <Link href={"/menu/chat"}>
              <div className='absolute -top-2 -right-2'>
                <Ellipse />
              </div>
            </Link>

            <Message />
          </div>
          <div className='relative lg:flex hidden hover:scale-90 hover:cursor-pointer transition-all ease-out duration-100'>
            <button onClick={() => setNotification(true)}>
              <div className='absolute -top-2 -right-2'>
                <Ellipse />
              </div>
              <Bell />
            </button>
          </div>
          <div className='w-[30px] lg:flex hidden  hover:scale-90 hover:rotate-[360deg] hover:cursor-pointer transition-all ease-out duration-100 relative rounded-full h-[30px]'>
            <Link href={"/settings/user"}>
              <Settings />
            </Link>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className='w-[40px] hover:scale-90  hover:cursor-pointer transition-all ease-out duration-100 relative rounded-full h-[40px]'
          >
            <Image
              src={user?.image ? user?.image : "/assets/icons/Ellipse.png"}
              className='rounded-full object-cover'
              alt='profile_pic '
              fill
            />
          </div>
        </div>
      </div>
      <div
        className='w-full  relative max-h-[91dvh] h-screen   
         border-midorange items-start flex'
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='absolute z-50 top-2 left-2'
        >
          {!isOpen ? <ViewHorizontalIcon /> : <ViewVerticalIcon />}
        </button>
        <div
          className={` ${
            !isOpen ? "w-[0%] xxl:w-[0%]" : "lg:w-[15%] xxl:w-[17%] "
          }   absolute   top-0  lg:left-0 lg:relative lg:h-full h-[80%] flex flex-col justify-between shadow-[0px_2px_1px] shadow-black/10   border-r z-20 border-opacity-20  duration-700 ease-out  pt-[4vh] lg:pt-0 lg:mt-[7vh]  border-[#000000]`}
        >
          <div className=''>
            <MenuList isOpen={isOpen} Icon={Dashboard} name={"Dashboard"} />
            <MenuList isOpen={isOpen} Icon={Project} name={"Project"} />
            <MenuList isOpen={isOpen} Icon={Payment} name={"Payment"} />
            <MenuList isOpen={isOpen} Icon={Help} name={"Help"} />
            <MenuList
              show={() => setLogout(true)}
              isOpen={isOpen}
              Icon={Logout}
              name={"Logout"}
            />
          </div>
        </div>
        <AnimatePresence mode='wait'>
          <motion.div
            key={route.pathname} // triggers animation on route change
            variants={slideVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ duration: 0.5 }}
            className='max-h-full h-full overflow-y-scroll scrollbar-hid flex-1 flex justify-center items-start'
          >
            <Toaster position='top-center' />
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* <TawkMessengerReact
        propertyId='668d0c9cc3fb85929e3d25df'
        widgetId='1i2bfih3e'
        ref={tawkMessengerRef}
      /> */}
    </div>
  );
};

export default MenuLayout;
