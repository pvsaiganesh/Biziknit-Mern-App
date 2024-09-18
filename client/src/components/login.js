import React, { useState } from "react";
import "./login.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const ele1 = {
    id: "username",
    label: "Phone Number",
    type: "text",
    onChange: (e) => {
      setPhoneNumber(e.target.value);
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
      .post("http://localhost:3001/login", { phonenumber, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/");
        } else if (result.data === "No record existed") {
          // navigate("/register");
          if (
            window.confirm(
              "You are not registered with Biziknit. Do you want to Register with us."
            )
          ) {
            navigate("/register");
          }
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
            <div className="p-3  p-md-5 border-rounded  shadow flex-fill text-center text-md-start ms-md-5 me-md-5">
              <p className="fs-3 m-0 fw-bold headings">Login</p>
              <p className="fs-6 ">Enter your details</p>
              <div className="text-start d-flex flex-column flex-md-row justify-content-start flex-fill">
                <div className="d-flex flex-column flex-fill">
                  <div className=" p-1 pb-1 ps-1 pe-1 w-100">
                    <label htmlFor="username" className="form-label">
                      {ele1.label}
                    </label>
                    <div className="input-group input-group-sm">
                      <span className="input-group-text">+91</span>
                      <input
                        type={ele1.type}
                        pattern="[789][0-9]{9}"
                        onChange={ele1.onChange}
                        className="form-control"
                        id="username"
                        required
                        aria-describedby="basic-addon3 basic-addon4 button-addon2"
                      />
                    </div>
                  </div>
                  <div className=" p-1 pb-1 ps-1 pe-1 w-100">
                    <label htmlFor="password" className="form-label">
                      {ele2.label}
                    </label>
                    <div className="input-group input-group-sm">
                      <input
                        type={ele2.type}
                        onChange={ele2.onChange}
                        className="form-control"
                        id="password"
                        aria-describedby="basic-addon3 basic-addon4 button-addon2"
                      />
                    </div>
                  </div>
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
                  Don’t have an Account?
                  <Link to="/register" className="text-decoration-none">
                    <span className="text-orange-color">Register</span>
                  </Link>
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
