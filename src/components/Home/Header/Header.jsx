import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="" variant="light">
        <Container>
          <Navbar.Brand >
            <Link to='/'>
              {" "}
              <h6>
                <img src={logo} alt="" width={50} />
              </h6>{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link>
                <Link className="text-decoration-none" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link className="text-decoration-none" to="/login">
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none" to="/reg">
                  
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;