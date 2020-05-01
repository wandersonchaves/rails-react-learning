import React from "react";
import "./App.css";

function fetchTestData() {
  fetch("/api/v1/tests")
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

function App() {
  return (
    <div className="App">
      <button onClick={fetchTestData}>Fetch Test Data</button>
    </div>
  );
}

export default App;
