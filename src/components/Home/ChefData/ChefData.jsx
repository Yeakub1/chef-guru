import React from "react";
import { Card, Container } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefData = ({ chef }) => {
  const { _id, name, Experience, Items, like, img } = chef;
  return (
    <Container>
      <div className="">
        <div className="mt-5 row " style={{ width: "18rem" }}>
          <LazyLoad>
            <Card.Img variant="top" src={img} />
          </LazyLoad>
          <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p> Experience: {Experience} Years</p>
              <p> Items: {Items} </p>
              <p>
                {" "}
                <AiFillLike /> {like}{" "}
              </p>
              <button className="px-4 py-2 rounded-pill  bg-warning border-0">
                <Link
                  to={`/news/${_id}`}
                  className="text-decoration-none text-white"
                >
                  View Recipes
                </Link>
              </button>
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Container>
  );
};

export default ChefData;
