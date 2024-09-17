import React, { useState } from "react";
import "./login.scss";
import InputComp from "./register-components/input-comp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const ele1 = {
    label: "Phone Number",
    type: "text",
    onChange: (e) => {
      setUsername(e.target.value);
    },
  };
  const ele2 = {
    label: "Password",
    type: "password",
    onChange: (e) => {
      setPassword(e.target.value);
    },
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else {
          navigate("/register");
          alert("You are not registered to this service");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      id="login"
      className="d-flex flex-column flex-md-row justify-content-start justify-content-md-start align-items-center align-items-md-stretch hero"
    >
      <div className="d-block d-md-none bg-3 vw-100">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-center horizontal-register-text">
            <span
              fill="transparent"
              className=" register-text-width"
              stroke="true"
            >
              Login
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
              Login
            </span>
          </div>
        </div>
      </div>
      <div className="p-3  p-md-5 login-container">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row justify-content-center justify-content-md-start align-items-center">
            <div className="p-3  p-md-5 border-rounded  shadow flex-fill text-center text-md-start ms-5 me-5">
              <p className="fs-3 m-0 fw-bold">Login</p>
              <p className="fs-6 ">Enter your details</p>
              <div className="text-start d-flex flex-column flex-md-row justify-content-start flex-fill">
                <div className="d-flex flex-column flex-fill">
                  <InputComp {...ele1} />
                  <InputComp {...ele2} />
                </div>
              </div>
              <div className="mt-3 text-start  ps-2 ">
                <button
                  type="submit"
                  className="bg-button ps-5 pe-5 pt-2 pb-2 w-100 mt-3"
                >
                  Login
                </button>
                <p className="pt-3">
                  Don’t have an Account?{" "}
                  <span className="text-orange-color">Register</span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
