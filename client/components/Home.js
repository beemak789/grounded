import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = () => {
  const username = useSelector((state) => state.auth.username);

      if(username){
        return (
          <div>
        <h3>Welcome, {username}</h3>
        </div>
        )
      }else{
        return (
          <div>
        <p></p>
        </div>
        )
      }
 

}

/**
 * CONTAINER
 */

export default Home;
