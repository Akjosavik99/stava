import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MyExercises from "./components/MyExercises";
const API_URL = "/api";

function App() {
  const [data, setData] = useState("No data :(");

  return (
    <>
      <Navbar />
      <MyExercises />
    </>
  );
}

export default App;
