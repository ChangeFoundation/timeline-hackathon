import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";

function Categories() {
  const [petitions, setPetitions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setPetitions(location.state);
  }, [location]);

  return (
    <div className="container">
      <div className="row">
        {petitions.map((petition, index) => (
          <Card petition={petition} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
