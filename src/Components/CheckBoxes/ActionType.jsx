import React from "react";

const ActionType = () => {
  return (
    <div
      id="panelsStayOpen-collapseSeven"
      //   className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingSeven"
    >
      <div className="accordion-body view_lots_accordion_body">
        <ul>
          <li className="category">
            <a href="">Live Webcast (345)</a>
          </li>
          <li className="category">
            <a href="">Timed Online (235)</a>
          </li>
          <li className="additional-categories" style={{ display: "none" }}>
            <a href="">Agriculture Equipments (245)</a>
          </li>
          <li className="additional-categories" style={{ display: "none" }}>
            <a href="">Automotive & Vehicles (145)</a>
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

export default ActionType;
