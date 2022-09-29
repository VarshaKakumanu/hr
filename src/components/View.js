import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row } from "react-bootstrap";

const View = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setUser({ ...resp.data[0] }));
  }, [id]);

  return (
    <Container>
      <Row className="shadow p-4 m-4" style={{ backgroundColor: "white" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>ContactNumber</th>
              <th>Email</th>
              <th>Query</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{user.name}</td>
              <td>{user.phoneNo}</td>
              <td>{user.email}</td>
              <td>{user.query}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/data">
          <button className="btn btn-warning"> Go Back</button>
        </Link>
      </Row>
    </Container>
  );
};
export default View;
