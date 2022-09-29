import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//import axios from "axios";
import { motion } from "framer-motion";
//import { useHistory, useParams, LinK } from "react-router-dom";
import axios from "axios";
import useHistory, { Link } from "use-history";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  name: "",
  email: "",
  phoneNo: "",
  query: "",
};

const Home = () => {
  const [state, setState] = useState(initialState);
  const { name, email, phoneNo, query } = state;
  //const history = useHistory();
  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    console.log(state);

    if (!name || !email || !phoneNo || !query) {
    } else {
      axios
        .post("http://localhost:5000/api/post", {
          name,
          email,
          phoneNo,
          query,
        })
        .then(() => {
          setState({ name: "", email: "", phoneNo: "", query: "" });
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("Details Submited Successfully ", {
        position: toast.POSITION.TOP_RIGHT,
      });
      alert("Details Submited Successfully");
    }
  };

  return (
    <>
      {/* <Row style={{ width: "97%" }}>
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
      <Row style={{ width: "97%" }}>
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

      <Container style={{ width: "97%" }} className=" ">
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
      </Container> */}

      <Row style={{ width: "97%" }} className="m-4 p-4">
        <Col xl lg sm={6}>
          <img src={pic6} class="img-thumbnail" alt="..."></img>
        </Col>
        <Col xl lg sm={6} className="shadow p-4" style={{backgroundColor:'#ffff'}}>
          <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={changeHandler}
                  placeholder="Enter  Your Name"
                  required
                />

                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
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
                  id="phoneNo"
                  onChange={changeHandler}
                  name="phoneNo"
                  placeholder="Enter phone no."
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="l">
                <Form.Label>write to us here</Form.Label>
                <Form.Control
                  type="textarea"
                  name="query"
                  id="query"
                  value={query}
                  onChange={changeHandler}
                  placeholder="Enter you query"
                  required
                />
              </Form.Group>

              <Button
                name="submit"
                variant="primary"
                value="save"
                type="submit"
                className="justify-item-center"
              >
                Submit
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>

      
    </>
  );
};

export default Home;
