import React from "react";
import Logo from "../assets/bizikintlogo.svg";
import "./home-components/joinus.js";
import Social from "./home-components/soical.js";
import logo from "../assets/logo-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-5 bg-5">
      <div className="flex-fill text-center">
        <img src={Logo} alt="img" className="img-fluid " />
      </div>
      <Social styles={"text-end p-5 w-20"} />
      <hr className="bg-white" />
      <div className="container">
        <div className="row text-white">
          <div className="p-3 reachus text-start d-flex flex-column col-12 col-md-4 col-lg-4">
            <p className="fs-6 fw-bold">Reach us</p>
            <p className="pb-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-telephone-fill me-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
              </span>
              +91 7095355556
            </p>
            <p className="pb-3 text-break">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill me-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
              </span>
              biziknitcommunity@gmail.com
            </p>
            <p className="pb-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill me-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </span>
              #39-14-8/5 Madhavadara-Murali nagar, Beside ICICI Bank
              Visakhapatnam -530007
            </p>
          </div>

          <div className="p-3 pages d-flex flex-column  col-12 col-md-2 col-lg-2">
            <p className="fs-6 fw-bold ">Pages</p>
            <Link to="/" className="text-decoration-none text-white pb-3">
              <p className="fs-6">Home</p>
            </Link>
            <Link
              to="/aboutus"
              className="text-decoration-none text-white pb-3"
            >
              <p className="fs-6">About Us</p>
            </Link>
            <Link to="/blogs" className="text-decoration-none text-white  pb-3">
              <p className="fs-6">Blogs</p>
            </Link>
            <Link
              to="/contactus"
              className="text-decoration-none text-white pb-3"
            >
              <p className="fs-6">Contact Us</p>
            </Link>
          </div>

          <div className="p-3 legal d-flex flex-column col-12 col-md-2 col-lg-2">
            <p className="fs-6 fw-bold">Legal</p>
            <p className="fs-6 pb-3">Privacy Policy</p>
            <p className="fs-6 pb-3">Terms and Services</p>
            <p className="fs-6 pb-3">Terms of Use</p>
          </div>

          <div className="p-3 subscribe col-12 col-md-4 col-lg-4">
            <p className="fs-4 fw-bold ">Subscribe to our newsletter</p>
            <p className="fs-6 pb-3">Be the first to receive any new updated</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn bg-button"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white flex-grow-1">
        Biziknit © 2024. All Rights Reserved
      </div>
      <div className="text-end text-white ">
        A Product From
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
