import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */

export default Home;
