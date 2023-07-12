import React from "react";
import slider from "../../images/AuctionBid/Biddingimage.png";
import car from "../../images/AuctionBid/car.png";
import { Carousel, CarouselItem } from "react-bootstrap";
import star from "../../images/AuctionBid/star.png";
import Auctioneer from "../../images/AuctionBid/image 54.png";
import exclaimation from "../../images/AuctionBid/exclaimation.png";
import list1img from "../../images/AuctionBid/list1img.png";
import list2img from "../../images/AuctionBid/list2img.png";
import list3img from "../../images/AuctionBid/list3img.png";

function Auction_Catalog_slider() {
  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="Auction_Catalog_slider_left col-lg-5 col-md-4 ">
          <Carousel className="">
            <CarouselItem className="">
              <img className="d-block w-100" src={car} alt="First slide" />
            </CarouselItem>
            <CarouselItem className="">
              <img className="d-block w-100" src={slider} alt="First slide" />
            </CarouselItem>
            <CarouselItem className="">
              <img className="d-block w-100" src={car} alt="First slide" />
            </CarouselItem>
          </Carousel>
        </div>
        <div className="Auction_Catalog_slider_rigth col-lg-7 col-md-8 ">
          <div className="slider_rigth_content">
            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Current bid <b>12 USD</b>
            </p>
            <div className="slider_rigth_inputcontainer d-flex align-items-center justify-content-center">
              <label htmlFor="">Your Max Bid</label>
              <img src={exclaimation} alt="" style={{ margin: "0 5px" }} />
            </div>
          </div>
          <ul className="slider_rigth_orderlist col-9 m-auto mt-3 ">
            <li className="Listitem">(bid 13 USD or more)</li>
            <li className="Listitem">sale tax 8.75 %</li>
            <li className="Listitem">buyer’s premium 15.0 %</li>
            <li className="Listitem">united state</li>
          </ul>
          <div className="sliderbtncontainer col    ">
            <div className="row  bg-success   ">
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <button
                  style={{ width: "100%" }}
                  className="sliderbtn borderleft"
                >
                  <img src={star} alt="" style={{ marginRight: "10px" }} />
                  Description
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end p-0">
                <button style={{ width: "100%" }} className="sliderbtn ">
                  <img src={star} alt="" style={{ marginRight: "10px" }} />
                  Description
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <div className="col-5"></div>
          <div className="col-lg-7 col-md-7 col-sm-12 ">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="sliderpara_container">
                  <p>
                    timed auction: bidding ends :
                    <span style={{ color: "red" }}> mar 18 , 2023</span>
                  </p>
                  <p>lot location: california</p>
                  <p>rigging/removals : see options</p>
                  <p>united state</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="Auctioneer_container d-flex  justify-content-between mt-2 mb-2">
              <div className="left_Auc d-flex align-items-center ">
                <img src={Auctioneer} alt="" style={{ marginRight: "10px" }} />
                <p>
                  <b>auctioneer</b> :ace auctioneer (345-336-545)
                </p>
              </div>
              <div className="rigth_Auc">
                <p>
                  <img src={list1img} alt="" style={{ marginRight: "10px" }} />
                  ask a question
                </p>
                <p>
                  <img src={list2img} alt="" style={{ marginRight: "10px" }} />
                  see all auction{" "}
                </p>
                <p>
                  <img src={list3img} alt="" style={{ marginRight: "10px" }} />
                  favorite{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Auction_Catalog_slider;
