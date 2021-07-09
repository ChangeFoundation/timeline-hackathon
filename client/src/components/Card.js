import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/placeholder.png";

// Create a card for the petitions
function Card(props) {
  const [petition, setDataValues] = useState({});
  const history = useHistory();

  const goToPostPage = () => {
    history.push({
      pathname: `posts/${petition.title}`,
      state: petition,
    });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setDataValues(props.petition);
  }, [props]);

  return (
    <section>
      <div
        className="card my-3 col-12"
        key={petition.title}
        onClick={() => {
          goToPostPage();
        }}
      >
        <div className="row col-12">
          <div className="col-md-4">
            <img
              src={logo}
              className="img-fluid rounded-start"
              alt="placeholder"
            />
          </div>

          <div className="col-md-8 align-self-center">
            <h4 className="card-title text-primary">
             {petition.id}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
