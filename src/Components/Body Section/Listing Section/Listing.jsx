import React from "react";
import "./listing.css";

// Imported Icons =========>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

// Imported Images =========>
import img from "../../../Assets/image (1).png";
// import img2 from "../../../Assets/image (9).png";
// import img3 from "../../../Assets/image (8).png";
// import img4 from "../../../Assets/image (10).png";

function Listing() {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Cappuccino coffee cup</h3>
        </div>

        {/* <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img2} alt="Image Name" />
          <h3>Cappuccino coffee cup</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img3} alt="Image Name" />
          <h3>Cappuccino coffee cup</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img4} alt="Image Name" />
          <h3>Cappuccino coffee cup</h3>
        </div> */}
      </div>
    </div>
  );
}

export default Listing;
