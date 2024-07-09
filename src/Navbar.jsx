import React, { useState } from "react";
import { BrowserRouter, NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    if (isNavOpen) {
      closeNav(); // Close the navbar if it's open
    } else {
      setIsNavOpen(true); // Open the navbar if it's closed
    }
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleLinkClick = () => {
    closeNav();
  };

  return (
    <>
      <BrowserRouter>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/" onClick={closeNav}>
                    Talkwell
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNav}
                  >
                    <span className="navbar-toggler-icon e-small"></span>
                  </button>
                  <div
                    className={`collapse navbar-collapse ${
                      isNavOpen ? "show" : ""
                    }`}
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu-active"
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                          onClick={handleLinkClick}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          to="/contact"
                          onClick={handleLinkClick}
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
