import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AltNavbar from "./components/AltNavbar";
import MyExercices from "./components/MyExcercices";
const API_URL = "/api";

function App() {
  const [data, setData] = useState("No data :(");

  return (
    <>
      <Navbar />
      <MyExercices />
    </>
  );
}

export default App;
