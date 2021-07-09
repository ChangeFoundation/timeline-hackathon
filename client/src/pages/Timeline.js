import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import arrayData from "../data";

function Timeline() {
  const [petitions, setPetitions] = useState([]);
  const history = useHistory();
  
  // Create tags to group posts
  const tags = ["gender", "climate", "politics", "animals"];

  const filterData = (tag) => {
    if (tag) {
      const categories = petitions.filter((petition) => petition.tag === tag);
      setPetitions(categories);
      history.push({
        pathname: `/timeline/posts`,
        state: categories,
      });
    }
  };

  useEffect(() => {
    setPetitions(arrayData);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row ">
        {tags.map((tag) => (
          <div
            className="card col-12 col-md-3"
            key={tag}
            onClick={() => {
              filterData(tag);
            }}
          >
            <div className="card-body">
              <h4 className="text-primary">{tag} topics</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
