import React from "react";
import { Button,Card,Form, Container, Row, Col } from "react-bootstrap";
//import "../App.css";
const Users = () => {
  return (
    <Container fluid="xxl" className="m-2 " id='sri'>
      <Row style={{width:"100%",alignContent:'center'}} fluid="xxl" className="m4">
        <Col  xxl={8} className="shadow mt-4 card border-1">
          <h5 className="mb-3 mt-3">Information</h5>
          <Form className="mb-3 mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="">Email address</Form.Label >
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col  xxl={1}></Col>

        <Col  xxl={3} className="shadow mt-4 card " >
        <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
        </Col>
      </Row>
      
    </Container>
  );
};

export default Users;
