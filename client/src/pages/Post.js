import React, { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import logo from "../images/placeholder.png";

function Post() {
  const [petition, setPetitions] = useState({});
  const location = useLocation();
  useEffect(() => {
    setPetitions(location.state);
  }, [location]);

  return (
    <div className="col-12 col-md-8 my-3 my-md-5 container">
      <h4 className="text-primary">Post {petition.title}: {petition.tag} </h4>
       <div className="card" key={petition.title}>
        <img
          src={logo}
          className="img-fluid card-img-right"
          alt="placeholder"
        />
      </div> 
    </div>
  );
}

export default Post;
