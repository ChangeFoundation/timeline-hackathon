import React from "react";

const Header = () => {
  return (
    <nav className="border-bottom navbar navbar-expand-lg navbar-light">
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
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
