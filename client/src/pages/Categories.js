import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

function Categories() {
  const [users, setUsers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setUsers(location.state);
  }, [location]);

  return (
    <div className="container">
      <div className="row">
          <h4 className="my-3 px-5">Petition starters with similar interests</h4>
        {users.map((user, index) => (
          <Card user={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
