import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const useDatabase = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [projects, setProjects] = useState(null);
  const [rooms, setRooms] = useState(null);

  function convertObjectIdToDate(oid) {
    const timestamp = parseInt(oid.substring(0, 8), 16) * 1000;
    const date = new Date(timestamp);

    // Format the date to 'YYYY-MM-DD'
    const formattedDate = date.toISOString().split("T")[0];

    return formattedDate;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const res = await axios.post("/api/user", {
            email: session.user.email,
          });
          const res2 = await axios.post("/api/projects", {
            name: session.user.name,
          });
          const res3 = await axios.get("/api/users");
          const res4 = await axios.get("/api/get/chatrooms");

          setRooms(res4.data.data);
          setAllUsers(res3.data.data);
          setUser(res.data.data);
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

  return { user, projects, convertObjectIdToDate, allUsers, rooms };
};

export default useDatabase;
