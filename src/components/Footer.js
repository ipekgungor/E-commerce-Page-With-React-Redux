import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <Container className="p-4">
        <Row>
          <Col lg="6" md="12" className="mb-4">
            <h5 className="text-uppercase">About Us</h5>
            <p>Get dressed is a women's clothing brand.</p>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">
                  Home
                </a>
              </li>
            </ul>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark">
                  Email Us
                </a>
              </li>
              <li>
                <a href="/" className="text-dark">
                  Call Us
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: "#f8f9fa" }}>
        © 2024 Copyright: GetDressed.com
      </div>
    </footer>
  );
};

export default Footer;
