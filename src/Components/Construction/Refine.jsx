import React ,{useState} from "react";
import "./refine.css"
import carosuelimg from "../../images/Construction/carousel-img.png";
import stars from "../../images/Construction/stars.png";
import question from "../../images/Construction/question.png";
import ActionType from '../CheckBoxes/ActionType';
import Autioneer from '../CheckBoxes/Autioneer';
import Brands from '../CheckBoxes/Brands';
import Category from '../CheckBoxes/Category';
import Country from '../CheckBoxes/Country';
import ItemTypes from '../CheckBoxes/ItemTypes';
import StateAndProvence from '../CheckBoxes/StateAndProvence';

const Refine = () => {
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
    <>
      <div className=" container mt-3 refine-container">
        <div className="l-refine">
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
lots with image only
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
    show only bulk lots  </button>
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
    show completed lots
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
    primary category
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
    category
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
    Brand
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
    item type
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
      state/province    </button>
  </h2>
  {selectedOption.includes("state") && <StateAndProvence />}
</div>

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
      Town/City
    </button>
  </h2>
  {selectedOption.includes("autioneer") && <Autioneer />}

</div>
</div>
</div>
</div>
        </div>
        <div className="r-refine">

          {/* Div Para */}
          <div className="r-refine-head">
                  <p>there are 456 items  within this sale</p>

          </div>
           {/* <!-- ----------------Pagination Div 2----------------- --> */}
         
         
           <div className="div_2 d-flex mt-4">

<p>Lots Per Page</p>

<div className="pagnination_div_2">
    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end pagination_ul">
            <li className="page-item disabled">
                <button className="pagination_btn"><i className="fa fa-angle-left"
                        aria-hidden="true"></i></button>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">6</a></li>
            <li className="page-item"><a className="page-link" href="#">.</a></li>
            <li className="page-item"><a className="page-link" href="#">.</a></li>
            <li className="page-item"><a className="page-link" href="#">.</a></li>
            <li className="page-item"><a className="page-link" href="#">67</a></li>
            <li className="page-item">
                <button className="pagination_btn"><i className="fa fa-angle-right"
                        aria-hidden="true"></i></button>
            </li>
        </ul>
    </nav>
</div>
</div>
         <div className="refine-card">
        {[1,2,3,4,5,6,7,8].map((item,index)=>{
          const carouselId = `carouselExampleInterval${index}`;
            return(
                <section key={index}>
                <div 
                  className="bg-white main-refine div"
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    id={carouselId}
                    className="  carousel slide"
                    data-bs-ride="carousel"
                    style={{
                      width: "100%",
                      height: "auto",
                      position: "relative",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="img-fluid card-img"
                          src={carosuelimg}
                          style={{ height: "264px", wight: "365px" }}
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="img-fluid card-img"
                          src={carosuelimg}
                          style={{ height: "264px", wight: "365px" }}
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="img-fluid card-img"
                          src={carosuelimg}
                          style={{ height: "264px", wight: "365px" }}
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#${carouselId}`}
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                        style={{ backgroundColor: "#413960", color: "white" }}
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#${carouselId}`}
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                        style={{ backgroundColor: "#413960", color: "white" }}
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                    <img
                      src={stars}
                      alt=""
                      className="stars"
                      style={{ height: "19px", width: "67.14px" }}
                    />
                  </div>
                  <div 
                    className="bg-white "
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      
                    }}
                  >
                    <p className="carosuel-text">
                      1A DRI-EAZ negative air machine model
                    </p>
                    <div className="current-bid">
                      cruuent bid<span className="gbp12">12GBP</span>
                    </div>
                    <div className="text-center">
                      <button className="max-btn">max bid uSD</button>
                      <button className="bid-btn">Bid</button>
                    </div>
                    <div className="ps-2 mt-4">
                      <button className="adi-btn">
                        additional fee{" "}
                        <img
                          src={question}
                          style={{
                            height: "20px",
                            width: "20px",
                            marginLeft: "2px",
                            marginTop: "-5px",
                          }}
                        />
                      </button>
                    </div>
                    <div className="ps-3 mt-3 endin-text">
                      ends in <span>3h 45min</span>
                    </div>
                    <div className="ps-3 mt-3 pb-4 endin-text">
                      Location: <span>United State</span>
                    </div>
                  </div>
                </div>
              </section>
            )
        })} 
       </div>
       </div>
      </div>
    </>
  );
};

export default Refine;
