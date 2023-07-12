import React from "react";

const Location = () => {
  return (
    <div
      id="panelsStayOpen-collapseThree"
      className="accordion-collapse collapse show"
      aria-labelledby="panelsStayOpen-headingThree"
    >
      <div className="accordion-body view_lots_accordion_body">
        <form className="row g-3 view_lots_location_row">
          <h4>Within:</h4>
          <div className="col-md-6 view_lots_location_col">
            <select
              className="form-select form-select-md mb-3 view_lots_location_col_form_select"
              aria-label=".form-select-lg example"
            >
              <option selected>Select Miles</option>
              <option value="1">10 Miles</option>
              <option value="2">20 Miles</option>
              <option value="3">30 Miles</option>
            </select>
          </div>
          <div className="col-md-6 view_lots_location_col">
            <input
              type="text"
              className="form-control view_lots_location_col_form_select"
              id="inputZip"
              placeholder="Post/Zip Code"
            />
          </div>
          <div className="col-md-12 view_lots_location_col">
            <select
              className="form-select form-select-md mb-3 view_lots_location_col_form_select"
              aria-label=".form-select-lg example"
            >
              <option selected>State</option>
              <option value="1">Afghanistan</option>
              <option value="2">Australia</option>
              <option value="3">Bangladesh</option>
              <option value="4">Brazil</option>
              <option value="5">Canada</option>
              <option value="6">Colombia</option>
              <option value="7">Denmark</option>
              <option value="8">Egypt</option>
              <option value="9">France</option>
            </select>
          </div>
          <div className="col-md-12 view_lots_location_col">
            <button
              type="submit"
              className="btn btn-primary view_lots_location_col_form_select"
            >
              Apply Filter To Result
            </button>
          </div>
          <div className="view_lots_location_row_border"></div>
        </form>
      </div>
    </div>
  );
};

export default Location;
