import Link from "next/link";
import React from "react";

const MealPage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl">this is meal page</h1>

      <Link href="/meals/1">Meal1</Link>

      <Link href="/meals/2">Meal2</Link>
    </div>
  );
};

export default MealPage;
