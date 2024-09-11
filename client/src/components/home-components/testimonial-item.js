import React from "react";

import "./testimonials.scss";

const TestimonialItem = ({ id, review, name, testiImg, slideOption }) => {
  const testimonialClassName =
    id === 1 ? "carousel-item active" : "carousel-item";
  return (
    <div className={testimonialClassName} data-bs-interval={5000}>
      <div
        className="d-flex flex-column flex-md-row justify-content-center  text-start w-100"
        data-bs-slide={slideOption}
      >
        <div className="pe-5 ps-5">
          <p className="fs-5 title pb-2">Business Testimonial</p>
          <img
            src={testiImg}
            alt="img"
            className="img-fluid d-md-none img-fluid"
          />

          <p className="fs-6 pb-2">{review}</p>
          <p className="fs-6 pb-2">{name}</p>
        </div>
        <div className="ps-5 pe-5 ">
          <img
            src={testiImg}
            alt="img"
            className="d-none d-md-block img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
