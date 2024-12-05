import React from "react";

const Product = ({ params }) => {
  return (
    <div>
      <h1 className="text-5xl">Single Product</h1>
      <p> {params.slug} </p>
    </div>
  );
};

export default Product;
