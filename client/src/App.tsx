import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AltNavbar from "./components/AltNavbar";
import MyExercices from "./components/MyExcercices";
const API_URL = "/api";

function App() {
  const [data, setData] = useState("No data :(");

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.msg);
    }
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <MyExercices />
    </>
  );
}

export default App;
