import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
//import { Toast } from "react-toastify";
import  axios from "axios";

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
    <div style={{marginTop:'150px'}}>
      <table className="styled-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>name</th>
            <th>email</th>
            <th>contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row"> {index+1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/iveond/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <Link to={`/iveond/${item.id}`}>
                    <button className="btn btn-delete">delete</button>
                  </Link>
                  <Link to={`/iveond/${item.id}`}>
                    <button className="btn btn-view">view</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyForm;
