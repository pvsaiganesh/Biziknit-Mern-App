import React from "react";
import Navbar from "./home-components/navbar";
import Footer from "./footer";
import Social from "./home-components/soical";
import Letter from "../assets/letter_send.svg";
import "./contactus.scss";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="text-center hero p-5">
        <div className="p-3">
          <p className="fs-2 text-orange-color">Contact Us</p>
          <p className="fs-4">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div className="container shadow p-4 mb-5">
          <div className="row">
            <div className="col-12 col-md-6 text-white contact-info bg-11 text-start p-5">
              <p className="fs-4">Contact Information</p>
              <p className="fs-5 pb-5">Say something to start a live chat!</p>
              <p className=" fs-5 pb-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
              <p className="pb-5 fs-5 text-break">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-envelope-fill me-4"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                  </svg>
                </span>
                biziknitcommunity@gmail.com
              </p>
              <p className="pb-5 fs-5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
              <Social styles="text-start" />
            </div>
            <div className="col-12 col-md-6 contact-form text-start p-5">
              <div class="input-group-sm flex-wrap pb-5">
                <label htmlFor="fullName" className="form-label fw-bold fs-5">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control contact-form-input"
                  aria-label="Full Name"
                  id="fullName"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div class="input-group-sm flex-wrap pb-5">
                <label htmlFor="fullName" className="form-label fw-bold fs-5">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control contact-form-input"
                  aria-label="Full Name"
                  id="fullName"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div class="input-group-sm flex-wrap pb-5">
                <label htmlFor="email" className="form-label fw-bold fs-5">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control contact-form-input"
                  aria-label="Full Name"
                  id="email"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div class="input-group-sm flex-wrap pb-5">
                <label htmlFor="message" className="form-label fw-bold fs-5">
                  Message
                </label>
                <input
                  type="text"
                  className="form-control contact-form-input"
                  aria-label="message"
                  placeholder="Write a message"
                  id="message"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="text-end">
                <button
                  className="btn btn-lg   text-white send-message-button p-3  position-relative"
                  type="button "
                  id="button-addon2"
                >
                  Send Message
                  <span className="top-0 bottom-0 start-0  position-absolute">
                    <img src={Letter} alt="letter" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
