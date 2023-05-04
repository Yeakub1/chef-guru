import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import {  Link, useLoaderData } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";


const UserDetails = () => {
    const chef = useLoaderData();
    const {
      name,
      experience,
      photo,
      foodItems,
      description,
      like,
      Recipe,
      food,
      Ingredients,
      RecipeName,
      foodItemsd,
      reting,
    } = chef;
    return (
      <Container>
        <h4 className="text-center mt-5 mb-5 bg-warning p-5">Chef details </h4>
        <div className="d-flex justify-content-between">
          <div className="col-md-4">
            <Card.Img className="w-50 " variant="top" src={photo} />
            <Card.Title>{name}</Card.Title>
          </div>
          <div className="col-md-4">
            <Card.Body className="text-center">
              <Card.Text>
                <p> Experience: {experience}</p>

                <p>
                  {" "}
                  <span className="text-primary ">Food Items:</span> {foodItems}{" "}
                </p>
                <p>
                  {" "}
                  <AiFillLike /> {like}{" "}
                </p>
                <p>
                  <span className="text-primary ">Description:</span>{" "}
                  {description}
                </p>

                <p>
                  <span className="text-primary ">Recipe:</span> {Recipe}
                </p>
              </Card.Text>
            </Card.Body>
          </div>
          <div className="col-md-4 mr-0">
            <Card style={{ width: "18rem" }}>
              <Card.Img className="" variant="top" src={food} />
              <Card.Body>
                <Card.Title>{RecipeName}</Card.Title>
                <Card.Text>
                  <span className="text-primary ">Ingredients:</span>{" "}
                  {foodItemsd}
                </Card.Text>
                <Card.Text>
                  <span className="text-primary ">Reting : </span> {reting}
                </Card.Text>
                <Button variant="primary">Favorite</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
        >
          <button className="px-4 py-2 bg-primary border-0 mb-5">
            Back to homepage
          </button>
        </Link>
      </Container>
    );
};

export default UserDetails;