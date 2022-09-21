import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Row } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import html from "../icons/html.png";
import boot from "../icons/boot.png";
import css from "../icons/css.png";
import react from "../icons/logo192.png";
import java from "../icons/java.png";
import mysql from "../icons/mysql.png";
import angular from "../icons/angular.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import web from "../images/webimg.jpg";
class Webdev extends Component {
  render() {
    return (
      <>
        <>
          <Row
            style={{
              textAlign: "center",
              marginTop: "50px",
              width: "97%",
              fontFamily: "cursive",
            }}
          >
            <h2>
              {" "}
              WEBdevelopment Syllabus - What you will learn from this course
            </h2>
          </Row>
          <Row
            className=" m-2 mt-4"
            style={{ width: "97%", fontFamily: "monospace" }}
          >
            <Accordion defaultActiveKey="">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <img style={{ height: "30px" }} src={html} alt="html" />
                  HTML
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#d5522f", color: "#fff" }}
                >
                  <Row>
                    <Col lg={3}>Introduction to HTML5</Col>
                    <Col lg={9}>
                      In this module we will learn the basics of HTML5. We'll
                      start with instructional videos on how to set up your
                      development environment, go over HTML5 basics like valid
                      document structure, which elements can be included inside
                      other elements and which can not, discuss the meaning and
                      usefulness of HTML5 semantic tags, and go over essential
                      HTML5 tags.
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <img style={{ height: "30px" }} src={css} alt="CSS5" />
                  CSS5
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#0a99df", color: "#fff" }}
                >
                  <Row>
                    <Col lg={3}>Introduction to CSS5</Col>
                    <Col lg={9}>
                      A lot of people "tinker" with CSS. In this module, we'll
                      take you from the very basics of CSS3 to some fairly
                      advanced concepts like floating and CSS rule conflict
                      resolution. We'll go over the 'box model', background
                      property, etc. We'll finish off the module with learning
                      about Responsive Design using our own CSS code as well as
                      start introducing Twitter Bootstrap with its essential
                      Grid System.
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <img style={{ height: "30px" }} src={boot} alt="bootstrap" />
                  Bootstrap{" "}
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#5e2aaa", color: "#fff" }}
                >
                  <Row>
                    <Col lg={3}>Introduction to Bootstrap</Col>
                    <Col lg={9}>
                      In this module we will learn the basics of HTML5. We'll
                      start with instructional videos on how to set up your
                      development environment, go over HTML5 basics like valid
                      document structure, which elements can be included inside
                      other elements and which can not, discuss the meaning and
                      usefulness of HTML5 semantic tags, and go over essential
                      HTML5 tags.
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <img style={{ height: "30px" }} src={java} alt="Javascript" />
                  Javascript{" "}
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#e7b351", color: "#fff" }}
                >
                  <Row>
                    <Col lg={3}>Introduction to Javascript</Col>

                    <Col lg={9}>
                      What fun would a web site be if there was no functionality
                      to it? In this module, we are going to concentrate on
                      learning the fundamentals of the Javascript language. A
                      lot of even seasoned developers “tinker” with Javascript
                      without really understanding how the language works. That
                      leads to viewing the language as more of a nuisance
                      instead of a powerful tool. That is why we are going to
                      concentrate not only on the “how” but also on the “why”,
                      so you are empowered by the Javascript language features,
                      not confused by them. We’ll cover just about everything -
                      from common language constructs and Javascript types to
                      objects, functions, arrays, closures, and scope isolation.
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <img style={{ height: "30px" }} src={react} alt="react" />
                  React.js{" "}
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#61dafb", color: "#fff" }}
                >
                  <Row>
                    <Col lg={3}>Introduction to React.js</Col>
                    <Col lg={9}>
                      In this module, we are going to take all those newly
                      learned Javascript language skills and learn how to
                      utilize them within the context of a web page. We’ll start
                      by learning how to properly manipulate the web page
                      components using the Javascript Document Object Model API.
                      We will then move on to learning one of the most popular
                      ways of serving up data to a web site - Ajax. We'll learn
                      about the protocol that the language of the web speaks in
                      (HTTP), how to set up and handle Ajax requests and
                      responses, as well as how to process JSON data. We'll
                      finish the module by connecting our restaurant web site
                      from Module 3 to a real backend service that will allow us
                      to pull the data for the restaurant menu dynamically from
                      the server without having to reload the entire page..
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <img style={{ height: "40px" }} src={mysql} alt="mysql" />
                  MYSQL{" "}
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#7d9ebf", color: "#fff" }}
                >
                  <Row>
                    <Col lg={3}>Introduction to MYSQL</Col>
                    <Col lg={9}>
                      In this module we will learn the basics of HTML5. We'll
                      start with instructional videos on how to set up your
                      development environment, go over HTML5 basics like valid
                      document structure, which elements can be included inside
                      other elements and which can not, discuss the meaning and
                      usefulness of HTML5 semantic tags, and go over essential
                      HTML5 tags.
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <img style={{ height: "40px" }} src={angular} alt="angular" />
                  Angular.js{" "}
                </Accordion.Header>
                <Accordion.Body
                  style={{ backgroundColor: "#c11339", color: "#fff" }}
                >
                  <Row>
                    <Col lg={3}>Introduction to Angular.js</Col>
                    <Col lg={9}>
                      In this module we will learn the basics of HTML5. We'll
                      start with instructional videos on how to set up your
                      development environment, go over HTML5 basics like valid
                      document structure, which elements can be included inside
                      other elements and which can not, discuss the meaning and
                      usefulness of HTML5 semantic tags, and go over essential
                      HTML5 tags.
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
          <Row
            className=" m-2 mt-4"
            style={{ width: "97%", fontFamily: "monospace" }}
          >
            <Col xl sm lg={4}>
              <Card className="shadow p-2">
                <Card.Body>
                  <Card.Title>30 Days CrashCourse</Card.Title>
                  <Card.Text
                    style={{ justifyItems: "center", color: "#2a75b3" }}
                  >
                    <Row style={{ paddingLeft: "140px" }}>
                      <Row>1.HTML5:5 Days to Complete</Row>
                      <Row>2.CSS5:3 Days to Complete</Row>
                      <Row>3.Javascript:8 Days to Complet</Row>
                      <Row>4.React:14 Days to Complete</Row>
                    </Row>
                  </Card.Text>
                  <Button variant="primary">Register Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xl sm lg={4}>
              <Card className="shadow p-2">
                <Card.Body>
                  <Card.Title>60 Days Complete CourseContent</Card.Title>
                  <Card.Text
                    style={{ justifyItems: "center", color: "#2a75b3" }}
                  >
                    <Row style={{ paddingLeft: "140px" }}>
                      <Row>1.HTML5:10 Days to Complete</Row>
                      <Row>2.CSS5:5 Days to Complete</Row>
                      <Row>3.Javascript:15 Days to Complet</Row>
                      <Row>4.React:25 Days to Complete</Row>
                    </Row>
                  </Card.Text>
                  <Button variant="primary">Register Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      </>
    );
  }
}

export default Webdev;
