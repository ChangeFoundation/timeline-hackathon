import React, { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import image from "../images/placeholder.png";

function Post() {
  const [user, setUser] = useState({});
  const location = useLocation();
  useEffect(() => {
    setUser(location.state);
  }, [location]);

  return (
    <div className="col-12 col-md-8 my-3 my-md-5 container">
      <h4 className="text-primary">{user.name}</h4>
       <div className="card" key={user.name}>
        <img
          src={image}
          className="img-fluid card-img-right"
          alt="placeholder"
        />
      </div> 
    </div>
  );
}

export default Post;
