import React from "react";
import "./Query.css";
import Reach from "./Reach.js";
import img from "./WhatsApp.jpg";
import { Link } from "react-router";

const containerStyle = {
  background: "linear-gradient(to right, #a0c4ff,rgb(77, 133, 223))",
};

function Query() {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-between me-90">
          {/* Brand */}
          <h3>
            <a
              href="/"
              className="d-flex align-items-center mb-0 mb-lg-4 link-body-emphasis text-decoration-none fw-bold"
              style={{ marginLeft: "30px", marginTop: "20px" }}
            >
              QueryConnect
            </a>
          </h3>

          {/* Hamburger Button for Mobile */}
          <button
            className="btn btn-light d-lg-none me-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
            aria-controls="mobileSidebar"
          >
            <i className="bi bi-list fs-3"></i>
          </button>

          {/* Desktop Navigation */}
          <ul className="nav d-none d-lg-flex col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 nav nav-underline">
            <h5>
              <li>
                <a href="/" className="nav-link px-2 link-body-emphasis">
                  Solutions
                </a>
              </li>
            </h5>
            <h5>
              <li>
                <a href="/" className="nav-link px-2 link-body-emphasis">
                  Get Premium
                </a>
              </li>
            </h5>
            <h5>
              <li>
                <a href="/" className="nav-link px-2 link-body-emphasis">
                  Private Tutors
                </a>
              </li>
            </h5>
          </ul>

          {/* Profile Dropdown */}
          <div className="dropdown text-end d-flex align-items-center">
            <a
              href="/"
              className="d-flex align-items-center text-decoration-none dropdown-toggle ms-3 me-3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>

              <span className="ms-2">
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </a>

            <ul className="dropdown-menu text-small text-end">
              <li>
                <a className="dropdown-item" href="/">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Refer and earn
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Contact us
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/login">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile (Offcanvas) */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 id="mobileSidebarLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
              <a href="/" className="nav-link fw-bold fs-5">
                Solutions
              </a>
            </li>
            <li>
              <a href="/" className="nav-link fw-bold fs-5">
                Get Premium
              </a>
            </li>
            <li>
              <a href="/" className="nav-link fw-bold fs-5">
                Private Tutors
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Section */}
      <hr className="my-0" style={{ margin: "1px" }} />
      <div
        className="w-100 min-vh-100 px-5 py-5"
        style={containerStyle}
      >
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={img}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="400"
              height="200"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Get Expert Solutions!
            </h1>
            <div className="Search-box">
              <Reach />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Query;
