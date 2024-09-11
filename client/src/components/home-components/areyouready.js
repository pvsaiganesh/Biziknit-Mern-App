import React from "react";
import "./reg-card.scss";
// import InputComp from "./input-comp";
import { Link } from "react-router-dom";

const ReadyCard = () => {
  return (
    <div className=" bg-6 p-5 text-white d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-between text-center">
        <div className="text-center">
          <p className="fs-5 mb-0">
            Join us and be a part of the potential business group
          </p>
          <p className="fs-6">Helping you in finding potential prospects</p>
        </div>
        <div>
          <Link to={"/register"}>
            <button type="submit" className="btn btn-outline-light">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadyCard;
