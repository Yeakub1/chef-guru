import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";

const ChefDetails = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ChefDetails;
