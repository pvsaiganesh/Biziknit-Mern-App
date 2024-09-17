import React from "react";
import img from "../../assets/img-2.png";
import "./ourvalues.scss";

const OurValues = () => {
  return (
    <div className="container-fluid">
      <div className="row p-2 p-md-5">
        <div className="col-12 d-block d-md-none text-center">
          <img src={img} alt="img" className="img-fluid  p-5" />
        </div>
        <div className="d-none d-md-block col-md-4">
          <img src={img} alt="img" className="img-fluid" />
        </div>
        <div className="col-12 col-md-8 d-flex flex-row justify-content-between align-items-start bg-white">
          <div>
            <div className="text-start">
              <p className="fs-3 fw-bolder headings text-orange-color">
                Our Values
              </p>

              <ul>
                <li className="p-2">
                  <span className="fw-bolder">Balanced Success: </span>{" "}
                  Prioritize all aspects of your well-being—physical, mental,
                  social, and financial.
                </li>
                <li className="p-2">
                  <span className="fw-bolder">Meaningful Bonds: </span>
                  Build deeper, fulfilling relationships within a supportive
                  community.
                </li>
                <li className="p-2">
                  <span className="fw-bolder"> Give and Grow: </span> Foster
                  success through gratitude and a spirit of mutual support.
                </li>
                <li className="p-2">
                  <span className="fw-bolder"> Family at the Heart: </span>
                  Celebrate family involvement, recognizing its impact on
                  personal and professional growth.
                </li>
                <li className="p-2">
                  <span className="fw-bolder">Purpose - Driven Impact: </span>
                  Commit to societal contributions and embrace your role in
                  making a difference.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
