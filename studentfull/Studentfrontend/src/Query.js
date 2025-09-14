import React from "react";
import "./Query.css"; // Assuming you have some CSS here
import Reach from "./Reach.js";
import img from './WhatsApp.jpg'; // You're importing an image, but not using it
import { Link } from "react-router";
const containerStyle = {
  background: 'linear-gradient(to right, #a0c4ff,rgb(77, 133, 223))'
};
function Query() {
  return (
    <>


      <div className="container">
        <div className="d-flex flex-wrap align-items-center   me-90">
          <h3> <a href="/" className="d-flex align-items-center mb-0  mb-lg-4 link-body-emphasis text-decoration-none fw-bold " style={{ marginLeft: "30px", marginTop: "20px" }}>
            QueryConnect
          </a></h3>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 nav nav-underline ">

            <h5><li><a href="/" className="nav-link px-2 link-body-emphasis">Solutions</a></li></h5>
            <h5><li><a href="/" className="nav-link px-2 link-body-emphasis">Get premium</a></li></h5>
            <h5><li><a href="/" className="nav-link px-2 link-body-emphasis">Private tutors</a></li></h5>
          </ul>


          <div className="dropdown text-end d-flex align-items-center">

            <a href="/" className="d-flex align-items-center text-decoration-none dropdown-toggle ms-3 me-3" data-bs-toggle="dropdown" aria-expanded="false" >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle  " viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
              
              <span className="ms-2">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </a>
            <ul className="dropdown-menu text-small text-end" >
              <li><a className="dropdown-item  " href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person ms-3" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>Profile</a></li>
              <li><a className="dropdown-item" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift ms-3" viewBox="0 0 16 16">
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
              </svg>Refer and earn</a></li>
              <li><a className="dropdown-item" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope ms-3" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>Contact us</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right ms-3" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
              </svg><Link to="/login">Log out</Link> </a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-0" style={{ margin: "1px" }} />
      <div className="container col-xxl-8 px-5 py-5" style={containerStyle} >
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="200" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Get Expert Soutions!</h1>
            <div className="Search-box">
              {<Reach />}
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
export default Query;