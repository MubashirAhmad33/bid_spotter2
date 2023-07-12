import React from "react";
import warn from "../../images/AuctionBid/warn.png";

function AuctionCatalogBreadCrum() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center     ">
          <nav
            className="BreadCrumDivider"
            style={{ "--bs-breadcrumb-divider": ">" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb view_lot_breadcrumb_div d-flex align-items-center">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item " aria-current="page">
                Auction Catalog
              </li>
              <li className="breadcrumb-item " aria-current="page">
                Ace Auctioneer pawn shop closure, ro.....
              </li>
              <li className="breadcrumb-item " aria-current="page">
                pawn shop closure, ro.....
              </li>
            </ol>
          </nav>

          <div className="BreadCrum_Language  d-flex justify-content-end align-items-center  ">
            <label htmlFor="">translate option </label>
            <select id="mySelect">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <span className="BreadCrum_Language_para">
              By <span style={{ color: "red" }}>Google</span>
            </span>
          </div>
        </div>
        {/* Border */}
        <hr />

        <div className="BreadCrumb_text_row">
          <div className="col ">
            <div className="row BreadCrumb_Text">
              <div className="col-md-1 col-sm-2 col-3 BreadCrumb_col1">
                <p className="BreadCrum_col1_text1">
                  lot <span className="breadcrumb_break">17</span>
                </p>
              </div>
              <div className="col-md-11 col-sm-10 col-9 BreadCrumb_col2">
                <p className="BreadCrumb_col2_text">
                  vintage Hercules high explosive powder wood box crate ,rare
                  with LID
                </p>
                <span className="BreadCrumb_col2_text2">
                  in pan shop closure, rolex, ammo, gun parts,rar..
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* SignUp and Login Bar */}
        <div className="BreadCrumb_bar mt-3">
          <div className="col">
            <div className="BreadCrumb_bar_content col-md-12 bg-white p-4">
              <img src={warn} alt="" style={{ marginRight: "10px" }} />
              <span>please login or sign up to place a bid</span>
            </div>
          </div>
        </div>

        {/* search input */}
        <div className="serach_bar">
          <input type="text" placeholder="Search By Lot" />
          <button className="search_barbtn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuctionCatalogBreadCrum;
