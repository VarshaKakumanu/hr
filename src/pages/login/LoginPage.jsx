import React from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import boy from "./boy.png";
import png from "./png.png";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div>
      <Container>
        <Row className=" shadow p-4" style={{ height: "500px", backgroundColor: "white",marginTop:'100px' }}>
        <Col xl lg xxl={3} className=" ">
            <img  style={{height:'450px',width:'300px'}} src={png} alt=""/>
          </Col>
          <Col
            xl
            lg
            xxl={6}
            className=" p-2 "
            style={{ backgroundColor: "white" }}
          >
            <Row><h3>Login</h3></Row>
            <Row className="mt-4"><Form>
              
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter Username "
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter password "
                />
              </FormGroup>
            </Form></Row>
            <Row style={{alignItem:'center'}}>
              <Link to="/Dashbord">
              <button className="btn btn-warning m-3" style={{width:'80px'}}>Login</button>
              </Link>
            </Row>
            <hr className="mt-4"></hr>
            
            <Row style={{textAlign:'center'}}>
              <Link to="/Logining">
              <h5>Or Login With Gmail</h5>
              </Link>

            </Row>
          </Col>
          <Col xl lg xxl={3} className=" ">
            <img  style={{height:'450px'}} src={boy} alt=""/>
          </Col>
        </Row>
      </Container>
     <Container>
     <Row className="shadow m-4" style={{backgroundColor:"white",height:'300px',justifyItems:'space-around'}}>
      <Col xl={1} style={{backgroundColor:"black",}}>1</Col>
      <Col xl={3} style={{backgroundColor:"white",}}>3</Col>
      <Col xl={5} style={{backgroundColor:"black",}}>5</Col>
      <Col xl={1} style={{backgroundColor:"white",}}>1</Col>
      <Col xl={2} style={{backgroundColor:"black",}}>2</Col>
     </Row>
     </Container>
    </div>
  );
};

export default LoginPage;
