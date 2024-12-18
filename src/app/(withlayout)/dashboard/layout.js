import Footer from "@/app/footer/page";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
