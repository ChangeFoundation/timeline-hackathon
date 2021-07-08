import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/placeholder.png";

// Create a card for the petitions
function Card(props) {
  const [petition, setDataValues] = useState({});
  const history = useHistory();

  const goToPostPage = () => {
    history.push({
      pathname: `/timeline/posts/${petition.title}`,
      state: petition,
    });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setDataValues(props.petition);
  }, [props]);

  return (
    <div className="col-12 col-md-4">
      <div className="card my-3 my-md-5" key={petition.title}>
        <img
          src={logo}
          onClick={() => {
            goToPostPage();
          }}
          className="img-fluid card-img-right"
          alt="placeholder"
        />
        <h4 className="text-primary">
          Post {petition.title}: {petition.tag}
        </h4>
      </div>
    </div>
  );
}

export default Card;
