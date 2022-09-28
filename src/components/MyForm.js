import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { Toast } from "react-toastify";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const MyForm = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  });
  return (
    <Container>
      <Row lg xl={12} className="m-4 p-4 shadow" style={{ textAlign: "center" ,backgroundColor:'#ffff'}}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>ContactNumber</th>
              <th>Query</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row"> {index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNo}</td>
                  <td>{item.query}</td>

                  <td>
                    <Link to={`/*/${item.id}`}>
                      <button className="btn btn-danger m-2">delete</button>
                    </Link>
                    <Link to={`/View/${item.id}`}>
                      <button className="btn btn-info m-2" style={{color:'white'}}>view</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Row>
    </Container>
  );
};

export default MyForm;
