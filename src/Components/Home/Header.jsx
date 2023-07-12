import React, { useState } from "react";
import Data from "./LinksData";
import "./HomeNavLinksWrapper.css";
function Header() {
  const [hoverClick, setHoverClick] = useState(false);
  const [hoverClick2, setHoverClick2] = useState(false);

  const tooglebtn = () => {
    setHoverClick(!hoverClick);
  };
  const tooglebtn2 = () => {
    setHoverClick2(!hoverClick2);
  };
  return (
    <header>
      <nav className="navbar navbar-light bg-light header_1">
        <div className="container">
          {/* <!-- ----Header 1 Logo---- --> */}
          <a className="navbar-brand header_1_name">BidSpotter</a>
          {/* <!-- ----Header 1 Buttons---- --> */}
          <div className="header_1_right  row">
            <div className="col-md-8 col-sm-12 ps-0 pe-0">
              <a href="#">My BidSpotter</a>
              <button type="button" className="btn btn-secondary">
                Register
              </button>
              <button type="button" className="btn btn-secondary">
                Sign In
              </button>
            </div>

            {/* <!-- ----header 1 Search Field----- --> */}
            <div className="header_1_search_div col-md-4 col-sm-12">
              <div className="row header_1_search_row">
                <div className="col-12">
                  <div style={{ position: "relative" }}>
                    <form>
                      <input
                        className="form-control header_1_search me-2"
                        type="search"
                        placeholder="Search for lots"
                        aria-label="Search"
                      />
                    </form>
                    <span>
                      <a className="header_1_search_icon" href="#">
                        <img src="images/Vector.png" alt="" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light header_2">
        <div className="container p-0">
          {/* <!-- -----Toggler Button---- --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- -----Header 2 Tabs------ --> */}
          <div
            className="collapse navbar-collapse header_2_tabs"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item " onClick={tooglebtn}>
                <a className="nav-link ps-0" aria-current="page">
                  Browse By Category
                </a>
                <div className="LinksWrapper">
                  {hoverClick &&
                    Data.map((item) => {
                      return (
                        <ul className="HomeNavLinksWrapper">
                          <li>{item.desc}</li>
                        </ul>
                      );
                    })}
                </div>
              </li>

              <li className="nav-item " onClick={tooglebtn2}>
                <a className="nav-link ps-0" aria-current="page">
                  Auction{" "}
                </a>
                <div className="LinksWrapper">
                  {hoverClick &&
                    Data.map((item) => {
                      return (
                        <ul className="HomeNavLinksWrapper">
                          <li>{item.desc}</li>
                        </ul>
                      );
                    })}
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Auctioneers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Auction Alert
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
