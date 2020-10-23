import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, NavLink, Link } from "react-router";

import axios from "axios";
// useState
const User = () => {
  let [data, setUserData] = useState([]);

  let [error, setError] = useState(false);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        console.log(data);

        setUserData(data.data);
      })
      .catch((err) => {
        setError(error.err);
      });
  });

  return (
    <div>
      <h1>Hello</h1>

      {data.map((i) => {
        return <p>{i.id}</p>;
      })}
    </div>
  );
};

export default User;
