import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../assets/1-5.jpg'

const Client = () => {
    return (
      <Container className="d-flex mt-5 mb-5">
        <div className="row">
          <div className=" col-md-6 mt-5">
            <h3>About US</h3>
            <h1>Quality Comes First</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary
            </p>
            <button className="px-4 py-2 bg-primary text-white border-0">
              Read More
            </button>
          </div>
          <div className="col-md-6 text-center">
            <img className="w-75 " src={img} alt="" />
          </div>
        </div>
      </Container>
    );
};

export default Client;