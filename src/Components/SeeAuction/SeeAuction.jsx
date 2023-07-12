import ActionType from "../CheckBoxes/ActionType";
import Category2 from "../CheckBoxes/Category2";
import Auctions from "../CheckBoxes/Auctions";
import Autioneer from "../CheckBoxes/Autioneer";
import Country from "../CheckBoxes/Country";
import StateAndProvence from "../CheckBoxes/StateAndProvence";
import Association from "../CheckBoxes/Associations";

import React, { useState } from "react";
import SeeAuctionRightSide from "./SeeAuctionRightSide";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

function SeeAuction() {
  const [selectedOption, setSelectedOption] = useState([]);
  const handleCheckboxChange = (value) => {
    setSelectedOption((prevOptions) => {
      if (prevOptions && prevOptions.includes(value)) {
        // Remove the value from the array
        return prevOptions.filter((option) => option !== value);
      } else {
        // Add the value to the array
        return [...(prevOptions || []), value];
      }
    });
  };
  return (
    <section>
      <Header />
      <div className="container">
        <div className="row">
          <div>
            <nav
              style={{ "--bs-breadcrumb-divider": ">" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb view_lot_breadcrumb_div">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Auction Catalog{" "}
                </li>
              </ol>
            </nav>
          </div>

          {/* <!-- ------Main Heading Div 2------ --> */}
          <div>
            <h2 className="view_lot_heading">We Found 56 Auctions</h2>
          </div>
          {/* Border */}
          <div className="bottomborder"></div>
          {/* <!-- -------------------Row Left Coloumn--------------- --> */}
          <div className="col-5 ">
            {/* <!-- ------Paragraph Div 3------- --> */}
            <div className="mt-4">
              <p className="view_lot_paragraph">
                We Found 3042 Item Matching Your Search{" "}
              </p>
            </div>

            {/* <!-- ------Search Lot Div 4--------- --> */}
            <div>
              <h4 className="view_lots_heading_4">Refine Your Search </h4>

              <div className="container mt-3 accordion_container">
                <div
                  className="accordion view_lots_accordion_div"
                  id="accordionPanelsStayOpenExample"
                >
                  {/* Auctioneer */}
                  <div className="accordion-item view_lots_accordion_item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTen"
                    >
                      <button
                        className="accordion-button barfi-btn view_lots_accordion_button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTen"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTen"
                      >
                        <div className="form-check accordion_checkbox_div mt-1">
                          <input
                            className="form-check-input chkAll me-2 accordion_check_box"
                            type="checkbox"
                            value=""
                            id="chkAccordion3All"
                            checked={
                              selectedOption &&
                              selectedOption.includes("autioneer")
                            }
                            onChange={() => handleCheckboxChange("autioneer")}
                          />
                        </div>
                        Autioneer
                      </button>
                    </h2>
                    {selectedOption.includes("autioneer") && <Autioneer />}
                  </div>
                  <div className="accordion-item view_lots_accordion_item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        className="accordion-button barfi-btn view_lots_accordion_button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        <div className="form-check accordion_checkbox_div mt-1">
                          <input
                            className="form-check-input chkAll me-2 accordion_check_box"
                            type="checkbox"
                            value=""
                            id="chkAccordion3All"
                            checked={
                              selectedOption &&
                              selectedOption.includes("category")
                            }
                            onChange={() => handleCheckboxChange("category")}
                          />
                        </div>
                        Category
                      </button>
                    </h2>
                    {selectedOption.includes("category") && <Category2 />}
                  </div>

                  <div className="accordion-item view_lots_accordion_item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button barfi-btn view_lots_accordion_button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        <div className="form-check accordion_checkbox_div mt-1">
                          <input
                            className="form-check-input chkAll me-2 accordion_check_box"
                            type="checkbox"
                            value=""
                            id="chkAccordion3All"
                            checked={
                              selectedOption &&
                              selectedOption.includes("Autions")
                            }
                            onChange={() => handleCheckboxChange("Autions")}
                          />
                        </div>
                        <p>Auction 's</p>
                      </button>
                    </h2>
                    {selectedOption.includes("Autions") && <Auctions />}
                  </div>

                  <div className="accordion-item view_lots_accordion_item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFive"
                    >
                      <button
                        className="accordion-button barfi-btn view_lots_accordion_button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                      >
                        <div className="form-check accordion_checkbox_div mt-1">
                          <input
                            className="form-check-input chkAll me-2 accordion_check_box"
                            type="checkbox"
                            value=""
                            id="chkAccordion3All"
                            checked={
                              selectedOption &&
                              selectedOption.includes("ActionType")
                            }
                            onChange={() => handleCheckboxChange("ActionType")}
                          />
                        </div>
                        Auction type
                      </button>
                    </h2>
                    {selectedOption.includes("ActionType") && <ActionType />}
                  </div>

                  <div className="accordion-item view_lots_accordion_item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingSix"
                    >
                      <button
                        className="accordion-button barfi-btn view_lots_accordion_button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSix"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSix"
                      >
                        <div className="form-check accordion_checkbox_div mt-1">
                          <input
                            className="form-check-input chkAll me-2 accordion_check_box"
                            type="checkbox"
                            value=""
                            id="chkAccordion3All"
                            checked={
                              selectedOption &&
                              selectedOption.includes("Country")
                            }
                            onChange={() => handleCheckboxChange("Country")}
                          />
                        </div>
                        Country
                      </button>
                    </h2>
                    {selectedOption.includes("Country") && <Country />}
                  </div>

                  <div className="accordion-item view_lots_accordion_item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingSeven"
                    >
                      <button
                        className="accordion-button barfi-btn view_lots_accordion_button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSeven"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSeven"
                      >
                        <div className="form-check accordion_checkbox_div mt-1">
                          <input
                            className="form-check-input chkAll me-2 accordion_check_box"
                            type="checkbox"
                            value=""
                            id="chkAccordion3All"
                            checked={
                              selectedOption &&
                              selectedOption.includes("Association")
                            }
                            onChange={() => handleCheckboxChange("Association")}
                          />
                        </div>
                        Association{" "}
                      </button>
                    </h2>
                    {selectedOption.includes("Association") && <Association />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SeeAuctionRightSide />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default SeeAuction;
