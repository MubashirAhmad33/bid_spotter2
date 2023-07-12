import React from "react";
import cardimg1 from "../../images/AuctionBid/cardwatch.png";

function AuctionCatalogCategory() {
  return (
    <div className="container">
      <div className="row ">
        <div className="category_section col-lg-8  col-md-6 ">
          <div className="category_section_btns row">
            <div className="Category_btn col-lg-3 col-md-6 my-1   my-lg-0">
              <button className="c_btn">Description</button>
            </div>
            <div className="Category_btn col-lg-3 col-md-6 my-1    my-lg-0">
              <button className="c_btn">auction detail</button>
            </div>
            <div className="Category_btn col-lg-3 col-md-6 my-1   my-lg-0">
              <button className=" c_btn">rigging /removals</button>
            </div>
            <div className="Category_btn col-lg-3 col-md-6 my-1 my-lg-0">
              <button className=" c_btn">t&cs &important info</button>
            </div>
          </div>
          <div className="category_section_para row">
            <div className="categorical_paragraph">
              <p className="c_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                in pellentesque velit. Nullam leo augue, fermentum quis massa
                nec, blandit tincidunt mi. Aliquam velit eros, dictum id auctor
                quis, molestie ut mi. Nullam ac elit purus. Nunc non metus
                consectetur odio tincidunt varius ac ac sem. Vestibulum massa
                arcu, aliquet ut venenatis eget, dignissim vitae arcu. Nulla
                quis ante ac nisl tincidunt feugiat sed id turpis. Nam sodales
                porttitor diam sed viverra. Suspendisse potenti. Quisque ac eros
                ex. Etiam ex eros, bibendum eu nisl vitae, vestibulum gravida
                purus. Mauris sit amet scelerisque orci, ut euismod metus.
                Pellentesque id aliquam metus.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="row">
            <div className="col">
              <div className="Catalog d-flex justify-content-between text-align-center  ">
                <p className="Catalog_para">Catalog</p>
                <a href="" className="Catalog_link">
                  View All
                </a>
              </div>
              {[1, 2].map((item) => {
                return (
                  <div className="card p-0">
                    <img
                      className="card-img-top"
                      src={cardimg1}
                      alt="Card image cap"
                    />
                    <div className="Cards_buttoncontainer">
                      <button
                        className="card_btn"
                        style={{ position: "absolute", top: "40%", left: "0" }}
                      >
                        <i class="fas fa-chevron-left icon"></i>
                      </button>
                      <button
                        className="card_btn"
                        style={{ position: "absolute", top: "40%", right: "0" }}
                      >
                        <i class="fas fa-chevron-right icon"></i>
                      </button>
                    </div>

                    <div className="card-body">
                      <p className="card-text">lot 16 lot of antique silver</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionCatalogCategory;
