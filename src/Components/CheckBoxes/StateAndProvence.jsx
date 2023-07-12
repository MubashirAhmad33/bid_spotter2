import React from "react";

const StateAndProvence = () => {
  return (
    <div
      id="panelsStayOpen-collapseNine"
      //   className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingNine"
    >
      <div className="accordion-body view_lots_accordion_body">
        <form action="">
          <div className="mb-3">
            <input
              type="text"
              className="form-control view_lots_location_col_form_select"
              id="formGroupExampleInput"
              placeholder="Enter Brand"
            />
          </div>
        </form>
        <ul>
          <li className="category">
            <a href="">Alberta (56)</a>
          </li>
          <li className="category">
            <a href="">Arizona (43)</a>
          </li>
          <li className="category">
            <a href="">Albama (345)</a>
          </li>
          <li className="category">
            <a href="">British Coloumbia (235)</a>
          </li>
          <li className="additional-categories" style={{ display: "none" }}>
            <a href="">Computer & Electronics (35)</a>
          </li>
          <li className="additional-categories" style={{ display: "none" }}>
            <a href="">wood working (89)</a>
          </li>
          <li className="additional-categories" style={{ display: "none" }}>
            <a href="">Other Industry (521)</a>
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

export default StateAndProvence;
