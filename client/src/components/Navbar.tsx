import React from "react";
import stavaLogoWhite from "../assets/logo/stava_logo_white.png";
import strongMan from "../assets/navbarassets/strong_man.svg";
import homeIcon from "../assets/navbarassets/home_icon.png";
import groupsIcon from "../assets/navbarassets/groups_icon.png";

const styles = {
  nav: {
    backgroundColor: "#f16a00",
  },
} as const;

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand" style={styles.nav}>
        <div className="container-fluid me-5 pe-5">
          <a className="navbar-brand" href="/">
            <img
              src={stavaLogoWhite}
              alt="Logo"
              width="50"
              height="48"
              className="d-inline-block align-text-top"
            />
          </a>
          <div
            className="collapse navbar-collapse ps-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <a className="nav-link active" aria-current="page" href="/">
                  <img
                    src={homeIcon}
                    alt="Logo"
                    width="50"
                    height="48"
                    className="d-inline-block align-text-top"
                  />
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="/">
                  <img
                    src={groupsIcon}
                    alt="Logo"
                    width="50"
                    height="48"
                    className="d-inline-block align-text-top"
                  />
                </a>
              </li>
              <li className="nav-item dropdown px-3">
                <a className="nav-link" href="/">
                  <img
                    src={strongMan}
                    alt="Logo"
                    width="50"
                    height="48"
                    className="d-inline-block align-text-top"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
