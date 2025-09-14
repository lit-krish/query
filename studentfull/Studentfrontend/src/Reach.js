import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Videocall } from "./Videocall.js";

function Reach() {


  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // You can handle the file upload logic here
    }
  };
  const user = useSelector(state => state.userreducer?.data)
   const teachers = useSelector(state => state.teacherreducer?.data.filter(teacher=>teacher?.email!=user?.email))
  const [showteachers, setshowteachers] = useState(false)
  console.log(teachers)

  const connectTutors = () => {
    if (!user)
      alert("Please login first")
    else {
      if(showteachers===false)
      setshowteachers(true)
      else
      setshowteachers(false)
    }
  }

  return (
    <>
      {/* Search Box with Buttons Inside */}
      <div className="search-box position-relative border rounded shadow-lg p-2" style={{ border: '2px solid black', width: "100%", maxWidth: "700px", background: "#fff", margin: "40px auto" }}>

        {/* Input Field with Upload Button */}
        <div className="d-flex align-items-center" style={{ height: "180px" }}>
          <input
            type="text"
            className="form-control p-5 "

            placeholder="Type your question here"
            style={{ width: "100%", fontSize: "1.2rem", flexGrow: 1, border: "none", outline: "none", textAlign: "center" }}
          />
          <div className="ml-2"> {/* Add margin to separate input and button */}
            <button
              type="button"
              className="btn btn-light btn-sm"
              style={{ border: '2px solid #ced4da', borderRadius: '15px', padding: '50px 90px' }}
              onClick={handleUploadButtonClick}
            >

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
                <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
              <span style={{ marginLeft: '5px' }}>Upload Image </span>
            </button>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>

        <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
          {/* Get Solution Button */}
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-primary" style={{ marginRight: "440px", left: "30px" }} onClick={connectTutors}>
              Connect to Tutors
            </button>
          </div>
        </div>
      </div>
      {showteachers && <Videocall/>}
    </>
  );
}

export default Reach;