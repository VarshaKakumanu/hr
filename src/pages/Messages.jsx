import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import web from "../images/webimg.jpg";
import ba from "../images/ba.jpg";
import rpa from "../images/rpa.jpg";
import scrum1 from "../images/scrum1.jpg";
import py1 from "../images/py1.jpg";
import prmanger from "../images/prmanger.jpg";
import sales from "../images/sales.jpg";
//import { useHistory } from "react-router-dom";
// import { Link, Routes,Route } from "react-router-dom";
// import Webdev from "./Webdev.jsx";
import { useNavigate } from "react-router-dom"

function Messages() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path ="/Webdev"; 
    navigate(path);
  }
  const Rpa = () =>{ 
    let path ="/Rpa"; 
    navigate(path);
  }
  
  return (
    <>
      <Row
        style={{ textAlign: "center", color: "#2a75b3", marginTop: "100px", width: "97%" }}
      >
        <h1> Available Trainings</h1>
      </Row>
      <Row
        style={{ display: "flex", width: "97%", marginTop: "100px" }}
        className="m-4 mt-4"
      >
        <Col xl sm lg={4} >
          <Card className="shadow p-2">
            <Card.Img variant="top" src={web} />
            <Card.Body>
              <Card.Title>Webdevelopment</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary"  onClick={routeChange}>Course Content</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl sm lg={4}>
          <Card className="shadow p-2">
            <Card.Img variant="top" src={rpa} />
            <Card.Body>
              <Card.Title>RPA</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" onClick={Rpa}>Course Content</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl sm lg={4}>
          <Card className="shadow p-2">
            <Card.Img variant="top" src={ba} />
            <Card.Body>
              <Card.Title>Business Analyst</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Course Content</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ display: "flex", width: "97%" }} className="m-4">
        <Col xl sm lg={4}>
          <Card className="shadow p-2">
            <Card.Img variant="top" src={scrum1} />
            <Card.Body>
              <Card.Title>Scrum Master</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Course Content</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl sm lg={4}>
          <Card className="shadow p-2">
            <Card.Img variant="top" src={py1} />
            <Card.Body>
              <Card.Title>Python </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Course Content</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl sm lg={4}>
          <Card className="shadow p-2">
            <Card.Img variant="top" src={sales} />
            <Card.Body>
              <Card.Title>Sales Force</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Course Content</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ display: "flex", width: "97%" }} className="m-4">
        <Col lg={4}>
          <Card className="shadow p-2">
            <Card.Img variant="top" src={prmanger} />
            <Card.Body>
              <Card.Title>Project Management</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Course Content</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Messages;
