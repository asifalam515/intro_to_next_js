import React from "react";

const Meal = ({ params }) => {
  return (
    <div>
      <h1>Meal no </h1>
      <h1> {params.slug} </h1>
    </div>
  );
};

export default Meal;
