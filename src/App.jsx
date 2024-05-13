import "./app.css";
import React from "react";
import Sidebar from "./Components/SideBar Section/Sidebar.jsx";
import Body from "./Components/Body Section/Body.jsx";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
};

export default App;
