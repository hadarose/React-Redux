import React from 'react';
import User from "./Redux/User.js";
import "./index.css";

function App() {
  return <div className="mainDiv">
      <h1>Demo of React Redux</h1>
      <h2>Syncing 3 Layers</h2>
      <User /> <br />
    </div>
}

export default App;