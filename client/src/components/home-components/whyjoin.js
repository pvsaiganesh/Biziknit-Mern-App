import React from "react";
import img from "../../assets/img-3.png";
import "./ourvalues.scss";

const WhyJoin = () => {
  return (
    <div className=" p-5 bg-white">
      <div className="pb-3 d-md-none">
        <img src={img} alt="img" className="img-fluid" />
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="text-start">
          <p className="fs-4 headings fw-bolder">Why Join Biziknit?</p>
          <ul>
            <li>
              <span className="fw-bolder">Exclusive Coverage: </span> Be the
              go-to business in your area with unique visibility to local
              clients.
            </li>
            <li>
              <span className="fw-bolder">Relationships, Not Contacts-</span>
              Be the go-to business in your area with unique visibility to local
              clients.
            </li>
            <li>
              <span className="fw-bolder">Network With Peers:</span> Build
              connections with like-minded business owners who can offer
              support, encouragement, and referral opportunities.
            </li>
            <li>
              <span className="fw-bolder">Streamlined Lead Generation:</span>{" "}
              Leverage our state-of-the-art technology to receive quality leads
              without lifting a finger.
            </li>
            <li>
              <span className="fw-bolder">Resource Sharing:</span>Gain access to
              valuable resources including marketing tips, business tools, and
              educational content from experts.
            </li>
          </ul>
        </div>
        <div className="p-5 d-none d-md-block">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
