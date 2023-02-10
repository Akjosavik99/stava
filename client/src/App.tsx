import React, { useEffect, useState } from "react";
const API_URL = "/api";

function App() {
  const [data, setData] = useState("No data :(");

  return (
    <>
      <h1>MERN App!</h1>
      <p>Data from server: {data}</p>
    </>
  );
}

export default App;
