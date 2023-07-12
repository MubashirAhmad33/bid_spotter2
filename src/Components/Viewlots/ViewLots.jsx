import React, { useState } from "react";
import Location from "../CheckBoxes/Location";
import ActionType from "../CheckBoxes/ActionType";
import Autioneer from "../CheckBoxes/Autioneer";
import Brands from "../CheckBoxes/Brands";
import Category from "../CheckBoxes/Category";
import Country from "../CheckBoxes/Country";
import ItemTypes from "../CheckBoxes/ItemTypes";
import StateAndProvence from "../CheckBoxes/StateAndProvence";
import ViewLotsRight from "./ViewLotsRight";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

function ViewLots() {
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
          {/* Header */}

          {/* <!-- -------------------Row Left Coloumn--------------- --> */}
          <div className="col-5">
            {/* <!-- -----Breadcrumb Div 1---- --> */}
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
                    Food and Beverage Equipment{" "}
                  </li>
                </ol>
              </nav>
            </div>

            {/* <!-- ------Main Heading Div 2------ --> */}
            <div>
              <h2 className="view_lot_heading">
                Food and Beverage Equipment for Sale
              </h2>
            </div>

            {/* <!-- ------Paragraph Div 3------- --> */}
            <div>
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
                  <div className="accordion-item view_lots_accordion_item">
                    <div
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button view_lots_accordion_button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                        id="accordion1btn"
                      >
                        <input
                          className="form-check-input chkAll me-2 accordion_check_box"
                          type="checkbox"
                          value=""
                          id="chkAccordion1All"
                        />
                        Lots With Image Only
                      </button>
                    </div>
                  </div>
                  <div className="accordion-item view_lots_accordion_item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button view_lots_accordion_button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        <div className="form-check accordion_checkbox_div mt-1 ">
                          <input
                            className="form-check-input chkAll me-2 accordion_check_box"
                            type="checkbox"
                            value=""
                            id="chkAccordion2All"
                            onChange={handleCheckboxChange}
                          />
                        </div>
                        Show Only Bulk Lots
                      </button>
                    </h2>
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
                              selectedOption.includes("location")
                            }
                            onChange={() => handleCheckboxChange("location")}
                          />
                        </div>
                        <p>Location</p>
                      </button>
                    </h2>
                    {selectedOption.includes("location") && <Location />}
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
                    {selectedOption.includes("category") && <Category />}
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
                              selectedOption && selectedOption.includes("brand")
                            }
                            onChange={() => handleCheckboxChange("brand")}
                          />
                        </div>
                        Brand
                      </button>
                    </h2>
                    {selectedOption.includes("brand") && <Brands />}
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
                              selectedOption.includes("itemtype")
                            }
                            onChange={() => handleCheckboxChange("itemtype")}
                          />
                        </div>
                        Item Type
                      </button>
                    </h2>
                    {selectedOption.includes("itemtype") && <ItemTypes />}
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
                              selectedOption.includes("actiontype")
                            }
                            onChange={() => handleCheckboxChange("actiontype")}
                          />
                        </div>
                        Auction Type
                      </button>
                    </h2>
                    {selectedOption.includes("actiontype") && <ActionType />}
                  </div>

                  <div className="accordion-item view_lots_accordion_item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingEight"
                    >
                      <button
                        className="accordion-button barfi-btn view_lots_accordion_button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseEight"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseEight"
                      >
                        <div className="form-check accordion_checkbox_div mt-1">
                          <input
                            className="form-check-input chkAll me-2 accordion_check_box"
                            type="checkbox"
                            value=""
                            id="chkAccordion3All"
                            checked={
                              selectedOption &&
                              selectedOption.includes("country")
                            }
                            onChange={() => handleCheckboxChange("country")}
                          />
                        </div>
                        Country
                      </button>
                    </h2>
                    {selectedOption.includes("country") && <Country />}

                    <div className="accordion-item view_lots_accordion_item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingNine"
                      >
                        <button
                          className="accordion-button barfi-btn view_lots_accordion_button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseNine"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseNine"
                        >
                          <div className="form-check accordion_checkbox_div mt-1">
                            <input
                              className="form-check-input chkAll me-2 accordion_check_box"
                              type="checkbox"
                              value=""
                              id="chkAccordion3All"
                              checked={
                                selectedOption &&
                                selectedOption.includes("state")
                              }
                              onChange={() => handleCheckboxChange("state")}
                            />
                          </div>
                          State/Province
                        </button>
                      </h2>
                      {selectedOption.includes("state") && <StateAndProvence />}
                    </div>

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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- -------------------Row Right Coloumn--------------- --> */}
          <ViewLotsRight />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </section>
  );
}
export default ViewLots;
