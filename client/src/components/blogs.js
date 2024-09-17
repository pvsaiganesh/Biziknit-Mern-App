import React from "react";
import Blogs from "./home-components/blogs";
import { Splash } from "../assets/splash";
import "./blogs.scss";
import Footer from "./footer";
import Navbar from "./home-components/navbar";

const BlogsPage = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="bg-8 d-flex flex-column justify-content-center align-items-center">
        <div className="svg-props position-relative">
          <Splash />
        </div>
        <div className="heading-text position-absolute">Blogs</div>
      </div>
      <div>
        <Blogs />
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
