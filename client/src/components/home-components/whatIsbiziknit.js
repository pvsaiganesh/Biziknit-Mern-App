import React from "react";
import img from "../../assets/img.png";
import "./whatisbiziknit.scss";

const WhatIsBiziknit = () => {
  return (
    <div className="container-fluid">
      <div className="row p-2 p-md-5">
        <div className="d-block d-md-none  col-12 ">
          <img src={img} alt="img" className="img-fluid p-5" />
        </div>
        <div className="bg-white col-12 col-md-6">
          <div className="text-start ">
            <p className="fs-4 headings fw-bolder text-orange-color">
              What is Biziknit?
            </p>
            <p className="fs-6">
              Biziknit is a group of ambitious business owners who meet every
              week over breakfast and help each other to optimize and develop
              their businesses and their personal lives.
            </p>
          </div>
          <div className="text-start">
            <p className="fs-5 headings fw-bolder text-orange-color">
              Supercharge your Business
            </p>
            <p className="fs-6">
              Gain a competitive edge as the only business of your kind in your
              area. Benefit from referrals and auto lead generation to grow your
              business.
            </p>
          </div>
          <div className="text-start">
            <p className="fs-5 headings fw-bolder text-orange-color">
              Have a Meaningful Social life
            </p>
            <p className="fs-6">
              Build real connections with fellow business owners who understand
              your journey. Find both professional support and lasting
              friendships.
            </p>
          </div>
          <div className="text-start">
            <p className="fs-5 headings fw-bolder text-orange-color">
              Accelerate your Personal Growth
            </p>
            <p className="fs-6">
              Access learning opportunities that boost your business skills and
              personal well-being. Grow professionally and personally with
              Biziknit.
            </p>
          </div>
        </div>
        <div className="d-none d-md-block col-6">
          <img src={img} alt="img" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default WhatIsBiziknit;
