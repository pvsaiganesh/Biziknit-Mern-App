import React from "react";
import BlogItem from "./blog-item";
import "./blog.scss";
import { blogItems } from "../constants";

const Blogs = () => {
  return (
    <>
      <p className="text-center fw-bolder fs-3 org-color pt-5">Blogs</p>
      <div className="p-5 d-flex flex-column flex-md-row justify-content-around flex-wrap flex-sm-nowrap">
        {blogItems.map((item) => {
          return <BlogItem {...item} key={item.blogId} />;
        })}
      </div>
    </>
  );
};

export default Blogs;
