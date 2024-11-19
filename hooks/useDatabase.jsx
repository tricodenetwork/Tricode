import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { initializeUser } from "@/store/slice-reducers/userSlice";

const useDatabase = () => {
  const { data: session } = useSession();
  const [allUsers, setAllUsers] = useState(null);
  const [projects, setProjects] = useState(null);
  const [rooms, setRooms] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  function convertObjectIdToDate(oid) {
    const timestamp = parseInt(oid.substring(0, 8), 16) * 1000;
    const date = new Date(timestamp);

    // Format the date to 'YYYY-MM-DD'
    const formattedDate = date.toISOString().split("T")[0];

    return formattedDate;
  }

  const cachedUser = useMemo(() => user, [user]);
  const cachedProjects = useMemo(() => projects, [projects]);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const res = await axios.post("/api/user", {
            email: session?.user?.email,
          });
          const res2 = await axios.post("/api/projects", {
            name: user?.name,
          });
          const res3 = await axios.get("/api/users");
          const res4 = await axios.get("/api/get/chatrooms");

          setRooms(res4.data.data);
          setAllUsers(res3.data.data);
          setUser(res.data.data);
          dispatch(initializeUser(res.data.data));
          setProjects(res2.data.data);
        } catch (error) {
          console.log(error.message);
        }
      }
    };

    if (session) {
      fetchData();
    }
  }, [session]);

  return {
    user: cachedUser,
    projects: cachedProjects,
    convertObjectIdToDate,
    allUsers,
    rooms,
  };
};

export default useDatabase;
