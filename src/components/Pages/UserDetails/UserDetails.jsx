import React from 'react';
import { Card, Container } from 'react-bootstrap';
import {  useLoaderData } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";


const UserDetails = () => {
    const chef = useLoaderData();
    const { name, experience, photo, foodItems, description, like } = chef;
    return (
      <Container>
        <h4 className="text-center mt-5 mb-5 bg-warning p-5">Chef details </h4>
        <div className="d-flex ">
          <div className="col-md-4">
            <Card.Img className="w-50 " variant="top" src={photo} />
            <Card.Title>{name}</Card.Title>
          </div>
          <div className="col-md-6">
            <Card.Body className="text-center">
              <Card.Text>
                <p> Experience: {experience}</p>
                <p> Items: {foodItems} </p>
                <p>
                  {" "}
                  <AiFillLike /> {like}{" "}
                </p>
                <p>{description}</p>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Container>
    );
};

export default UserDetails;