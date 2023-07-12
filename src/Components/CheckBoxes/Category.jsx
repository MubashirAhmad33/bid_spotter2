import React, { useState } from "react";

const Category = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      <div
        id="panelsStayOpen-collapseFour"
        aria-labelledby="panelsStayOpen-headingFour"
      >
        <div className="accordion-body view_lots_accordion_body">
          <ul>
            <li className="category">
              <a href="">Restaurant and Bar Equipment (2345)</a>
            </li>
            <li className="category">
              <a href="">Processing (345)</a>
            </li>
            <li className="category">
              <a href="">Refrigeration (245)</a>
            </li>
            <li className="category">
              <a href="">Cooker and Cookware (235)</a>
            </li>
            {showMore && (
              <>
                <li className="additional-categories">
                  <a href="">Agriculture Equipments (245)</a>
                </li>
                <li className="additional-categories">
                  <a href="">Automotive & Vehicles (145)</a>
                </li>
                <li className="additional-categories">
                  <a href="">Computer & Electronics (35)</a>
                </li>
                <li className="additional-categories">
                  <a href="">wood working (89)</a>
                </li>
                <li className="additional-categories">
                  <a href="">Other Industry (521)</a>
                </li>
              </>
            )}
          </ul>
          <div className="text-end">
            {!showMore && (
              <button
                className="btn btn-primary show_more_button"
                type="button"
                onClick={handleShowMore}
              >
                <span>Show More</span>
                <i className="fas fa-caret-down"></i>
              </button>
            )}
          </div>
          <div className="view_lots_location_row_border"></div>
        </div>
      </div>
    </div>
  );
};

export default Category;
