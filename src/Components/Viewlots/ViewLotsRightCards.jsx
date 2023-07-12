import React from "react";
import { Carousel, Button } from "react-bootstrap";
import img1 from "../../images/view_lots_pg/Rectangle 58.png";
import img2 from "../../images/view_lots_pg/Rectangle 60.png";
import img3 from "../../images/view_lots_pg/watch.png";

function ViewLotsRightCards() {
  return (
    // <!-- ----------------Cards Div 3----------------- -->

    <div
      class="container p-0"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}
    >
      {[1, 2, 3, 4].map((item) => {
        return (
          <div class="row ">
            {/* cards */}
            <div className="col-md-12 mt-4">
              <div className="card bid_card">
                <div className="card_image_carousel">
                  <Carousel id="carouselExampleControls">
                    <Carousel.Item>
                      <img src={img1} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={img2} className="d-block w-100" alt="..." />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="card-body bid_card_body">
                  <h5 className="card-title">
                    <span className="bid_card_body_span">345 </span>
                    Oil Catch Tray
                  </h5>
                  <h6>Brolyn Auction</h6>
                  <div className="bid_card_body_timed d-flex">
                    <img src={img3} alt="" />
                    <p>Timed</p>
                  </div>
                  <div className="bid_card_body_current d-flex">
                    <p>Current Bid</p>
                    <span>12GBP</span>
                  </div>
                  <div className="bid_card_body_additional d-flex">
                    <p>Additional Fee</p>
                    <i
                      className="fa fa-question-circle-o"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="bid_card_body_count d-flex">
                    <p>Ends In: </p>
                    <p id="demo"></p>
                  </div>
                  <div className="bid_card_body_location d-flex">
                    <p>Location: </p>
                    <span>United State</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ViewLotsRightCards;
