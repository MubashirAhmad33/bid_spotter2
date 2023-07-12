import img1 from "../../images/SeeAuction/image 52.png";
import img2 from "../../images/SeeAuction/Vector.png";
import img3 from "../../images/SeeAuction/Vector (1).png";
import "./SeeAuctoinRightSideCard.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
function SeeAuctionRightCard() {
  const [activeButton, setActiveButton] = useState("");
  const Navigate = useNavigate();

  const handlewebcast = (buttonName) => {
    setActiveButton(buttonName);
    Navigate("/SingupPage");
  };
  return (
    <div className="RightCardWrapper mt-4">
      {[1, 2, 3, 4].map((item) => {
        return (
          <div className="   RightCard">
            <div className=" col-sm-12 col-md-6 col-lg-6  col-12 leftside  ">
              <img src={img1} alt="" className="img-fluid" />
            </div>
            <div className=" col-sm-12 col-md-6 col-lg-6 col-12 rightside ">
              <div className="head_rightside">
                <p className="para_head_rightside">
                  precision CNC machining and MFG Facility
                </p>
              </div>
              <div className="img_rightside">
                <img src={img2} alt="" />
                <span className="text_watch_rightside">
                  ends from mar 21 , 2023
                </span>
              </div>
              <div className="img_rightside">
                <img src={img3} alt="" />
                <span className="text_watch_rightside">California</span>
              </div>
              <div className="OrderList_rightside ">
                <p className="Listitem_rightside">Machine tool</p>
                <p className="Listitem_rightside">Machine (33)</p>
                <p className="Listitem_rightside">Machine tool</p>
                <p className="Listitem_rightside">+22more</p>
              </div>

              <div className="btncontainer_rightside">
                <button
                  to="/ConstructionPage"
                  className={`rightsidebtn ${
                    activeButton === "auction" ? "actives" : ""
                  }`}
                  onClick={() => handlewebcast("auction")}
                >
                  view auction
                </button>
                <button
                  className={`rightsidebtn ${
                    activeButton === "webcast" ? "actives" : ""
                  }`}
                  onClick={() => handlewebcast("webcast")}
                >
                  live webcast
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SeeAuctionRightCard;
