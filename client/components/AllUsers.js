/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/usersReducer";

const AllUsers = () => {
  let users = useSelector((state) => state.users) || [];
  const currentUser = useSelector((state) => state.auth) || null;
  console.log(currentUser, '<-currentUser')

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const isAdmin = () => {
    if (currentUser && currentUser.isAdmin) {
      return (
          <div>
            {users.map((user) => {
              return (
                <div key={user.id} className="list">
                  {/* <Link to={`/users/${user.id}`}> */}
                  {/* <span>
                    <img src={user.imageUrl} width="100" height="100" />
                  </span> */}
                  {/* </Link> */}
                  <div>
                    {/* <button type="button" onClick={()=>null}>
                    X
                  </button> */}
                  </div>
                  <span>{`Name: ${user.name}`}</span>
                  <br />
                  <span>{`Username: ${user.username}`}</span>
                  <br />
                  <span>{`Email: ${user.email}`}</span>
                  <br />
                  <br />
                  <br />
                </div>
              );
            })}
          </div>
      );
    }
  };

  if (!users) {
    return <h1>Loading.......</h1>;
  } else {
    return <>{isAdmin()}</>;
  }
};

export default AllUsers;
