import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Link,
} from "react-router-dom";
import Avatar from "react-avatar";

import axios from "axios";
const UserDetails = (props) => {
    const defaultUser = {
        name: "",
        username:'',
        email: "",
        phone:'',
        company: {
            name: ""
        }
    };
  const [data, setData] = useState([defaultUser]);

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
      <h2>Hello</h2>

      <div className="card">
        <div className="card-body">
          <p>name:{data.name}</p>
          <p>username:{data.username}</p>

          <p>email:{data.email}</p>

          <p>phone:{data.phone}</p>
          <p>company:
 




          </p>

          <p>website:{data.website}</p>

          <p>
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
