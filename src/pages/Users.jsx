import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

//import "../App.css";
const Users = () => {
  return (
    <>
      <Row
        className=" mt-4 m-4
      "
        style={{ width: "97%" }}
      >
        <Col lg={6} width>
          <h3 style={{ color: "#2a75b3", alignContent: "center" }}>
            Welcome To Iveond{" "}
          </h3>
        </Col>
        <Col lg={2}></Col>
      </Row>
      <Row className=" m-4 mt-4" style={{ width: "97%" }}>
        <Col lg={8} className="shadow mt-1 card border-1">
          <h5 className="mb-3 mt-3">Restaurant Details</h5>
          <Form className="mb-3 mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Admin Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Restaurant Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Restaurant Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Restaurant Google Location</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col> </Col>
        <Col lg={8} className="shadow mt-1 card border-1">
          <h5 className="mb-3 mt-3">Other Details</h5>
          <Form className="mb-3 mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Restaurant Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Restaurant Phone Number</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Bank Account Number</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Account Holder Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Bank IFSC code</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>GST Number</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>FSSAI Number</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Users;
