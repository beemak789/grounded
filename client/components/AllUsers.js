import React from "react";
import { Link } from "react-router-dom";

const props = {
  users: [
    {
      id: 1,
      username: "tia",
      password: "1234",
      name: "Tia",
      email: "1234@gmail.com",
      isAdmin: true,
    },
    {
      id: 2,
      username: "lucy",
      password: "1234",
      name: "Lucy",
      email: "1234@gmail.com",
      isAdmin: false,
    },
    {
      id: 3,
      username: "nick",
      password: "1234",
      name: "Nick",
      email: "1234@gmail.com",
      isAdmin: false,
    },
  ],
};

const AllUsers = () => {
  if (!props.users) {
    return <h1>Loading.......</h1>;
  } else {
    return (
      <div>
        <h1>All Users</h1>

        <div>
          {props.users.map((user) => {
            return (
              <div key={user.id} className="list">
                <Link to={`/users/${user.id}`}>
                  <span>
                    <img src={user.imageUrl} width="100" height="100" />
                  </span>
                </Link>
                <div>
                  <Link to= "/users">
                    <button type="button">Edit</button>
                  </Link>
                  <button type="button" onClick={()=>null}>
                    X
                  </button>
                </div>
                <span>{`${user.username}`}</span>
                <span>{`${user.email}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};


export default AllUsers;
