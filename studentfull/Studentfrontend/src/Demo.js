import React from "react";
import './Demo.css';
function Demo() {
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
          <h1 className="roboto-flex fst-normal text-center display-4  lh-1 text-body-emphasis mb-3"style={{marginRight:"90px"}}>
            QueryConnect
          </h1>
          <p className="text-center fw-bolder col-lg-10 fs-3 ">
            Talk to your tutor directly on a live 1-on-1 video session
          </p>
        </div>
        <div className="text-end col-md-10 mx-auto col-lg-5">
          <form className="text-end p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="text-end form-floating mb-3">
              <input
                type="email"
                className="form-control p-0"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label
                htmlFor="floatingInput"
                style={{ textAlign: "left", width: "100%" }}
              >
                Email address
              </label>
            </div>
            <div className="text-end form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label
                htmlFor="floatingPassword"
                style={{ textAlign: "left", width: "100%" }}
              >
                Password
              </label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Demo;