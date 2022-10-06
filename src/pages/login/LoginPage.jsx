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
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const LoginPage = () => {
  return (
    <div>
      <Container>
        <Row
          className=" shadow p-4"
          style={{
            height: "",
            backgroundColor: "white",
            marginTop: "100px",
          }}
        >
          <Col xl lg xxl={3} className=" ">
            <img style={{ height: "450px", width: "300px" }} src={png} alt="" />
          </Col>
          <Col
            xl
            lg
            xxl={6}
            className=" p-2 "
            style={{ backgroundColor: "white" }}
          >
            <Tabs
              defaultActiveKey="Login"
              id="uncontrolled-tab-example"
              
            >
              <Tab eventKey="Login" title="Login">
                <Row>
                  <Row>
                    <h3>Login</h3>
                  </Row>
                  <Row className="mt-4">
                    <Form>
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
                    </Form>
                  </Row>
                  <Row style={{ alignItem: "center" }}>
                    <Link to="/Dashbord">
                      <button
                        className="btn btn-warning m-3"
                        style={{ width: "80px" }}
                      >
                        Login
                      </button>
                    </Link>
                  </Row>
                  <hr className="mt-4"></hr>

                  <Row style={{ textAlign: "center" }}>
                    <Link to="/Logining">
                      <h5>Or SignUp With Gmail</h5>
                    </Link>
                  </Row>
                </Row>
              </Tab><Tab eventKey="Registration" title="Registration">
                <Row>
                  <Row>
                    <h3>Register</h3>
                  </Row>
                  <Row className="mt-4">
                    <Form>
                      <FormGroup>
                        <Label for="exampleEmail">Username</Label>
                        <Input
                          type="username"
                          name="email"
                          placeholder="Enter Username "
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Enter Email "
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Password</Label>
                        <Input
                          type="password"
                          name="email"
                          placeholder="Enter Password "
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Confirm Password</Label>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Confirm Password "
                        />
                      </FormGroup>
                    </Form>
                  </Row>
                  <Row style={{ alignItem: "center" }}>
                    <Link to="/Dashbord">
                      <button
                        className="btn btn-warning m-3"
                        style={{ width: "80px" }}
                      >
                        Register
                      </button>
                    </Link>
                  </Row>
                  <hr className="mt-4"></hr>

                  <Row style={{ textAlign: "center" }}>
                    <Link to="/Logining">
                      <h5>Or SignUp With Gmail</h5>
                    </Link>
                  </Row>
                </Row>
              </Tab>
              
              
            </Tabs>
          </Col>
          <Col xl lg xxl={3} className=" ">
            <img style={{ height: "450px" }} src={boy} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
{
  /* <Row><h3>Login</h3></Row>
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

            </Row> */
}
