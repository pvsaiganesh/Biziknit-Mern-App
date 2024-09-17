import React, { useState } from "react";
import "./register.scss";
import InputComp from "./register-components/input-comp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerFormState, setRegisterFormState] = useState({
    fullname: "",
    nameoffirm: "",
    businesscategory: "",
    phonenumber: "",
    address: "",
    landmark: "",
    pincode: "",
    location: "",
    joiningdate: new Date(),
    profilepic: "",
    description: "",
  });
  const ele1 = {
    label: "Full Name",
    type: "text",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        fullname: e.target.value,
      }));
    },
  };
  const ele2 = {
    label: "Name of Firm",
    type: "text",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        nameoffirm: e.target.value,
      }));
    },
  };
  const ele3 = {
    label: "Business Category",
    type: "select",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        businesscategory: e.target.value,
      }));
    },
  };
  const ele4 = {
    label: "Phone Number",
    type: "text",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        phonenumber: e.target.value,
      }));
    },
  };
  const ele5 = {
    label: "Address",
    type: "text",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        address: e.target.value,
      }));
    },
  };
  const ele6 = {
    label: "Landmark",
    type: "text",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        landmark: e.target.value,
      }));
    },
  };
  const ele7 = {
    label: "Pin code",
    type: "text",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        pincode: e.target.value,
      }));
    },
  };
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
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        location: e.target.value,
      }));
    },
  };
  const ele10 = {
    label: "Joining Date",
    icon: <i className="bi bi-geo-alt" />,
    type: "date",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        joiningdate: e.target.value,
      }));
    },
  };
  // const ele11 = {
  //   label: "Amount",
  //   defaultValue: 1000,
  //   type: "number",
  //   button: true,
  // };
  const ele12 = {
    label: "Profile Pic",
    icon: <i className="bi bi-geo-alt" />,
    type: "file",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        profilepic: e.target.value,
      }));
    },
  };
  const ele13 = {
    label: "Description",
    icon: <i className="bi bi-geo-alt" />,
    type: "textarea",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        description: e.target.value,
      }));
    },
  };
  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", registerFormState)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
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
        <form onSubmit={onFormSubmit}>
          <div className="p-4 pt-2 pb-2 text-start border rounded w-100  shadow">
            <p className="fs-3 m-0 ps-2 fw-bold">Register</p>
            <p className="fs-6 m-0 ps-2 pb-4">
              Hey enter your details to create your account
            </p>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <InputComp {...ele1} />
                  <InputComp {...ele2} />
                  <InputComp {...ele3} />
                  <InputComp {...ele8} />
                  <InputComp {...ele10} />
                  <InputComp {...ele12} />
                </div>
                <div className="col-12 col-md-6">
                  <InputComp {...ele4} />
                  <InputComp {...ele5} />
                  <InputComp {...ele6} />
                  <InputComp {...ele7} />
                  <InputComp {...ele13} />
                </div>
              </div>
            </div>
            <div className="mt-4 text-start  ps-2 ">
              <button type="submit" className="bg-button ps-5 pe-5 pt-2 pb-2">
                Register
              </button>
              <p className="mt-2">
                Already have logins!?{" "}
                <span className="text-orange-color">Login here</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
