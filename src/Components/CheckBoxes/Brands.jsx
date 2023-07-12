import React from "react";

const Brands = () => {
  return (
    <div
      id="panelsStayOpen-collapseFive"
      //   className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingFive"
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
            <a href="">Long (56)</a>
          </li>
          <li className="category">
            <a href="">Cip (43)</a>
          </li>
          <li className="category">
            <a href="">Every Weight-Tronix (345)</a>
          </li>
          <li className="category">
            <a href="">Cooker and Cookware (235)</a>
          </li>
          <li className="category">
            <a href="">Firstam (34)</a>
          </li>
          <li className="category">
            <a href="">Hobart (34)</a>
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

export default Brands;
