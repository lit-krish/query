import React, { useState } from "react";
import { login, verify } from "../../apis/teacherapi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Loginn = () => {
  const [email, setEmail] = useState("");
  const [otp, setotp] = useState("");
  const [showotpbox, setShowotpbox] = useState(false);
  const [sendotpbtn, setSendotpbtn] = useState(true);
  const user = useSelector(state => state.userreducer.data);
  const dispatch = useDispatch();

  const sendotp = async () => {
    if (email) {
      setShowotpbox(true);
      setSendotpbtn(false);
      try {
        await login(email);
      } catch (error) {
        console.log(error.message);
        alert("Invalid email");
      }
    } else {
      alert("Please enter your email id.");
    }
  };

  const verifyotp = async () => {
    if (!email) {
      alert("Please enter your email id.");
    } else if (!otp) {
      alert("Enter OTP");
    } else {
      try {
        const data = (await verify(email, otp)).data;
        console.log(data);
        dispatch({ type: "LOGIN", data });
      } catch (error) {
        console.log(error.message);
        alert("OTP expired. Resend OTP");
        setSendotpbtn(true);
      }
    }
  };

  const logout =async ()=>{
    
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-blue-100 bg-cover bg-center"
      style={{ backgroundImage: "url('./public/bg1.png')" }}
    >
      <div className="bg-white p-10 rounded-2xl shadow-lg flex w-[1000px] h-[600px] flex-col">

        {/* Header Section */}
        <h1 className="text-3xl font-semibold text-blue-700 text-left ml-6 mb-4">
          QueryConnect
        </h1>

        {/* Main Content */}
        <div className="flex flex-row w-full h-full">

          {/* Left Section - Image */}
          <div className="w-1/2 flex flex-col items-center justify-center p-6">
            <img src="./public/bg2.png" alt="Login Illustration" className="w-full h-auto" />
            <p className="text-gray-700 font-medium mt-2">For Tutor</p>
          </div>

          {/* Right Section - Centered Login Form */}
          <div className="w-1/2 flex items-center justify-center p-6">
            {user ? (
              <div className="text-center">
              <p className="text-success fw-semibold fs-5 mb-4">User logged in successfully</p>
              
              <div className="d-flex justify-content-center gap-3">
                <Link to="/">
                  <button className="btn btn-primary px-4">Go to Dashboard</button>
                </Link>
            
              </div>
            </div>
            
            ) : (
                <form className="border border-dark rounded p-4 bg-white w-100" style={{ maxWidth: "400px" }}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              
                {showotpbox && (
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setotp(e.target.value)}
                    />
                  </div>
                )}
              
                <div className="mb-3">
                  {sendotpbtn ? (
                    <button
                      type="button"
                      onClick={sendotp}
                      className="btn btn-primary w-100"
                    >
                      Send OTP
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={verifyotp}
                      className="btn btn-success w-100"
                    >
                      Verify OTP
                    </button>
                  )}
                </div>
              
                <hr />
                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </form>
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginn;
