import Location from '../CheckBoxes/Location';
import React,{useState} from 'react';
import BrolynAuctionRightCard from './BrolynAuctionRightCard';

function BrolynAuction (){
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
    return(
<section>
        <div className="container">
            <div className="row">
                <div style={{textTransform:"capitalize"}}>
                    <nav  style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
                        <ol className="breadcrumb view_lot_breadcrumb_div">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">auctioneer directory  </li>
                            <li className="breadcrumb-item active" aria-current="page">brolyn auction</li>
                            
                        </ol>
                    </nav>
                </div>
                 {/* <!-- ------Main Heading Div 2------ --> */}
             <div>
            <h2 className="view_lot_heading" style={{textTransform:"capitalize"}}>Auctions From Brolyn Buction </h2>
            </div>
                {/* border */}
                <div className="border mt-3" style={{border:"2px solid blue"}}></div>





              {/* BrolynAyction Left Coloum */}

                <div className="col-5 ">
          <div className='mt-5 '>
<h4 className="view_lots_heading_4">Refine Your Search </h4>

<div className="container mt-3 accordion_container">
<div
className="accordion view_lots_accordion_div"
id="accordionPanelsStayOpenExample"
>
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
    <p>Auction s</p>
  </button>
</h2>
{selectedOption.includes("location") && <Location />}
</div>
    </div>
    </div>
    </div>
            
          </div>
                
      
          {/* BrolynAuctionRightCard */}
          <BrolynAuctionRightCard/>
          </div>
       </div>
</section>
    )
}
export default BrolynAuction;