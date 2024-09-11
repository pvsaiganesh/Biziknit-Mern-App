import React from "react";
import img from "../assets/vision.svg";
import img2 from "../assets/about-us-2.svg";
import img3 from "../assets/abouts-us-3.svg";
import { Splash } from "../assets/splash";
import Testimonials from "./home-components/testimonials";
import Footer from "./footer";
import "./aboutus.scss";
import Navbar from "./home-components/navbar";

const AboutUs = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero bg-9 d-flex flex-column justify-content-center align-items-center">
        <div style={{ position: "relative" }} className="svg-props">
          <Splash />
        </div>
        <div style={{ position: "absolute" }} className="heading-text">
          About Us
        </div>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-12 d-md-none pb-3">
            <img src={img} alt="img" className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 text-start">
            <p className="fs-4 text-orange-color  fw-bold">About Us</p>
            <p className="fs-6">
              At Biziknit, we understand the challenges faced by small business
              owners in today's competitive landscape. That's why we've created
              a unique platform that unites entrepreneurs in a specific pin
              code, enabling you to thrive together. By becoming a member, you
              aren't just joining a community; you are stepping into a world of
              possibilities where you’ll access valuable referrals, automated
              lead generation, and collaborative growth opportunities.
            </p>
            <p className="fs-6">
              <span className="fs-5 text-orange-color">Our vision</span> is to
              empower small and medium enterprises (SMEs) to become leaders in
              their local markets. Together, we can create a supportive
              ecosystem that fosters innovation and mutual success.
            </p>
          </div>
          <div className="col-5 d-none d-md-block">
            <img src={img} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-12 col-md-5 pb-3">
            <img src={img2} alt="img" className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 text-start">
            <p className="fs-4 text-orange-color fw-bold">How Biziknit Works</p>
            <ul>
              <li>
                <span className="text-orange-color">Find Your Community:</span>{" "}
                Once you join, you'll be categorized alongside other SMEs in
                your specific pin code. This ensures that you are part of an
                exclusive network where you can trust and rely on each other for
                referrals.
              </li>
              <li>
                <span className="text-orange-color">Receive Referrals:</span>{" "}
                Our members' loyal recommendations mean you get new clients
                right from the start. Connect with businesses that resonate with
                your services and create valuable partnerships.
              </li>
              <li>
                <span className="text-orange-color">
                  Automated Lead Generation:
                </span>{" "}
                Take the work out of prospecting! With our innovative auto lead
                generation methods, watch your potential clients come to you
                without the hassle.
              </li>
              <li>
                <span className="text-orange-color">Collaborate and Grow:</span>{" "}
                Take part in community events, workshops, and resources designed
                to enhance your skills and expand your business footprint.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-12 d-md-none pb-3">
            <img src={img3} alt="img" className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 text-start">
            <p className="fs-4 text-orange-color  fw-bold">
              Why Join Biziknit?
            </p>
            <ul>
              <li>
                <span className="text-orange-color">Exclusive Coverage:</span>
                Be the go-to business in your area with unique visibility to
                local clients.
              </li>
              <li>
                <span className="text-orange-color">Network With Peers:</span>
                Build connections with like-minded business owners who can offer
                support, encouragement, and referral opportunities.
              </li>
              <li>
                <span className="text-orange-color">
                  Streamlined Lead Generation:
                </span>
                Leverage our state-of-the-art technology to receive quality
                leads without lifting a finger.
              </li>
              <li>
                <span className="text-orange-color">Resource Sharing:</span>
                Gain access to valuable resources including marketing tips,
                business tools, and educational content from experts.
              </li>
            </ul>
          </div>
          <div className="col-5 d-none d-md-block">
            <img src={img3} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
      <Testimonials />

      <div className="bg-5 d-flex flex-column flex-md-row justify-content-md-between p-5  text-white text-center text-md-start mb-5">
        <div className="pe-2">
          <p className="fs-5">
            Secure Your Spot! Be the Exclusive Business in Your Pincode.
          </p>
          <p className="fs-6">
            Only one business per category per pincode is allowed—join us now to
            claim your category and become the sole provider in your area before
            it's taken!
          </p>
        </div>
        <div>
          <button className="btn btn-light text-black">
            Search your pincode
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
