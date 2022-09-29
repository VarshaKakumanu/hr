import React from "react";
import { Row, Col } from "react-bootstrap";
const Dashbord = () => {
  return (
    <>
      <Row className=" mt-4" style={{ textAlign: "center", color: "#2d71a8" }}>
        <h2>Dashbord</h2>
      </Row>
      <Row>
        <Col
          xl
          lg
          xxl={7}
          className="shadow m-4"
          style={{ backgroundColor: "white", height: "400px" }}
        ></Col>
        <Col
          xl
          lg
          xxl={4}
          className="shadow m-4"
          style={{ backgroundColor: "white", height: "400px" }}
        ></Col>
      </Row>
      <Row>
        <Col
          xl
          lg
          xxl={9}
          className="shadow m-4"
          style={{ backgroundColor: "white", height: "500px" }}
        ></Col>
        <Col
          xl
          lg
          xxl={2}
          className="shadow m-4"
          style={{ backgroundColor: "white", height: "500px" }}
        ></Col>
      </Row>
    </>
  );
};

export default Dashbord;
