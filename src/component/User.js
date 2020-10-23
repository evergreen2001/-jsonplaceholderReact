import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, NavLink, Link } from "react-router";

import axios from "axios";
import Avatar from "react-avatar";
// useState
const User = () => {
  let [data, setUserData] = useState([]);

  let [error, setError] = useState(false);
  let [avatar, setAvatar] = useState(null);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        console.log(data);

        setUserData(data.data);
      })
      .catch((err) => {
        setError(error.err);
      });
  });

  return (
    <div className="row">
      {data.map((i) => {
        return (
          <div className="col-lg-4 mt-3">
            <div class="card">
              <div className="avatar">
              
                <Avatar
                  color={Avatar.getRandomColor("sitebase", [
                    "rgba(128, 128, 128, 0.377)",
                    "green",
                    "blue",
                  ])}
                  name={i.name}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text">{i.username}</p>
                <a href="mailto" className="card-text">
                  {i.email}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
