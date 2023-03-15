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
    const oneDay = 86400000;
    const logs: Log[] = user.log.reverse();
    let tmp = 1;
    const todayMilli = new Date().getTime();
    const yesterdayMilli = new Date().getTime() - oneDay;

    // Checks if log is empty
    if (logs.length == 0) {
      return 0;
    }

    // Checks if the user logged today or yeasterday
    if (
      new Date(todayMilli).getDate() !=
        formatDate(Date.parse(logs[0].date)).getDate() &&
      formatDate(Date.parse(logs[0].date)).getDate() !=
        new Date(yesterdayMilli).getDate()
    ) {
      console.log("not today or yesterday");

      return 0;
    }

    // Checks the users logging length
    for (let i = 0; i < logs.length - 1; i++) {
      const dateMilli = Date.parse(logs[i].date);
      const date2Milli = Date.parse(logs[i + 1].date);

      // Adds one to the streak if the user logged two days in a row
      if (
        new Date(dateMilli - oneDay).getDate() == new Date(date2Milli).getDate()
      ) {
        tmp++;
      }

      // Breaks the loop if the user didn't log two days in a row
      if (
        new Date(dateMilli).getDate() != new Date(date2Milli).getDate() &&
        new Date(dateMilli - oneDay).getDate() != new Date(date2Milli).getDate()
      ) {
        break;
      }
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
