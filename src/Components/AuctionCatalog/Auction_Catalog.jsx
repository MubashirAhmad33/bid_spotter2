import React from "react";
import AuctionCatalogBreadCrum from "./AuctionCatalogBreadCrum";
import AuctionCatalogCategory from "./AuctionCatalogCategory";
import AuctionCataLogCards from "./AuctionCataLogCards";
import Auction_Catalog_slider from "./Auction_Catalog_slider";

function Auction_Catalog() {
  return (
    <div>
      <AuctionCatalogBreadCrum />
      <Auction_Catalog_slider />
      <AuctionCatalogCategory />
      <AuctionCataLogCards />
    </div>
  );
}

export default Auction_Catalog;
