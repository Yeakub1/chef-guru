import React from "react";
import './Home.css'
import Chef from "../Chef/Chef";
import bg from '../../../assets/header.jpg'
import bg2 from '../../../assets/banner.jpg'
import bg3 from '../../../assets/banner2.jpg'
import Logo from "../Logo/Logo";
import { Carousel } from "react-bootstrap";
import Client from "../Client/Client";

const Home = () => {
    return (
      <div className="">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100 " src={bg} alt="First slide" />
            <Carousel.Caption className="-mt-5">
              <h3>Where every flavor tells a story</h3>
              <p>
                We providing an enjoyable dining experience to the New York area
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={bg2} alt="Second slide" />
            <Carousel.Caption>
              <h3>A rare taste you can’t find anywhere</h3>
              <p>Dinner Lunch Brunch Wine List</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={bg3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Enjoy and Exceptional Journey Of Tast</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Chef></Chef>
        <Logo></Logo>
        <Client></Client>
      </div>
    );
};

export default Home;
