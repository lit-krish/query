import React, { useState } from "react";
import { details } from "../../apis/teacherapi.jsx"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";

const TutorDetails = () => {
  const [formData, setFormData] = useState({
    email: useSelector((state => state.userreducer.data.email)),
    firstname: "",
    lastname: "",
    availablity: "",
    gender: "",
    qualification: "",
    qualificationstatus: "completed",
    experience: "",
    occupation: "",
    subjects: "",
  });
  const dispatch = useDispatch();
  const [showLogoutBtn, setShowLogoutBtn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Tutor Data:", formData);
    const data = (await details(formData)).data
    console.log(data);
    dispatch({ type: "UPDATE", data: data });
    // You can post this data to your backend here
  };

  const log_out = async () => {
    dispatch({ type: "LOGOUT" });
    navigate("/")
  }

  const profileInfo = useSelector((state) => state.userreducer?.data);
  console.log(profileInfo);
  //console.log(localStorage.getItem("teacher"));
  const array = [1, 2, 3, 4, 5]

  return (
    <div className="min-h-screen bg-blue-100">
      {profileInfo?.firstname?
        <div className="absolute top-15 left-1/2 transform -translate-x-1/2" >
          <p className="text-2xl text-center">Your Profile</p>
          <div className="  text-center max-w-fit max-h-fit bg-white p-5 border-gray-200 border-2">
            <div className="bg-cyan-950 w-36 h-36 p-2 rounded-full text-white relative">
              <p className=" text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{profileInfo?.firstname.charAt(0).toUpperCase()}</p>
            </div>
            <p className="mt-3">{profileInfo?.firstname} {profileInfo?.lastname}</p>
            <div className="flex mx-3">
              {array.map(element => (
                <MdOutlineStarPurple500 key={element} size={24} color="gold" />)
              )}
            </div>
            <div className="flex gap-4 mt-3">
              <p className="text-black">{profileInfo?.occupation}</p>
              <p className="text-black">{profileInfo?.experience} years</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {profileInfo?.subjects.map((subject, index) => (
                <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm">{subject}</span>
              ))}
            </div>
          </div>
          <button onClick={() => log_out()} className="mt-3 btn btn-secondary p-2 absolute left-1/2 transform -translate-x-1/2">Logout</button>
        </div>
        :
        <div className="min-h-screen bg-blue-100">
          <div>
            <h3 style={{ textAlign: "end", marginRight: "20px" }} className="text-black" onClick={() => setShowLogoutBtn(!showLogoutBtn)}>...</h3>
            {showLogoutBtn &&
              <div style={{ marginLeft: "90%" }} className="bg-white max-w-fit ">
                <p onClick={() => log_out()} className=" btn-lg px-4 me-md-2" style={{ color: "black", textDecoration: "none" }}>Logout</p>
              </div>}
          </div>
          <div className=" flex justify-center  p-10">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-4 mt-5 pt-5 pb-5">
              <h2 style={{ color: "" }} className="text-2xl font-semibold text-center">Complete Your Profile</h2>

              <div className="flex gap-2">
                <div className="flex row gap-1 mx-2">
                  <label>First Name</label>
                  <input name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" className="w-1/2 p-3 border rounded-lg" />
                </div>
                <div className="flex row gap-1 mx-2">
                  <label>Last Name</label>
                  <input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" className="w-1/2 p-3 border rounded-lg" />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex row gap-1 mx-2 mt-2 w-1/2">
                  <label>Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className=" p-3 border rounded-lg">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="flex row gap-1 mx-2 mt-2 w-1/2">
                  <label>Occupation</label>
                  <input name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Eg:Engineer" className=" p-3 border rounded-lg" />
                </div>

              </div>


              <div className="flex gap-2">
                <div className="flex row gap-1 mx-2 mt-2 w-1/2">
                  <label>Qualification</label>
                  <input name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Eg:Bachelors" className="w-1/2 p-3 border rounded-lg" />
                </div>

                <div className="flex row gap-1 mx-2 mt-2 w-1/2">
                  <label>Qualification Status</label>
                  <select name="qualistatus" value={formData.qualistatus} onChange={handleChange} className="p-3 border rounded-lg">
                    <option value="completed">Completed</option>
                    <option value="ongoing">Ongoing</option>
                  </select>
                </div>

              </div>

              <div className="flex row gap-1 mt-2 mx-2">
                <label>Experience</label>
                <input name="experience" value={formData.experience} onChange={handleChange} placeholder="Teaching Experience (e.g. 3 years)" className="w-full p-3 border rounded-lg" />
              </div>

              <div className="flex row gap-1 mt-2 mx-2">
                <label>Specialization</label>
                <input name="subjects" value={formData.subjects} onChange={handleChange} placeholder="Known Subjects (comma separated)" className="w-full p-3 border rounded-lg" />
              </div>

              {/*<div className="mb-6 mx-4 mt-2"> 
            <label className="block text-gray-600 font-semibold mb-2">Upload Certification (optional)</label>

            <label
              htmlFor="certificationUpload"
              className="w-full h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition"
            >
              <svg
                className="w-10 h-10 text-gray-400 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16l4 4 4-4m0 0V4m0 12l4-4 4 4"></path>
              </svg>
              <p className="text-gray-500">Click to upload your certification</p>
              <p className="text-sm text-gray-400">(PDF, DOC, JPG, PNG)</p>
            </label>

            <input
              id="certificationUpload"
              name="file"
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.png"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, certification: e.target.files[0] }))
              }
              className="hidden"
            />
          </div>*/}


              <button type="submit" className="w-11/12 mx-4 py-2 mt-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                Submit
              </button>
            </form>

          </div>
        </div>}</div>
  );
};

export default TutorDetails;
