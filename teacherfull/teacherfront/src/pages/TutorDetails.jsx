import React, { useState } from "react";
import { details } from "../../apis/teacherapi"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TutorDetails = () => {
  const [formData, setFormData] = useState({
    email: useSelector((state => state.userreducer.data.email)),
    firstname: "",
    lastname: "",
    availablity: "",
    gender: "",
    qualification: "",
    qualistatus: "completed",
    experience: "",
    occupation: "",
    subjects: "",
    certification: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Tutor Data:", formData);
    const save = await details(formData)
    // You can post this data to your backend here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700 text-center">Tutor Details</h2>

        <div className="flex gap-4">
          <input name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" className="w-1/2 p-3 border rounded-lg" />
          <input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" className="w-1/2 p-3 border rounded-lg" />
        </div>

        <div className="flex gap-4">
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-1/2 p-3 border rounded-lg">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input name="availablity" value={formData.availablity} onChange={handleChange} placeholder="Day Free (e.g. Monday)" className="w-1/2 p-3 border rounded-lg" />
        </div>

        <input name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Degree" className="w-full p-3 border rounded-lg" />

        <select name="qualistatus" value={formData.qualistatus} onChange={handleChange} className="w-full p-3 border rounded-lg">
          <option value="completed">Completed</option>
          <option value="ongoing">Ongoing</option>
        </select>

        <input name="experience" value={formData.experience} onChange={handleChange} placeholder="Teaching Experience (e.g. 3 years)" className="w-full p-3 border rounded-lg" />

        <input name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" className="w-full p-3 border rounded-lg" />

        <input name="subjects" value={formData.subjects} onChange={handleChange} placeholder="Known Subjects (comma separated)" className="w-full p-3 border rounded-lg" />

        <div className="mb-6">
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
        </div>


        <Link to="/"> <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Submit
        </button> </Link>
      </form>
    </div>
  );
};

export default TutorDetails;
