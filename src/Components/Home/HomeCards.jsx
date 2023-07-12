import { NavLink } from "react-router-dom";
import LinksData from "./LinksData";
import img1 from "C:/Users/Mubi ktk/Desktop/React Projects/bid_spotter/src/images/Home/image 33.png";

function HomeCards() {
  const cardsData = [
    {
      id: 1,
      Desc: "Food and Beverage",
      image: img1,
      btn1: "See Auction",
      btn2: "See Lots",
    },
    {
      id: 2,
      Desc: "Food and Beverage",
      image: "../../images/Home/image 33.png",
      btn1: "See Auction",
      btn2: "See Lots",
    },
    {
      id: 3,
      Desc: "Food and Beverage",
      image: "../../images/Home/image 33.png",
      btn1: "See Auction",
      btn2: "See Lots",
    },
    {
      id: 4,
      Desc: "Food and Beverage",
      image: "../../images/Home/image 33.png",
      btn1: "See Auction",
      btn2: "See Lots",
    },
    {
      id: 5,
      Desc: "Food and Beverage",
      image: "../../images/Home/image 33.png",
      btn1: "See Auction",
      btn2: "See Lots",
    },
    {
      id: 6,
      Desc: "Food and Beverage",
      image: "../../images/Home/image 33.png",
      btn1: "See Auction",
      btn2: "See Lots",
    },
    {
      id: 7,
      Desc: "Food and Beverage",
      image: "../../images/Home/image 33.png",
      btn1: "See Auction",
      btn2: "See Lots",
    },
    {
      id: 8,
      Desc: "Food and Beverage",
      image: "../../images/Home/image 33.png",
      btn1: "See Auction",
      btn2: "See Lots",
    },
  ];
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {cardsData.map((item, index) => {
          const { id, Desc, image, btn1, btn2 } = item;
          return (
            <div className="col-lg-3 col-md-4 col-sm-12 mb-4" key={id}>
              <div className="card home_page_card shadow">
                <div className="home_page_card_img_1">{image}</div>
                <div className="card-body home_page_card_buttons">
                  <NavLink
                    className="navlink btn btn-primary"
                    to="/SeeAuctionPage"
                  >
                    {btn1}
                  </NavLink>
                  <NavLink
                    className="navlink btn btn-primary"
                    to="/ViewLotsPage"
                  >
                    {btn2}
                  </NavLink>
                </div>
                <div className="home_page_card_heading">
                  <h6>{Desc} </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HomeCards;
