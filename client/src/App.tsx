import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
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
