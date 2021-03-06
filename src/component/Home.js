import React, { useState, useEffect } from "react";


import axios from "axios";
import Avatar from "react-avatar";
// useState
const User = () => {
  let [data, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      console.log(data);
      setUserData(data.data);
    });
  }, []);

  return (
    <div className="row">
      {data.map((i) => {
        return (
          <div className="col-lg-4 mt-5" key={i.id}>
            <div className="card">
              <div className="avatar">
                <Avatar
                  color={Avatar.getRandomColor("sitebase", [
                    "rgb(128, 128, 128)",
                  ])}
                  name={i.name}
                  round="50px"
                  size="50"
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text">{i.username}</p>
                <a href="#" className="card-text">
                  {i.email}
                </a>

                <Link to={{ pathname: "/userdetails" }}>
                  {" "}
                  <button className="btn btn-primary btn-block">
                    MORE DETAILS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
