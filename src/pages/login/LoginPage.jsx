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

const LoginPage = () => {
  return (
    <div>
      <Container>
        <Row className="m-4 shadow p-4" style={{ height: "500px", backgroundColor: "white"  }}>
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
              <button className="btn btn-warning m-3" style={{width:'80px'}}>Login</button>
            </Row>
            <hr className="mt-4"></hr>
            
            <Row style={{textAlign:'center'}}>
              <h5>Or Login With Gmail</h5>

            </Row>
          </Col>
          <Col xl lg xxl={3} className=" ">
            <img  style={{height:'450px'}} src={boy} alt=""/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
