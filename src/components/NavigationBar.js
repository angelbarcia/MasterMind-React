import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/block_0127-icon-logo-350x350.png";

function NavigationBar() {
    return (
      <div className="container" style={{ width: '75%' }}>
        <header className="d-flex flex-wrap align-items-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img
              src={logo}
              height="60px"
              width="60px"
              className="ms-2"
              alt="logo"
            />
            <span className="fs-3">MasterMind</span>
          </a>
          <ul className="nav nav-pills mt-2">
            <li className="nav-item">
              <Link to="/" className="nav-link text-primary-emphasis" aria-current="page">
                Game
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-primary-emphasis">
                Instructions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-primary-emphasis">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-primary-emphasis">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-primary-emphasis">
                About
              </Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }

  export default NavigationBar;