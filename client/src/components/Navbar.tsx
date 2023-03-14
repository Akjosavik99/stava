import stavaLogoWhite from "../assets/logo/stava_logo_white.png";
import viewworkoutprogram from "../assets/navbarassets/viewworkoutprogram.png";
import createworkoutprogram from "../assets/navbarassets/createworkoutprogram.svg";
import createworkout from "../assets/navbarassets/createworkout.png";
import { useEffect, useState } from "react";
import { fetchUser } from "../utils/api";
import { Log, User } from "../types/userType";

const styles = {
  nav: {
    backgroundColor: "#f16a00",
  },
} as const;

function Navbar() {
  const [user, setUser] = useState(undefined as any);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    fetchUser()
      .then((res) => {
        if (res.data.data) {
          setUser(res.data.data);
          setStreak(findStreak(res.data.data));
        } else {
          setUser(undefined);
        }
      })
      .catch((e) => {
        setUser(undefined);
        console.log(e);
      });
  }, []);

  const formatDate = (numberdate: number) => {
    return new Date(numberdate);
  };

  const findStreak = (user: User) => {
    const logs: Log[] = user.log.reverse();
    let tmp = 0;
    const today = new Date();

    for (let i = 0; i < logs.length - 1; i++) {
      const date = formatDate(Date.parse(logs[i].date));
      const date2 = formatDate(Date.parse(logs[i + 1].date));
      if (i == 0) {
        if (today.getDate() - date.getDate() > 1) {
          break;
        } else {
          tmp++;
        }
      }

      if (date.getDate() - date2.getDate() > 1) {
        break;
      }
      if (date.getDate() - date2.getDate() == 1) {
        tmp++;
      }

      // tmp++;
    }
    return tmp;
  };
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
              <li className="nav-item-dropdown px-3">
                <a className="nav-link" href="/viewprogress">
                  <h1>🔥 {streak}</h1>
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
