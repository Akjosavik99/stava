import React from "react";
import styled from "styled-components";
import stavaLogo from "../assets/stava_logo.svg";
import strongMan from "../assets/strong_man.svg";

const styles = {
  nav: {
    backgroundColor: "#f16a00",
  },
  img: {
    backgroundColor: "white",
  },
} as const;

function AltNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={styles.nav}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={stavaLogo}
              style={styles.img}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Hjem
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Grupper
                </a>
              </li>
              <li className="nav-item dropdown">
                <img
                  src={strongMan}
                  alt="Logo"
                  width="60"
                  height="48"
                  className="d-inline-block align-text-top"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AltNavbar;
