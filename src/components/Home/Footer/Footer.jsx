import React from 'react';
import { Container } from 'react-bootstrap';
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
    return (
      <Container>
        <footer className="text-center text-lg-start bg-white text-muted mt-5">
          <section className="d-flex justify-content-center justify-content-between border-bottom ">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div className='mb-4'>
              <a href="" className="me-4 link-secondary">
                <FaFacebook />
              </a>
              <a href="" className="me-4 link-secondary">
                <FaGithub />
              </a>
              <a href="" className="me-4 link-secondary">
                <FaLinkedinIn />
              </a>
              <a href="" className="me-4 link-secondary">
                <FaTwitter />
              </a>
              <a href="" className="me-4 link-secondary">
                <FaInstagram />
              </a>
              
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className=" ">
              {/* Grid row */}
              <div className="row justify-content-between mt-3">
                {/* Grid column */}
                <div className="col-md-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 bg-danger" />
                    FauGet
                  </h6>
                  <p>
                    Tincidunt neque pretium lectus donec risus. Mauris mi tempor
                    nunc orc leo consequat vitae erat gravida lobortis nec et
                    sagittis.
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 mx-auto mb-4 ">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Laravel
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3  mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Opening Times</h6>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Monday – Thursday: 08AM – 10PM
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Friday – Saturday: 10AM–11:30PM
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Sunday: Closed
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Booking TIme: 24/7 Hours
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3  mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3 text-secondary" /> New York,
                    NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary" />
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3 text-secondary" /> + 01 234
                    567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3 text-secondary" /> + 01 234
                    567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
          >
            © 2023 Copyright: {""}
            <a className="text-reset fw-bold text-decoration-none">
              FauGet.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </Container>
    );
};

export default Footer;