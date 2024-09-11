import React from "react";
import img from "../../assets/img-2.png";
import "./ourvalues.scss";

const OurValues = () => {
  return (
    <>
      <div className="p-5 d-block d-md-none text-center">
        <img src={img} alt="img" className="img-fluid" />
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-white">
        <div className="p-5 d-none d-md-block ">
          <img src={img} alt="img" />
        </div>
        <div>
          <div className="text-start">
            <p className="fs-4 headings fw-bolder">Our Values</p>
            <ul>
              <li>
                <span className="fw-bolder">Holistic well-being-</span> Biziknit
                gives equal importance to your physical, mental, social and
                financial well being
              </li>
              <li>
                <span className="fw-bolder">Relationships, Not Contacts-</span>
                Biziknit Believes in the power of healthy and fulfilling
                relationships and provides a wholesome community to its members
              </li>
              <li>
                <span className="fw-bolder">Gratitude and reciprocity- </span>{" "}
                Growth comes with a spirit of gratitude and a willingness to
                extend a helping hand.
              </li>
              <li>
                <span className="fw-bolder">Family involvement-</span> We
                believe that family pays an important role in one’s life and
                seek to increase family involvement at every step
              </li>
              <li>
                <span className="fw-bolder">Contribution to Society-</span>{" "}
                achievers regularly contributes to social causes and we strongly
                believe in the social obligation of individuals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurValues;
