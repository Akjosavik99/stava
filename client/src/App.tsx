import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
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
      <h1>MERN App!</h1>
      <p>Data from server: {data}</p>
    </>
  );
}

export default App;
