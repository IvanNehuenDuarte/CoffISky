import React from "react";
import "./body.css";
import Top from "./Top Section/Top.jsx";
import Listing from "./Listing Section/Listing.jsx";
import Activity from "./Activity Section/Activity.jsx";

function Body() {
  return (
    <div className="mainContent">
      <Top />

      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
}

export default Body;
