import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
//import Table from "react-bootstrap/Table";
import {ImLocation } from "react-icons/im";
import {MdCall } from "react-icons/md";
import pic1 from "../images/1.jpg";
import pic2 from "../images/2.jpg";
import pic3 from "../images/3.jpg";

const Home = () => {
  const [data, setData] = useState([]);
  const getusers = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      console.log("Result", res);
      setData(res.data);
    });
  };
  useEffect(() => {
    getusers();
  }, []);

  return (
    <>
    <Col id="home"  className="pb-4 p-4"  style={{textAlign:'center'}}>
      
        <h1 style={{color:'#fff',paddingTop:'230px',fontSize:'80px',fontFamily:'Lora'}}>Welcome To Lucid! </h1>
        
     
      
    </Col>
    <Row className="m-1" style={{width:'100%',justifyContent:'space-around',paddingTop:'40px'}}>
        <Col lg={4} className="shadow  card border-0">
          <img src={pic2} alt="card"></img>

        </Col>
        <Col lg={4} className="shadow  card border-0">
          <h5>service</h5>
        <img src={pic1} alt="card"></img>

        </Col>
      </Row>
      <Row className="m-1" style={{width:'100%',justifyContent:'space-around',paddingTop:'40px'}}>
        <Col lg={4} className="shadow  card border-0">
          <img src={pic2} alt="card"></img>

        </Col>
        <Col lg={4} className="shadow  card border-0">
          <h5>service</h5>
        <img src={pic3} alt="card"></img>

        </Col>
      </Row>
      <Row  className="m-4 shadow  card border-1" style={{width:'97%'}}>
      <h5>Footer</h5>
      <Col lg={4} className="shadow  card border-0">
         
        <img src={pic3} alt="card"></img>

        </Col>

     <hr style={{marginTop:'20px'}}></hr>
     <p style={{textAlign:'center'}}>@copy rights</p>
      </Row>
    </>
  );
};

export default Home;
