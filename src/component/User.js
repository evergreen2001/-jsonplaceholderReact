import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, NavLink, Link } from "react-router";

import axios from 'axios'
// useState
const User = () => {
  let [data, setUserData] = useState([]);

  let [error, setError] = useState(false);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then(res => {
      res.json();
      
    }).then(data=>{
        console.log(data);

      setUserData(data.data);
    });
    //   .catch(err=> {
    //     setError(error.err);
    //   });
  });

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default User;
