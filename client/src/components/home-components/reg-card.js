import React from "react";
import "./reg-card.scss";
// import InputComp from "./input-comp";
import { Link } from "react-router-dom";

const RegCard = () => {
  return (
    <div className="bg-4 p-5 text-white d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column flex-md-row justify-content-between w-100 text-center text-md-start">
        <div>
          <p className="fs-5 mb-0">
            Join us and be a part of the potential business group
          </p>
          <p className="fs-6">Helping you in finding potential prospects</p>
        </div>
        {/* <div className="d-flex flex-row justify-between">
            <InputComp placeholder={"Name"} />
            <InputComp placeholder={"Phone number"} />
            <InputComp placeholder={"Business name"} />
          </div>
          <div className="d-flex flex-row justify-between">
            <InputComp placeholder={"Business type"} />
            <InputComp placeholder={"Pin code"} />
            <InputComp placeholder={"Want to Join Us"} dropdown={true} />
          </div> */}
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

export default RegCard;
