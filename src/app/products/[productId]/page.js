import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1 className="text-4xl">Dynamic Product Page {params.productId} </h1>
    </div>
  );
};

export default DynamicPage;
