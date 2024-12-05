import Link from "next/link";
import React from "react";

const ProductPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-red-300">Product Page</h1>
      <Link href="/product/single-1"> product 1 </Link>
      <Link href="/product/single-2"> product 2 </Link>
    </div>
  );
};

export default ProductPage;
