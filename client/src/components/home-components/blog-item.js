import React from "react";
import { Link } from "react-router-dom";
import "./blog.scss";

const BlogItem = ({ image, title, description, blogId }) => {
  return (
    <div className="border-styles d-flex flex-column m-2 text-start shadow">
      <div className="w-100">
        <img src={image} alt="img" className="img-fluid w-100" />
      </div>
      <div className="p-3 pb-0 flex-grow-1">
        <p className="fs-5 fw-bold">{title}</p>
        <p className="fs-6">{description}</p>
      </div>
      <div className="text-end p-3 pt-0">
        <Link to={`/blogs/${blogId}`} className="text-underline text-dark">
          <span className="fs-6 ">View more</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
