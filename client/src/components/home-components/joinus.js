import React from "react";
import "./joinus.scss";

const JoinUs = () => {
  return (
    <div className="bg-5 container-fluid d-flex flex-column flex-md-row  align-items-center p-2 p-md-5  text-white text-center text-md-start">
      <div className="row">
        <div className="d-block d-md-none col-12">
          <p className="fs-5 fw-bold">Join Us For Meeting</p>
          <p className="fs-6">
            Visiting a Biziknit Chapter is free and gives you the chance to
            connect with quality business professionals from your local
            community to explore opportunities
          </p>
        </div>
        <div className="d-none d-md-block col-8">
          <p className="fs-5 fw-bold headings">
            Secure Your Spot! Be the Exclusive Business in Your Pincode.
          </p>
          <p className="fs-6">
            Only one business per category per pincode is allowed—join us now to
            claim your category and become the sole provider in your area before
            it's taken!
          </p>
        </div>
        <div className="col-12 col-md-4 text-center text-md-end align-self-center">
          <button className="btn btn-light text-black fw-bold">
            Search in your pincode
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
