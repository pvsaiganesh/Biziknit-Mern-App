import React from "react";
import { blogItems } from "./constants";

const BlogPage = ({ blogId }) => {
  const blogItem = blogItems.find((item) => item.blogId === blogId);
  const { pageTitle, pageDescription, pageImage } = blogItem;
  return (
    <div className="p-5">
      <div className="pb-3 text-center">{pageImage}</div>
      <div className="text-start">
        {pageTitle}
        {pageDescription}
      </div>
    </div>
  );
};

export default BlogPage;
