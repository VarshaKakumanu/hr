import React from "react";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Carousel,ListGroup 
} from "react-bootstrap";
import pic1 from "../images/1.jpg";
import pic2 from "../images/2.jpg";
import pic3 from "../images/3.jpg";
//import "../App.css";
const Users = () => {
  return (
    <Container className="  mt-4" id="sri">
      <Row style={{ width: "100%" }}>
        <Col lg={8} className="shadow mt-1 card border-1">
          <h5 className="mb-3 mt-3">Information</h5>
          <Form className="mb-3 mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="">Email address</Form.Label>
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
        <Col lg={1}></Col>

        <Col lg={3} className="shadow mr-4 card ">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4" style={{ width: "100%",height:'420px'}}>
        <Col lg={6} className="shadow mt-1 card border-1">
          <Carousel style={{ paddingTop:'10px'}}>
            <Carousel.Item  style={{ paddingBottom:'0px' }}>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src={pic1}
                alt="First slide"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src={pic2}
                alt="Second slide"
              />

              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src={pic3}
                alt="Third slide"
              />

              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={6} style={{}} className="shadow mt-1  mr-4 card ">
        <ListGroup   style={{ height: "400px" }}>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>


        </Col>
      </Row>
      
    </Container>
  );
};

export default Users;
