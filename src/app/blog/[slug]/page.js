import React from "react";

const BlogPost = ({ params }) => {
  return (
    <div>
      <h1 className="text-3xl">Blog Post</h1>
      <p> {params.slug} </p>
    </div>
  );
};

export default BlogPost;
