import React from "react";
import stavaLogoWhite from "../assets/logo/stava_logo_white.png";
import profile from "../assets/navbarassets/profile.svg";
import home from "../assets/navbarassets/home.png";
import groups from "../assets/navbarassets/groups.png";
import viewworkoutprogram from "../assets/navbarassets/viewworkoutprogram.png";
import createworkoutprogram from "../assets/navbarassets/createworkoutprogram.svg";
import createworkout from "../assets/navbarassets/createworkout.png";

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
                <a className="nav-link" href="/createworkout">
                  <img
                    src={createworkout}
                    alt="Logo"
                    width="50"
                    height="48"
                    className="d-inline-block align-text-top"
                  />
                </a>
              </li>
              <li className="nav-item dropdown px-3">
                <a className="nav-link" href="/newprogram">
                  <img
                    src={createworkoutprogram}
                    alt="Logo"
                    width="50"
                    height="48"
                    className="d-inline-block align-text-top"
                  />
                </a>
              </li>
              <li className="nav-item dropdown px-3">
                <a className="nav-link" href="/programs">
                  <img
                    src={viewworkoutprogram}
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
