import React from "react";
import { Card, Container } from "react-bootstrap";
import './ChefData.css'
import { AiFillLike } from "react-icons/ai";

const ChefData = ({ chef }) => {
  const { _id, name, Experience, Items, like, img } = chef;
  return (
    <Container>
      <div className="chef-card">
        <Card className="card-details">
          <Card.Img variant="top" src={img} />
          <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p> Experience: {Experience} Years</p>
              <p> Items: {Items} </p>
              <p>
                {" "}
                <AiFillLike /> {like}{" "}
              </p>
              <button className="px-4 py-2 rounded-pill text-white bg-warning border-0">
                Details
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ChefData;
