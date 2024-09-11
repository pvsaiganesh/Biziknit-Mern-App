import React from "react";
import "./joinus.scss";

const JoinUs = () => {
  return (
    <div className="bg-5 d-flex flex-column flex-md-row justify-content-md-between align-items-center p-5  text-white text-center text-md-start">
      <div>
        <p className="fs-5">Join Us For Meeting</p>
        <p className="fs-6">
          Visiting a Biziknit Chapter is free and gives you the chance to
          connect with quality business professionals from your local community
          to explore opportunities
        </p>
      </div>
      <div>
        <button className="btn btn-light text-black">
          Search your pincode
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
