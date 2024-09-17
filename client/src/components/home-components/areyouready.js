import React from "react";
import "./reg-card.scss";
// import InputComp from "./input-comp";
import { Link } from "react-router-dom";

const ReadyCard = () => {
  return (
    <div className="bg-12 d-flex flex-column flex-md-row justify-content-md-center p-2 p-md-5  text-white text-center mb-5">
      <div className="pe-2">
        <p className="fs-4 fw-bold mb-0 headings">Are You Ready</p>
        <p className="fs-6 fw-bold">To scale up your business with us</p>
        <Link to={"/register"} className="text-decoration-none text-start">
          <button className="btn btn-outline-light fw-bold" type="submit">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReadyCard;
