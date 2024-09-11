import React from "react";
import img from "../../assets/img.png";
import "./whatisbiziknit.scss";

const WhatIsBiziknit = () => {
  return (
    <>
      <div className="d-block d-md-none">
        <img src={img} alt="img" className="img-fluid p-5" />
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-white">
        <div className="pe-5">
          <div className="text-start ">
            <p className="fs-4 headings fw-bolder">What is Biziknit?</p>
            <p className="fs-6">
              Biziknit is a group of ambitious business owners who meet every
              week over breakfast and help each other to optimize and develop
              their businesses and their personal lives.
            </p>
          </div>
          <div className="text-start">
            <p className="fs-5 headings fw-bolder">Supercharge your Business</p>
            <p className="fs-6">
              Supercharge your Business Expand your customer base and sales
              through quality referrals and Achievers special mechanisms. An
              absolute win- win for both you and your customers.
            </p>
          </div>
          <div className="text-start">
            <p className="fs-5 headings fw-bolder">
              Have a Meaningful Social life
            </p>
            <p className="fs-6">
              Be a part of a close-knit community of successful business owners
              who are passionate about helping each other and the society at
              large.
            </p>
          </div>
          <div className="text-start">
            <p className="fs-5 headings fw-bolder">
              Accelerate your Personal Growth
            </p>
            <p className="fs-6">
              With valuable trainings and sessions, become a lifelong learner
              and develop your mind, body and soul.
            </p>
          </div>
        </div>
        <div className="d-none d-md-block">
          <img src={img} alt="img" />
        </div>
      </div>
    </>
  );
};

export default WhatIsBiziknit;
