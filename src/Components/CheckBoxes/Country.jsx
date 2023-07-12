import React from "react";

const Country = () => {
  return (
    <div
      id="panelsStayOpen-collapseEight"
      // className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingEight"
    >
      <div className="accordion-body view_lots_accordion_body">
        <ul>
          <li className="category">
            <a href="">England (4567)</a>
          </li>
          <li className="category">
            <a href="">Canada (4765)</a>
          </li>
          <li className="category">
            <a href="">United State (5634)</a>
          </li>
          <li className="category">
            <a href="">South Africa (3478)</a>
          </li>
          <li className="additional-categories" style={{ display: "none" }}>
            <a href="">Malaysia (3452)</a>
          </li>
          <li className="additional-categories" style={{ display: "none" }}>
            <a href="">Coloumbia (8743)</a>
          </li>
          <li className="additional-categories" style={{ display: "none" }}>
            <a href="">America (37455)</a>
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

export default Country;
