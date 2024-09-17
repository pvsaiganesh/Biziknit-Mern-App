import React from "react";
import "./navbar.scss";
import Logo from "../../assets/biziknitlogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark w-100">
        <div className="container-fluid">
          <div className="ps-0 ps-md-5 ">
            <Link to={"/"} className="text-decoration-none text-start">
              <img src={Logo} alt="img" className="logo img-fluid" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="ml-auto collapse navbar-collapse text-white pe-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto ps-5 mb-2 mb-lg-0 text-uppercase justify-content-right ">
              <li className="nav-item pe-4">
                <Link to={"/"} className="text-decoration-none text-start">
                  <span
                    className="nav-link active text-decoration-none "
                    aria-current="page"
                    href="#Home"
                  >
                    Home
                  </span>
                </Link>
              </li>

              <li className="nav-item pe-4">
                <Link
                  to={"/aboutus"}
                  className="text-decoration-none text-start"
                >
                  <span className="nav-link active pe-2" href="#Home">
                    About Us
                  </span>
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link to={"/blogs"} className="text-decoration-none text-start">
                  <span className="nav-link active pe-2" href="#Home">
                    BLOGS
                  </span>
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link
                  to={"/contactus"}
                  className="text-decoration-none text-start"
                >
                  <span className="nav-link active pe-2" href="#Home">
                    CONTACT
                  </span>
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link to={"/login"} className="text-decoration-none text-start">
                  <span className="nav-link active pe-2" href="#Home">
                    LOGIN
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/register"}
                  className="text-decoration-none text-start"
                >
                  <button
                    className="btn btn-outline-light text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
