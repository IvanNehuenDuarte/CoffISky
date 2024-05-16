import React from "react";
import "./listing.css";

// Imported Icons =========>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// Imported Images =========>
import img from "../../../Assets/image (1).png";
import img1 from "../../../Assets/image (9).png";
import img2 from "../../../Assets/image (8).png";
import img3 from "../../../Assets/image (10).png";
import user1 from "../../../Assets/user (1).jpg";
import user2 from "../../../Assets/user (2).jpg";
import user3 from "../../../Assets/user (3).jpg";
import user4 from "../../../Assets/user (4).jpg";

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
          <img src={img} alt="Cappuccino" />
          <h3>Cappuccino</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img1} alt="Espresso" />
          <h3>Espresso</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="Americano" />
          <h3>Americano</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img3} alt="Frappé" />
          <h3>Frappé</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image1" />
              <img src={user2} alt="User Image2" />
              <img src={user3} alt="User Image3" />
              <img src={user4} alt="User Image4" />
            </div>
            <div className="cardText">
              <span>
                14.556 Coffee Beans Sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Image1" />
              <img src={user1} alt="User Image2" />
              <img src={user4} alt="User Image3" />
              <img src={user2} alt="User Image4" />
            </div>
            <div className="cardText">
              <span>
                28,556 Coffee Beans Sold <br />
                <small>
                  26 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
