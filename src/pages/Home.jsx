import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//import axios from "axios";
import { motion } from "framer-motion";
//import Table from "react-bootstrap/Table";

//import { ImLocation } from "react-icons/im";
// import { MdCall } from "react-icons/md";
// import pic1 from "../images/1.jpg";
// import pic2 from "../images/2.jpg";
// import pic3 from "../images/3.jpg";
// import pic4 from "../images/4.jpg";
// import pic5 from "../images/5.jpg";
import pic6 from "../images/6.jpg";
import png7 from "../images/7.png";
import { useForm } from "react-hook-form";
//import { BiLeftArrow } from "react-icons/bi";
const Home = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    query: "",
  });
  const { name, email, phoneNo, query } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  
  const submithandler = (e) => {
    e.preventDefault();
    console.log(data);

    if (name.length === 0) {
      alert("Name has left black!");
    } else if (email.length === 0) {
      alert("email has left black!");
    } else if (phoneNo.length === 0) {
      alert("phoneNo has left black!");
    } else if (query.length === 0) {
      alert("query has left black!");
    } else {
      alert("submited Successfully");
    }

    e.target.reset();
  };

  return (
    <>
      <Row>
        <Col
          id="home"
          className="md-auto pb-5 p-5"
          style={{ textAlign: "center" }}
        >
          <h1
            style={{
              color: "black",
              paddingTop: "220px",
              fontSize: "80px",
              fontFamily: "Lora",
            }}
          >
            Welcome Pal!{" "}
          </h1>
          <h2
            style={{
              color: "black",
              paddingTop: "0px",
              fontSize: "20px",
              fontFamily: "Lora",
            }}
          >
            Here you can avail training ,design,develop and support for your
            work
          </h2>
        </Col>
      </Row>
      <Row>
        <Col
          id="about"
          className="md-auto pb-4 p-4 "
          style={{ textAlign: "center" }}
        >
          <h2
            style={{
              color: "black",
              paddingTop: "40px",
              fontSize: "80px",
              fontFamily: "Lora",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              color: "black",
              paddingTop: "0px",
              fontSize: "20px",
              fontFamily: "Lora",
            }}
          >
            Here you can avail training ,design,develop and support for your
            work
          </p>
        </Col>
      </Row>

      <Container className=" ">
        <Row>
          <Col xl lg sm={6} className="d-flex justify-content-around">
            <img
              style={{ background: "cover", height: "50vh", width: "50vh" }}
              src={png7}
              alt="..."
            ></img>
          </Col>
          <Col xl lg sm={6} className="p-2 mx-auto">
            <motion.div
              className="rounded p-4"
              style={{
                background: "cover",
                alignSelf: "center",
                backgroundColor: "lightGrey",
              }}
              animate={{ x: 50 }}
            >
              <h1>Training </h1>
              <br></br>
              <p>
                One must have the knowledge, and effective usage of technology,
                especially in the workplace, it can improve productivity and
                workflow. Here you can discover your desire for IT technology.
              </p>
              <p style={{ fontSize: "30px" }}>
                we train you on sundry IT technologies which intensify one's
                career
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col xl lg sm={6} className="d-flex justify-content-end">
            <motion.div
              className="rounded p-4"
              style={{
                background: "cover",
                alignSelf: "center",
                backgroundColor: "lightGrey",
              }}
              animate={{ x: -30 }}
            >
              <h1>Training </h1>
              <br></br>
              <p>
                One must have the knowledge, and effective usage of technology,
                especially in the workplace, it can improve productivity and
                workflow. Here you can discover your desire for IT technology.
              </p>
              <p style={{ fontSize: "30px" }}>
                we train you on sundry IT technologies which intensify one's
                career
              </p>
            </motion.div>
          </Col>
          <Col xl lg sm={6}>
            <img
              style={{ background: "cover", height: "50vh", width: "50vh" }}
              src={png7}
              alt="card"
            ></img>
          </Col>
        </Row>

        <Row>
          <Col xl lg sm={6} className="md-auto d-flex justify-content-start">
            <img
              style={{ background: "cover", height: "50vh", width: "50vh" }}
              src={png7}
              alt="card"
            ></img>
          </Col>
          <Col xl lg sm={6}>
            <motion.div
              className="rounded p-4"
              style={{
                background: "cover",
                alignSelf: "center",
                backgroundColor: "lightGrey",
              }}
              animate={{ x: 50 }}
            >
              <h1>Training </h1>
              <br></br>
              <p>
                One must have the knowledge, and effective usage of technology,
                especially in the workplace, it can improve productivity and
                workflow. Here you can discover your desire for IT technology.
              </p>
              <p style={{ fontSize: "30px" }}>
                we train you on sundry IT technologies which intensify one's
                career
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col xl lg sm={6} className="md-auto d-flex justify-content-start">
            <motion.div
              className="rounded p-4"
              style={{
                background: "cover",
                alignSelf: "center",
                backgroundColor: "lightGrey",
              }}
              animate={{ x: -30 }}
            >
              <h1>Training </h1>
              <br></br>
              <p>
                One must have the knowledge, and effective usage of technology,
                especially in the workplace, it can improve productivity and
                workflow. Here you can discover your desire for IT technology.
              </p>
              <p style={{ fontSize: "30px" }}>
                we train you on sundry IT technologies which intensify one's
                career
              </p>
            </motion.div>
          </Col>
          <Col xl lg sm={6}>
            <img
              style={{ background: "cover", height: "50vh", width: "50vh" }}
              src={png7}
              alt="card"
            ></img>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col xl lg sm={6}>
          <img src={pic6} class="img-thumbnail" alt="..."></img>
        </Col>
        <Col xl lg sm={6}>
          <Container>
            <Form onSubmit={submithandler}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={changeHandler}
                  placeholder="Enter Name"
                  required
                />

                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>mobile number</Form.Label>
                <Form.Control
                  type="number"
                  value={phoneNo}
                  onChange={changeHandler}
                  name="phoneNo"
                  placeholder="Enter phone no."
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="l">
                <Form.Label>write to us here</Form.Label>
                <Form.Control
                  type="text"
                  name="query"
                  value={query}
                  onChange={changeHandler}
                  placeholder="Enter you query"
                  required
                />
              </Form.Group>

              <Button
                onClick={() => console.log("clicked")}
                name="submit"
                variant="primary"
                type="submit"
                className="justify-item-center"
              >
                Submit
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>

      <Col id="about" className=" " style={{ textAlign: "center" }}>
        <h2
          style={{
            color: "black",
            paddingTop: "40px",
            fontSize: "80px",
            fontFamily: "Lora",
          }}
        >
          Contact Us
        </h2>
        <br></br>
        <Container className="d-flex justify-content-around">
          <p
            style={{
              color: "black",
              paddingTop: "0px",
              fontSize: "20px",
              fontFamily: "Lora",
            }}
          >
            Email : xyz@gmail.com
          </p>
          <p
            style={{
              color: "black",
              paddingTop: "0px",
              fontSize: "20px",
              fontFamily: "Lora",
            }}
          >
            Phone No:878989XXX
          </p>{" "}
        </Container>
      </Col>
    </>
  );
};

export default Home;
