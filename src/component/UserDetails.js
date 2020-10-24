import React, { useState, useEffect } from "react";


import axios from "axios";
const UserDetails = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${props.location.state.id}`
      )
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);

  return (
    <div>
      <h2>User Data</h2>

      <div className="card col-lg-6">
        <div className="card-body">
          <p>name: {data.name}</p>
          <p>username: {data.username}</p>

          <p>email: {data.email}</p>

          <p>phone: {data.phone}</p>

          <p>website: {data.website}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
