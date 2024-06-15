import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white mt-5 p-4">
        <Row>
          <Col md={4}>
            <h5>Employee Management App</h5>
            <p>
              Your one-stop solution for managing employee records efficiently.
            </p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="home" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="employee" className="text-white">
                  Employee
                </a>
              </li>
              <li>
                <a href="contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@employeemgmt.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Address: Cybrom , MP Nagar , Bhopal</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>
              &copy; {new Date().getFullYear()} Employee Management App. All
              Rights Reserved.
            </p>
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default Footer;
