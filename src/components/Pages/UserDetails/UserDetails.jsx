import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";

const UserDetails = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
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

  const handleClick = () => {
    setButtonDisabled(true);
    toast.success("Button clicked !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Container>
      <h4 className="text-center mt-5 mb-5 bg-warning p-5">Chef details </h4>
      <div className="d-flex justify-content-between">
        <div className="col-md-4">
          <LazyLoad>
            <Card.Img className="w-50 " variant="top" src={photo} />
          </LazyLoad>
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
            <LazyLoad>
              <Card.Img className="" variant="top" src={food} />
            </LazyLoad>
            <Card.Body>
              <Card.Title>{RecipeName}</Card.Title>
              <Card.Text>
                <span className="text-primary ">Ingredients:</span> {foodItemsd}
              </Card.Text>
              <Card.Text>
                <span className="text-primary ">Reting : </span> {reting}
              </Card.Text>
              <div className="">
                <Button
                  onClick={handleClick}
                  disabled={buttonDisabled}
                  variant="primary"
                >
                  Favorite
                </Button>
                <ToastContainer />
              </div>
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
