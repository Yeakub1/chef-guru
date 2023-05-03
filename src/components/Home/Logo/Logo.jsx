import React from 'react';
import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/logo/client-1.png'
import logo2 from '../../../assets/logo/client-2.png'
import logo3 from '../../../assets/logo/client-3.png'
import logo4 from '../../../assets/logo/client-4.png'
import logo5 from '../../../assets/logo/client-5.png'
import { Container } from 'react-bootstrap';

const Logo = () => {
    return (
      <Container className="">
        <h1 className="text-center mt-5">Out Sponsor</h1>
        <Marquee className="mt-5 mb-5">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </Marquee>
      </Container>
    );
};

export default Logo;