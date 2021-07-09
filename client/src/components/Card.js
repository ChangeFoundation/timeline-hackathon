import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import image from "../images/placeholder.png";

// Create a card for the users
function Card(props) {
  const [user, setDataValues] = useState({});
  const history = useHistory();

  const goToPostPage = () => {
    history.push({
      pathname: `posts/${user.id}`,
      state: user,
    });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setDataValues(props.user);
  }, [props]);
  
  return (
    <div
      className="card my-3 px-5 col-md-4 border-0"
      key={user.id}
      onClick={() => {
        goToPostPage();
      }}
    >
      <img src={image} className="img-fluid rounded-start" alt="placeholder" />
      <div className="card-body align-self-center">
        <h5 className="card-title">{user.name}</h5>
      </div>
    </div>
  );
}

export default Card;
