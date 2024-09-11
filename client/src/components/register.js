import React from "react";
import "./register.scss";
import InputComp from "./register-components/input-comp";

const Register = () => {
  const ele1 = { label: "Full Name", type: "text" };
  const ele2 = { label: "Name of Firm", type: "text" };
  const ele3 = { label: "Business Category", type: "select" };
  const ele4 = { label: "Phone Number", type: "text" };
  const ele5 = { label: "Address", type: "text" };
  const ele6 = { label: "Landmark", type: "text" };
  const ele7 = { label: "Pin code", type: "text" };
  const ele8 = {
    label: "Location Map",
    icon: <i className="bi bi-geo-alt" />,
    type: "location",
    func: function getLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    },
  };
  const ele10 = {
    label: "Joining Date",
    icon: <i className="bi bi-geo-alt" />,
    type: "date",
  };
  const ele11 = {
    label: "Amount",
    defaultValue: 1000,
    type: "number",
    button: true,
  };
  const ele12 = {
    label: "Profile Pic",
    icon: <i className="bi bi-geo-alt" />,
    type: "file",
  };
  const ele13 = {
    label: "Description",
    icon: <i className="bi bi-geo-alt" />,
    type: "textarea",
  };

  return (
    <div
      id="register"
      className="d-flex flex-column flex-md-row justify-content-start hero"
    >
      <div className="d-block d-md-none  bg-3 vw-100">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-center horizontal-register-text">
            <span
              fill="transparent"
              className=" register-text-width"
              stroke="true"
            >
              Register
            </span>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block  bg-3">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <div className="register-text text-center">
            <span
              fill="transparent"
              className=" register-text-width"
              stroke="true"
            >
              Register
            </span>
          </div>
        </div>
      </div>
      <div className=" p-5 m-0 d-flex flex-row justify-content-center align-items-center flex-grow-1">
        <div className="p-4 pt-2 pb-2 text-start border rounded w-100  shadow">
          <p className="fs-3 m-0 ps-2 ">Register</p>
          <p className="fs-6 m-0 ps-2 ">
            Hey enter your details to create your account
          </p>
          <div className="text-start d-flex flex-column flex-lg-row justify-content-between">
            <div className="d-flex flex-column flex-fill p-5 pb-2 ps-0 pe-lg-5">
              <InputComp {...ele1} />
              <InputComp {...ele2} />
              <InputComp {...ele3} />
              <InputComp {...ele8} />
              <InputComp {...ele10} />
              <InputComp {...ele12} />
            </div>
            <div className="d-flex flex-column flex-fill p-5 pb-2 pe-0 ps-0">
              <InputComp {...ele4} />
              <InputComp {...ele5} />
              <InputComp {...ele6} />
              <InputComp {...ele7} />
              <InputComp {...ele11} />
              <InputComp {...ele13} />
            </div>
          </div>
          <div className="mt-3 text-start  ps-2 ">
            <button type="submit" className="bg-button ps-3 pe-3 pt-2 pb-2">
              Register
            </button>
            <p className="mt-2">
              Already have logins!?{" "}
              <span className="text-orange-color">Login here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
