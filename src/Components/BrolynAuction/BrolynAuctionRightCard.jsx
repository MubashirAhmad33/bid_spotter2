import img1 from '../../images/BrolynAuction/Ellipse 8.png';
import SeeAuctionRightCard from '../SeeAuction/SeeAuctionRightCard';
import './BrolynAuctionRightCard.css'


function BrolynAuctionRightCard(){
    return(
<div className="col-7 mt-5">
    <div className="BrolynCard">
        <div className="BrolynCard-head">
            <img src={img1} alt="" />
            <span className='brolynlogotext'>brolyn auctions</span>
        </div>
        <div className="border mt-3"></div>
        <div className="Brolyn-Email">
            <p className='Brolyn-Email-para'><span className='ColorEmail'>email auctioneers </span>(574) 933-544</p>
        </div>
        <div className="Brolyn-List">
<ul className="unorder-list">
    <li className="BrolynListitem">2856 jeanwood drive</li>
    <li  className="BrolynListitem">unit</li>
    <li  className="BrolynListitem">indiana</li>
    <li  className="BrolynListitem">united state</li>
</ul>
        </div>
       
    </div>
  {/* <!-- ----------------Sort Div 1----------------- --> */}
  <div className="bg-white mt-3" style={{height:"60px",display:"flex", alignItems:"center",flexWrap:"wrap" ,justifyContent:"space-between",paddingRight:"2rem"}}>
                <span className="ps-4" style={{marginRight:"1rem"}}>Sort By  
                <select className="ms-2" name="cars" id="cars">
                  <option value="volvo">Date</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                </span>
               
              </div>
              <SeeAuctionRightCard/>

              
           
            
</div>
    )
}
export default BrolynAuctionRightCard;