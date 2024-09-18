import React, { useState } from "react";
import "./register.scss";
import InputComp from "./register-components/input-comp";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
    email: "",
  });
  const ele1 = {
    id: "1",
    required: true,

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
    id: "2",
    required: true,

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
    id: "3",
    required: true,
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
    id: "4",
    required: true,

    label: "Phone Number",
    pattern: "[789][0-9]{9}",
    type: "text",
    onChange: (e) => {
      setRegisterFormState((prevState) => ({
        ...prevState,
        phonenumber: e.target.value,
      }));
    },
    invalidMessage: "Mobile Number does not exist",
  };
  const ele5 = {
    id: "5",
    required: true,
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
    id: "6",
    required: true,
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
    id: "7",
    required: true,
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
    id: "8",
    required: false,
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
    id: "10",
    required: true,
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
    id: "12",
    required: false,
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
    id: "13",
    required: true,
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
      .post("http://localhost:3001/register", { ...registerFormState })
      .then((result) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
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
          <div className="register-text text-center headings">
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
                <div className="col-12">
                  <div className="input-group-sm mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                      onChange={(e) => {
                        setRegisterFormState((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }));
                      }}
                      className="form-control"
                      placeholder="Enter your email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <InputComp key={ele1.id} {...ele1} />
                  <InputComp key={ele2.id} {...ele2} />
                  <InputComp key={ele3.id} {...ele3} />
                  <InputComp key={ele8.id} {...ele8} />
                  <InputComp key={ele10.id} {...ele10} />
                  <InputComp key={ele12.id} {...ele12} />
                </div>
                <div className="col-12 col-md-6">
                  <InputComp key={ele4.id} {...ele4} />
                  <InputComp key={ele5.id} {...ele5} />
                  <InputComp key={ele6.id} {...ele6} />
                  <InputComp key={ele7.id} {...ele7} />
                  <InputComp key={ele13.id} {...ele13} />
                </div>
              </div>
            </div>
            <div className="mt-4 text-start  ps-2 ">
              <button type="submit" className="bg-button ps-5 pe-5 pt-2 pb-2">
                Register
              </button>
              <p className="mt-2">
                Already have logins!?{" "}
                <Link to="/login" className="text-decoration-none">
                  <span className="text-orange-color">Login here</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
