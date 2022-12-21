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
      
      <Card>
      <Card.Body>messages</Card.Body>
    </Card>
    </>
  );
}

export default Messages;
