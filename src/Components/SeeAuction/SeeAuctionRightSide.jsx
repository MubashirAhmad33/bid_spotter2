import SeeAuctionRightCard from "./SeeAuctionRightCard";

function SeeAuctionRightSide(){
    return(
<div className="col-7">

{/* Search Bar */}
<div className="bg-white mt-3" style={{height:"60px",display:"flex", alignItems:"center",flexWrap:"wrap" ,justifyContent:"space-between",paddingRight:"2rem"}}>
                <span className="ps-4" style={{marginRight:"1rem"}}>Sort By  
                <select className="ms-2" name="cars" id="cars" style={{border:"2px solid black", padding:"0 5px"}}>
                  <option value="volvo">Lot Number</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                </span>
          
              </div>
             {/* Pagination */}
              <div className="div_2 d-flex mt-4">
             <div className="checkbox_div_2">
             <input class="form-check-input chkAll "
                                                type="checkbox" value="" id="chkAccordion1All"/>
<span style={{marginLeft:"5px"}}>Lots Per Page</span> 

             </div>
<div className="pagnination_div_2">
    
    <nav aria-label="Page navigation example">   
        <ul className="pagination justify-content-end pagination_ul">
       <li className="page-item mt-2 ml-5"> <input class="form-check-input chkAll "
                                                type="checkbox" value="" id="chkAccordion1All"/></li>
            {/* <li className="page-item disabled">
                <button className="pagination_btn"><i className="fa fa-angle-left"
                        aria-hidden="true"></i></button>
            </li> */}
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
                <button className="pagination_btn"><i className="fa fa-angle-right"
                        aria-hidden="true"></i></button>
            </li>
        </ul>
    </nav>
</div>
</div>

{/* SeeAuctionRightCard */}
<SeeAuctionRightCard/>



</div>
    )
};
export default SeeAuctionRightSide;