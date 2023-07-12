import React from "react";
import arrowleft from "../../images/AuctionBid/arrowleft.png";
import arrowright from "../../images/AuctionBid/arrowright.png";
import cardimg1 from "../../images/AuctionBid/cardwatch.png";
import car from "../../images/AuctionBid/car.png";
import "./AuctionCatalog.css";

function AuctionCataLogCards() {
  return (
    <div className="container">
      <div className="row">
        <div className="AuctionCard_head  mt-2">
          <h2 className="AuctionCatalogCards_heading">
            more items from this auction
          </h2>

          <div className="NextPrev_btn ">
            <img src={arrowleft} alt="" className="light img-fluid" />
            <img src={arrowright} alt="" className="dark img-fluid" />
          </div>
        </div>

        {[1, 2, 3].map((item) => {
          return (
            <div className="col-lg-4 col-md-6  mt-2">
              <div className="card ">
                <img
                  className="card-img-top img-fluid"
                  src={cardimg1}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">rolex men’s watch...</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Row Card 2 */}
        <div className="AuctionCard_head  mt-2 ">
          <h2 className="AuctionCatalogCards_heading">
            more items from this auction
          </h2>

          <div className="NextPrev_btn ">
            <img src={arrowleft} alt="" className="light img-fluid" />
            <img src={arrowright} alt="" className="dark img-fluid" />
          </div>
        </div>

        {[1, 2, 3].map((item) => {
          return (
            <div className="col-lg-4 col-md-6 mt-2">
              <div className="card ">
                <img
                  className="card-img-top img-fluid"
                  src={car}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">rolex men’s watch...</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AuctionCataLogCards;
