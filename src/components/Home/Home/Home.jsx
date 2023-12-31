import React from "react";
import Chef from "../Chef/Chef";
import bg from "../../../assets/slider1.jpg";
import bg2 from "../../../assets/slider2.jpg";
import bg3 from "../../../assets/slider3.jpg";
import Logo from "../Logo/Logo";
import { Carousel } from "react-bootstrap";
import Client from "../Client/Client";
import LazyLoad from "react-lazy-load";

const Home = () => {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item interval={1000}>
          <LazyLoad>
            <img className="d-block w-100 " src={bg} alt="First slide" />
          </LazyLoad>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <LazyLoad>
            <img className="d-block w-100" src={bg2} alt="Second slide" />
          </LazyLoad>
        </Carousel.Item>
        <Carousel.Item>
          <LazyLoad>
            <img className="d-block w-100 " src={bg3} alt="Third slide" />
          </LazyLoad>
        </Carousel.Item>
      </Carousel>
      <Chef></Chef>
      <Logo></Logo>
      <Client></Client>
    </div>
  );
};

export default Home;
