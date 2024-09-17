import React from "react";
import "./reg-card.scss";
import { Link } from "react-router-dom";
import modalImg from "../../assets/modal-img.svg";

const RegCard = () => {
  return (
    <div className="bg-4 ">
      <div className="p-2 p-md-5 text-white d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column flex-md-row justify-content-between w-100 text-center text-md-start">
          <div>
            <p className="fs-5 fw-bold mb-0 headings">
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
      <div className="d-none d-md-block ">
        <p
          data-bs-toggle="modal"
          data-bs-target="#registerModal"
          className="fs-6 text-white text-decoration-underline text-end pe-5 pb-2 register-link"
        >
          Why you should register?
        </p>
        <div
          className="modal fade"
          id="registerModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content rounded-3  bg">
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 text-white position-relative">
                      <p className="fs-4 fw-bold">Why You Should Register</p>
                      <ul className="p-0 m-0">
                        <li className="fs-6">
                          <i className="bi bi-star-fill pe-3"></i>
                          <span className="fw-bold">
                            Exclusive Coverage:
                          </span>{" "}
                          Be the go-to business in your area with unique
                          visibility to local clients.
                        </li>
                        <li className="fs-6">
                          <i className="bi bi-star-fill pe-3"></i>
                          <span className="fw-bold">
                            Network With Peers:
                          </span>{" "}
                          Build connections with like-minded business owners who
                          can offer support, encouragement, and referral
                          opportunities.
                        </li>
                        <li className="fs-6">
                          <i className="bi bi-star-fill pe-3"></i>
                          <span className="fw-bold">
                            Streamlined Lead Generation:
                          </span>{" "}
                          Leverage our state-of-the-art technology to receive
                          quality leads without lifting a finger.
                        </li>
                        <li className="fs-6">
                          <i className="bi bi-star-fill pe-3"></i>
                          <span className="fw-bold">
                            Resource Sharing:
                          </span>{" "}
                          Gain access to valuable resources including marketing
                          tips, business tools, and educational content from
                          experts.
                        </li>
                      </ul>
                      <Link to={"/register"}>
                        <button
                          type="submit"
                          className="btn btn-light text-uppercase text-orange-color mt-3"
                        >
                          Register Now
                        </button>
                      </Link>
                      <div className="position-absolute  bottom-0 start-100">
                        <img src={modalImg} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegCard;
