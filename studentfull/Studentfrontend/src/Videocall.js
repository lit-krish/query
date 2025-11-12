import { useSelector } from "react-redux";
import { IoVideocamOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useSocket } from "./SocketProvider.js";
import "./videocall.css";

export const Videocall = () => {
  const user = useSelector((state) => state.userreducer?.data);
  const teachers = useSelector((state) =>
    state.teacherreducer?.data.filter(
      (teacher) => teacher?.email !== user?.email
    )
  );

  const navigate = useNavigate();
  const [remoteid, setremoteid] = useState("");
  const [onlineTeachers, setOnlineTeachers] = useState([]);
  const socket = useSocket();
  const room = uuid();

  useEffect(() => {
    if (!socket || !user?._id) return;

    socket.emit("get-online", user._id);

    socket.on("online-users", (onlineList) => {
      setOnlineTeachers(onlineList);
    });

    return () => {
      socket.off("online-users");
    };
  }, [socket, user]);

  const requestVideocall = (id) => {
    setremoteid(id);
    socket.emit("join-room", room);
  };

  useEffect(() => {
    socket.on("room-joined", (room) => {
      navigate(`/room/${room}`, { state: { remoteid } });
    });

    return () => {
      socket.off("room-joined");
    };
  }, [room, remoteid, navigate, socket]);

  // Sort teachers: online first
  const sortedTeachers = [...(teachers || [])].sort((a, b) => {
    const aOnline = onlineTeachers.includes(a._id);
    const bOnline = onlineTeachers.includes(b._id);
    return aOnline === bOnline ? 0 : aOnline ? -1 : 1;
  });
     
  return (
    <div className="container mt-4">
      <h3 className="mb-1 fw-bold" style={{ marginLeft: "20px" }}>
        Teachers
      </h3>
      <h6 className="mb-3 fw-light" style={{ marginLeft: "20px" }}>
        Connect with tutor - quick video calls
      </h6>

      <div className="row g-4">
        {sortedTeachers?.map((teacher) => {
          const isOnline = onlineTeachers.includes(teacher._id);

          return (
            <div className="col-md-6 col-lg-4" key={teacher._id}>
              <div className="card shadow-sm p-3 d-flex flex-row align-items-center justify-content-between bg-light border-0 rounded-4">
                <div className="d-flex align-items-center position-relative">
                  <div className="position-relative">
                    <div style={{background:"lightgray",color:"black",width:"4rem",height:"4rem",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid lightblue",fontWeight:"bold"}}>
                      <div>{teacher?.firstname?.charAt(0).toUpperCase()}</div>
                    </div>
                    
                    {isOnline && <span className="online-dot"></span>}
                  </div>

                  <div className="teacher-info">
                    <h5 className="mx-2 mb-1 fw-semibold">
                     {teacher.firstname} {teacher.lastname}
                    </h5>
                     <p className="mx-2 mb-0 text-secondary fw-semibold">
                      {teacher?.occupation}
                    </p>

                    <div className="mx-2 mb-0 text-secondary fw-semibold">
                      Exp: {teacher?.experience>0 ? `${teacher?.experience} years` : "Beginner"}
                    </div>
                    <p className="mx-2 mb-0 text-secondary fw-semibold">
                      Specialization: {teacher?.subjects?.toString()}
                    </p>
                  </div>
                </div>

                <button
                  className="video-call-btn"
                  onClick={() => requestVideocall(teacher._id)}
                  title="Start Video Call"
                >
                  <IoVideocamOutline size={22} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h6 className="mt-3" style={{ marginLeft: "20px" }}>
        Tip : click video call to start a session.
      </h6>
    </div>
  );
};

export default Videocall;
