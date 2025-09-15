import React from "react";
import './loginform.css';
import { useState } from "react";
import * as api from "./API/index.js"
import { useDispatch, useSelector } from "react-redux";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

function Loginform() {
  const [email, setEmail] = useState("")
  const [otp, setotp] = useState("")
  const [showotpbox, setShowotpbox] = useState(false)
  const [sendotpbtn, setSendotpbtn] = useState(true)
  //const user=JSON.parse(localStorage.getItem("User"))
  const user = (useSelector(state => state.userreducer.data))
  console.log(user)
  const dispatch = useDispatch()
  const sendotp = async () => {
    if (email) {
      //console.log(email)
      setShowotpbox(true)
      setSendotpbtn(false)
      try {
        const data = await api.login(email)
      }
      catch (error) {
        console.log(error.message)
        alert("Invalid email")
      }
    }
    else {
      alert("Please enter your email id.")
    }
  }
  const verifyotp = async () => {
    if (!email) {
      alert("Please enter your email id.")
    }
    else if (!otp) {
      alert("Enter otp")
    }
    else {
      try {
        const data = (await api.verification(email, otp)).data
        console.log(data)
        dispatch({ type: "LOGIN", data })
        //alert("User logged in successfully")
      }
      catch (error) {
        console.log(error.message)
        alert("Otp expired.Resend otp")
        setSendotpbtn(true)
      }
    }
  }
  return (
    <div className="container col-xl-15 col-xxl-8 px-4 py-0">
      <div className="row align-items-center g-lg-5 py-5">
        <div
          className="col-lg-7 text-center text-lg-start"
          style={{
            background:
              "url('https://static.vecteezy.com/system/resources/previews/001/100/008/non_2x/student-using-mobile-phone-do-online-learning-with-teacher-in-video-call-session-vector.jpg') center/cover no-repeat",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <h1 className="roboto-flex fst-normal text-center display-4  lh-1 text-body-emphasis mb-3" style={{ marginRight: "90px" }}>
            QueryConnect
          </h1>
          <p className="text-center fw-bolder col-lg-10 fs-3 ">
            Talk to your tutor directly on a live 1-on-1 video session
          </p>
        </div>
        <div className="text-end col-md-10 mx-auto col-lg-5">
          {user ?
            <div  className="text-center">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5 className="text-success fw-semibold fs-5 mb-4 me-5 pe-5">User logged in successfully</h5>
                <TiTick size={24} style={{ color: "green" }} />
              </div>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/">
                  <button className="btn btn-primary px-4">Go to Dashboard</button>
                </Link>
              </div>
            </div>
            :
            <form className="text-end p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="text-end  mb-3 ">
                <input className="form-control w-100 "
                  type="email"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              {showotpbox &&
                <input className="form-control w-100 mb-4" type="text" placeholder="Enter otp" onChange={e => setotp(e.target.value)} value={otp} name="otp" />}

              {sendotpbtn ?
                <button onClick={sendotp} className="w-100 btn btn-lg btn-primary" type="button" style={{ color: "white", textDecoration: "none" }}>
                  Send OTP
                </button>
                :
                <button onClick={verifyotp} className="w-100 btn btn-lg btn-primary" type="button" style={{ color: "white", textDecoration: "none" }}>
                  Verify OTP
                </button>}
              <hr className="my-4" />
              <small className="text-body-secondary">

                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>}
        </div>
      </div>
    </div>
  );
}

export default Loginform;