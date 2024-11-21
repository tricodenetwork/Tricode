import { initializeUser } from "@/store/slice-reducers/userSlice";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useDatabase = () => {
  const [allUsers, setAllUsers] = useState(null);
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

  useEffect(() => {
    const fetchData = async () => {
      if (user?.email) {
        try {
          const res = await axios.post("/api/user", {
            email: user?.email,
          });

          const res3 = await axios.get("/api/users");
          const res4 = await axios.get("/api/get/chatrooms");

          setRooms(res4.data.data);
          setAllUsers(res3.data.data);
          dispatch(initializeUser(res.data.data));
        } catch (error) {
          console.log(error.message);
        }
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user]);

  return {
    user: cachedUser,
    convertObjectIdToDate,
    allUsers,
    rooms,
  };
};

export default useDatabase;
