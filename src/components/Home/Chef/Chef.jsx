import React, { useEffect, useState } from "react";
import ChefData from "../ChefData/ChefData";
import './Chef.css'
import { Container } from "react-bootstrap";

const Chef = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/card/")
        .then((response) => response.json())
        .then((data) => setServicesData(data));
    }, []);
 
  return (
    <Container className="">
      <h2 className="text-center mb-5 mt-5">Chef Team</h2>
      <div className="chef-card">
        {servicesData.map((chef) => (
          <ChefData key={chef._id} chef={chef}></ChefData>
        ))}
      </div>
    </Container>
  );
};

export default Chef;
