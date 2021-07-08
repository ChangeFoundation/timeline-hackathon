import React, { useState } from "react";
import coins from "../images/coins.svg";

const Home = () => {
  const [interests, setInterests] = useState([]);

  const issues = [
    { title: "Women's rights", icon: coins },
    { title: "Environment", icon: coins },
    { title: "Human's rights", icon: coins },
    { title: "Politics", icon: coins },
    { title: "Animals", icon: coins },
    { title: "Local", icon: coins },
    { title: "Child rights", icon: coins },
    { title: "Consumer rights", icon: coins },
    { title: "Health", icon: coins },
    { title: "Criminal justice", icon: coins },
    { title: "Education", icon: coins },
    { title: "LGBT rights", icon: coins },
    { title: "Disability", icon: coins },
    { title: "Technology", icon: coins },
    { title: "Other", icon: coins },
  ];
  const handleClick = (title) => {
    if (interests.includes(title)) {
      setInterests((prevInterests) =>
        prevInterests.filter((interest) => interest !== title)
      );
      return;
    }
    setInterests([...interests, title]);
  };

  console.log("interests: ", interests);
  return (
    <main className="home">
      <h1>What kind of issues are you interested in following?</h1>
      <p>
        Selecting a topic allows change.org recommend your petition to
        interested supporters{" "}
      </p>
      <section className="issues">
        {issues.map(({ title, icon }) => {
          return (
            <div
              className="d-flex flex-column align-items-center mb-3"
              key={title}
              onClick={() => handleClick(title)}
            >
              <div
                className={`issue-selector ${
                  interests.includes(title) ? "border border-danger" : ""
                }`}
              >
                <img src={icon} alt={title} className="w-50" />
              </div>
              <span>{title}</span>
            </div>
          );
        })}
      </section>
      <button
        type="button"
        className="bg-danger border float-end mb-5 rounded py-2 px-3 text-white"
      >
        Continue
      </button>
    </main>
  );
};

export default Home;
