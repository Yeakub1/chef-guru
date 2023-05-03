import React, { useEffect, useState } from "react";
// import { Card, Container } from "react-bootstrap";
// import frist from "../../../assets/team-img-2-4.jpg";
// import second from "../../../assets/team-img-2-2.jpg";
// import third from "../../../assets/team-img-2-3.jpg";
// import four from "../../../assets/photo-4a.jpg";
// import five from "../../../assets/team-img-2-1.jpg";
// import six from "../../../assets/photo-1a1.jpg";
// import { AiFillLike } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import ChefData from "../ChefData/ChefData";

const Chef = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/card/")
        .then((response) => response.json())
        .then((data) => setServicesData(data));
    }, []);
 
  return (
    <div className="">
      <h2 className="text-center mb-5 mt-5">Chef Team</h2>
      {servicesData.map((chef) => (
        <ChefData key={chef._id} chef={chef}></ChefData>
      ))}
    </div>
  );
};

export default Chef;
