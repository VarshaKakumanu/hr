import React, { useEffect } from "react";
import { Row, Col,Container } from "react-bootstrap";
import axios from "axios";
import { motion } from "framer-motion";
//import Table from "react-bootstrap/Table";

import { ImLocation } from "react-icons/im";
import { MdCall } from "react-icons/md";
import pic1 from "../images/1.jpg";
import pic2 from "../images/2.jpg";
import pic3 from "../images/3.jpg";
import pic4 from "../images/4.jpg";
import pic5 from "../images/5.jpg";
import pic6 from "../images/6.jpg";
import png7 from "../images/7.png";
import { BiLeftArrow } from "react-icons/bi";
const Home = () => {
  //const [userData,setUserData ] = useState([]);
  const getusers = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log("Result", res);
    });
  };
  useEffect(() => {
    getusers();
  }, []);

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

      <Container>
        <Row>
          <Col xl lg sm={3} className="d-flex justify-content-around p-2" style={{width:'50%'}}>
            <img
            //lassName="img-fluid"c
            style={{ background: "cover", height: "50vh", width: "50vh" }}
              src={png7} alt="..."
            ></img>
          </Col>
          <Col xl lg sm={9} className="p-2 mx-auto">
            <motion.div
              className="rounded p-2"
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
          <Col xl lg sm={5} className="d-flex justify-content-start">
            <motion.div
              className="rounded p-2"
              style={{
                background: "cover",
                alignSelf: "center",
                backgroundColor: "lightGrey",
              }}
              animate={{ x : 40}}
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
          <Col xl lg sm={10}>
            <img
              style={{ background: "cover", height: "50vh", width: "50vh" }}
              src={png7}
              alt="card"
            ></img>
          </Col>
        </Row>

        <Row>
          <Col xl lg sm={3} className="md-auto d-flex justify-content-start">
            <img
              style={{ background: "cover", height: "50vh", width: "50vh" }}
              src={png7}
              alt="card"
            ></img>
          </Col>
          <Col xl lg sm={9}>
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
          <Col xl lg sm={9} className="md-auto d-flex justify-content-start">
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
          <Col xl lg sm={3}>
            <img
              style={{ background: "cover", height: "50vh", width: "50vh" }}
              src={png7}
              alt="card"
            ></img>
          </Col>
        </Row>
      </Container>

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
