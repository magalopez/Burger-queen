import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/burger_queen.png";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ "min-height": 2.25 + "rem" }}
      >
        <h1 className="title-burguer-queen  column is-12 has-text-centered ">
          Burger Queen
        </h1>
      </nav>
      <nav className="navbar is-warning">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item App-Header">
              <img src={logo} alt="burgerqueen logo" className="App-logo" />
            </Link>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped ">
                  <div className="control">
                    <Link to="/menu" class="title has-text-white ">
                      <span className="icon">
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      <span>ORDEN</span>
                    </Link>
                  </div>

                  <div className="control">
                    <Link to="/cocina" class="title has-text-white ">
                      <i class="fas fa-hamburger"></i>
                      COCINA
                    </Link>
                  </div>
                  <div className="control">
                    <Link to="/historial" class="title has-text-white ">
                      <i className="fas fa-clock"></i>
                      HISTORIAL
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
