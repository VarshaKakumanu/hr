import React from "react";
import {
  Button,
  Card,
  Form,
  Row,
  Col,
  Carousel,ListGroup 
} from "react-bootstrap";
import pic1 from "../images/1.jpg";
import pic2 from "../images/2.jpg";
import pic3 from "../images/3.jpg";
import {ImLocation } from "react-icons/im";
import {IoMdCall } from "react-icons/io";
//import "../App.css";
const Users = () => {

  
  return (
    <>
    
      <Row  className=" mt-4 m-2
      "  >
        <Col lg={6} width><h3 style={{color:'#2a75b3',alignContent:'center'}}>Welcome To Lucid </h3></Col>
        <Col lg={2}></Col>
        <Col  sm xs={1} style={{display:'flex' ,color:'#2a75b3'}}>
        <ImLocation style={{alignSelf:'center',color:'black'}}/><h5 style={{alignSelf:'center',paddingTop:'6px'}}>Loction</h5> 
        </Col>
        <Col   lg sm xs={3} style={{display:'flex' ,color:'#2a75b3',verticalAlign:'middle',justifyContent:""}}>
        <IoMdCall  style={{alignSelf:'center',color:'black'}}/><h5 style={{alignSelf:'center',paddingTop:'6px'}}>Contact Us</h5>
        </Col>
      </Row>
      <Row className=" m-2 mt-4" style={{ width: "99%" }}>
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
        <Col ></Col>

        <Col lg={3} className="shadow pr-1 card ">
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
      <Row className="m-2 mt-4" style={{ width: "99%",height:'420px'}}>
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
        <Col></Col>
        <Col lg={5} style={{}} className="shadow mt-1  ml-4 card ">
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
      
  </>
  );
};

export default Users;
