import React from "react";
import avatar from "../images/avatar.svg";
import search from "../images/search.svg";

const Header = () => {
  return (
    <nav className="border-bottom navbar navbar-expand-lg navbar-light px-5">
      <div className="container-fluid">
        <a className="navbar-brand text-danger" href="/">
          Change.org
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Start a Petition
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                My Petitions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Browse
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Support Change.org India
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Connect/Explore
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <img
              src={search}
              alt="search"
              className="me-3"
              style={{ width: "1.5rem" }}
            />
            <img src={avatar} alt="avatar" style={{ width: "1.5rem" }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
