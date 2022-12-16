import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import travellogo from "../src/assests/travellogo.webp";
import travelimg1 from "../src/assests/travelimg1.jpg";
import imgone from "../src/assests/imgone.jpg";
import imgtwo from "../src/assests/imgtwo.jpg";
import imgthree from "../src/assests/imgthree.jpg";
import { Modal, Button } from "react-bootstrap";

import "./Travel.css";
import { Col, Row } from "react-bootstrap";

const Travel = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setdata] = useState(500);

  const gototop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + travelimg1 + ")",
          height: "580px",
          width: "100%",
        }}
      >
        <div>
          <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Container>
              <Navbar.Brand>
                <img className="travellogo" src={travellogo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link className="book" onClick={handleShow}>
                    Book Now
                  </Nav.Link>
                  <Nav.Link className="book">Gallery</Nav.Link>
                  <Nav.Link className="book">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Row>
          <Col sm={12}>
            <div className="Searchyour">Search your Holiday</div>
          </Col>
        </Row>
        <Row>
          <Row className="secondrow">
            <Col sm={4}>
              <div className="searchheading"> Search your destination</div>
              <div>
                <input type="text" placeholder="Enter your name" />
              </div>
            </Col>
            <Col sm={4}>
              <div className="searchheading"> Select your Date</div>
              <div>
                <input type="date" />
              </div>
            </Col>
            <Col sm={4}>
              <div className="searchheading">Select Price:</div>
              <div className="increment">
                <div onClick={() => setdata(data - 100)}>-</div>
                <div className="data">{data}</div>
                <div onClick={() => setdata(data + 100)}>+</div>
              </div>
            </Col>
          </Row>
        </Row>
      </div>
      <Row className="threerow">
        <Col sm={4}>
          <div className="price">
            Get Best Price
            <div className="pricesection">
              pay through our application and save thousands and get amazing
              reward
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="price">
            Covid Safe{" "}
            <div className="pricesection">
              We have all the hotels that have all the precaution for covid safe
              environment
            </div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="price">
            Find the best Near You{" "}
            <div className="pricesection">
              Find the best hotels and places to visit you in a single click
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div className="specialoffer">Special offer 30 % Discounts</div>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className="sploffer">
            <img className="imgsection" src={imgone} alt=" not found" />
            <div className="days">3 Days/4 Night</div>
            <div className="days">Price:$10</div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="sploffer">
            <img className="imgsection" src={imgtwo} alt=" not found" />
            <div className="days">1 Days</div>
            <div className="days">Price:$3</div>
          </div>
        </Col>
        <Col sm={4}>
          <div className="sploffer">
            <img className="imgsection" src={imgthree} alt=" not found" />
            <div className="days">3 Days/4 Night</div>
            <div className="days">Price:$8</div>
          </div>
        </Col>
      </Row>
      <Row className="footer">
        <Col sm={4}>
          <div className="ftheading">Quick Link</div>
          <div className="ft">Home</div>
          <div className="ft">About</div>
        </Col>
        <Col sm={4}>
          <div className="ftheading">Contact info</div>
          <div className="contact">
            {" "}
            <a href="https://wa.me/918827400186">8827400186</a>
          </div>
          <div className="contact">
            <a href="mailto:hemantmalviya400@gmail.com">
              hemantmalviya400@gmail.com
            </a>
          </div>
        </Col>
        <Col sm={4}>
          <div className="ftheading">Follow us</div>
          <div className="ft">
            <div onClick={gototop}>Click here</div>
          </div>
          <div className="ft">
            <a href="https://github.com/O4Hemantmalviya">Github</a>
          </div>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} animation={false} >
        <Modal.Header closeButton ></Modal.Header>
        <Modal.Body className="mbody">
          <from>
            Name :
            <input type="text" />
            <br />
            <br />
            Mobile NO.
            <input type="text" />
            <br />
            <br />
            Total Member.
            <input type="text" />
            <br />
            <br />
            Online:
            <select>
              <option>Google pay</option>
              <option>Phone pay</option>
              <option>Paytm </option>
            </select>
            <br />
            <br />
          </from>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Travel;
