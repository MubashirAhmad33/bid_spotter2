import React from "react";

const Autions = () => {
  return (
    <div
      id="panelsStayOpen-collapseTen"
      // className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingTen"
    >
      <div className="accordion-body view_lots_accordion_body">
        <ul>
          <li className="category">
            <a href="">Current </a>
          </li>
          <li className="category">
            <a href="">Past (43)</a>
          </li>
        </ul>
        <div className="text-end">
          <button
            className="btn btn-primary show_more_button"
            type="button"
            onclick="showMore(this)"
          >
            <span>Show More</span>
            <i className="fas fa-caret-down"></i>
          </button>
        </div>
        <div className="view_lots_location_row_border"></div>
      </div>
    </div>
  );
};

export default Autions;
