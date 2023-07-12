import React from "react";
import "./construction.css";
import Refine from "../Construction/Refine";
import arrow from "../../images/Construction/arrow.png";
import image52 from "../../images/Construction/worker.png";
import eye from "../../images/Construction/eye.png";
import watch from "../../images/Construction/watch.png";
import location from "../../images/Construction/location.png";
import search from "../../images/Construction/search.png";
import cars from "../../Components/Construction/car";
import list from "../../images/Construction/list.png";
import grid from "../../images/Construction/grid.png";
import { NavLink } from "react-router-dom";

const Construction = () => {
  return (
    <>
      <div className="container-fluid construction-div">
        <div className="container">
          <div>
            <nav
              style={{ "--bs-breadcrumb-divider": ">" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb view_lot_breadcrumb_div">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Auction Catalog{" "}
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Assi 3 LLC{" "}
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Construction & industrila equipment auction{" "}
                </li>
              </ol>
            </nav>
          </div>

          {/* <!-- ------Main Heading Div 2------ --> */}
          <div>
            <h2
              className="view_lot_heading"
              style={{ textTransform: "capitalize" }}
            >
              Construction & industrila equipment auction{" "}
            </h2>
          </div>

          {/* <!-- ------Paragraph Div 3------- --> */}
          <div>
            <p
              className="view_lot_paragraph"
              style={{ textTransform: "capitalize" }}
            >
              {" "}
              20 + scissor lift, boom lifts, forklets, welders, generator and
              much more!{" "}
            </p>
          </div>
        </div>
        <div
          className="container bg-white"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <img className="img-fluid worker-img" src={image52} />
          <div>
            <button className="end-btn">ends today</button>
            <span className="text-cons">Ends from mar 21 , 2023</span>
            <div>
              <img
                className="end-pics image-fluid "
                src={eye}
                alt=""
                style={{ height: "auto" }}
              />
              <span className="text-cons">view all auction for ASSI 3 LLC</span>
            </div>
            <div>
              <img
                className="end-pics image-fluid"
                src={watch}
                alt=""
                style={{ height: "auto" }}
              />
              <span className="text-cons">timed auction</span>
            </div>
            <div>
              <img
                className="end-pics image-fluid"
                src={location}
                alt=""
                style={{ height: "auto" }}
              />
              <span className="text-cons">calofornia</span>
            </div>
            <NavLink
              to="/SingupPage"
              className="end-btn"
              style={{ height: "40px", marginTop: "5rem" }}
            >
              Sign Up To Bid
            </NavLink>
            <button className="auc-btn">show auction detail</button>
          </div>
        </div>
        <section>
          <div
            className="search-sec"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {/* <div className='row' style={{display:"flex"}}>
                 <div className='col-12 col-sm-12 col-md-6'> */}
            <div className="left-container">
              <input className="search-input" placeholder="Search Lots.." />
              <span>
                <img className="search-img" src={search} />
              </span>
              <br></br>
              <input
                type="radio"
                className="radio-btn"
                name="fav_language"
                value="HTML"
              />
              <label htmlFor="auction" className="radio-text">
                in this auction{" "}
              </label>
              <br></br>
              <input type="radio" name="fav_language" value="CSS" />
              <label htmlFor="number" className="radio-text">
                lot number
              </label>
              <br></br>
              <hr className="hr-line mb-5"></hr>
            </div>
            <div className="featured-con ">
              <div className=" bg-white ">
                <h5 className="featured-head">featured lots</h5>
                <ul
                  className="card-ul"
                  style={{
                    display: "flex",
                    paddingLeft: "1rem",
                    gap: "7px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {cars.map((car, index) => (
                    <div
                      className="card car-card"
                      style={{ width: "13rem", height: "13rem" }}
                      key={index}
                    >
                      <img
                        src={car.img}
                        className="card-img-top img-fluid car-img"
                        alt="..."
                      />
                      <div className="card-body car-body">
                        <p className="ps-3 ">{car.title}</p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
              <div
                className="bg-white mt-3"
                style={{
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  paddingRight: "2rem",
                }}
              >
                <span className="ps-4" style={{ marginRight: "1rem" }}>
                  Sort By
                  <select
                    className="ms-2"
                    name="cars"
                    id="cars"
                    style={{ border: "2px solid black", padding: "0 5px" }}
                  >
                    <option value="volvo">Lot Number</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </span>
                <div>
                  <span
                    style={{
                      color: "#4811BD",
                      margin: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    List
                  </span>
                  <img
                    src={list}
                    style={{ height: "18px", width: "18px", cursor: "pointer" }}
                  />
                  <span
                    style={{
                      color: "#4811BD",
                      margin: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    Grid
                  </span>
                  <img
                    src={grid}
                    style={{ height: "18px", width: "18px", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Refine />
      </div>
    </>
  );
};

export default Construction;
