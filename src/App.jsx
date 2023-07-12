import "./App.css";
import AuctionCataLogCards from "./Components/AuctionCatalog/AuctionCataLogCards";
import AuctionCatalogBreadCrum from "./Components/AuctionCatalog/AuctionCatalogBreadCrum";
import AuctionCatalogCategory from "./Components/AuctionCatalog/AuctionCatalogCategory";
import Auction_Catalog from "./Components/AuctionCatalog/Auction_Catalog";
import Auction_Catalog_slider from "./Components/AuctionCatalog/Auction_Catalog_slider";
import BrolynAuction from "./Components/BrolynAuction/BrolynAuction";
import ConstructionPage from "./Pages/ConstructionPage";
import HomePage from "./Pages/HomePage";
import SeeAuctionPage from "./Pages/SeeAuctionPage";
import SingupPage from "./Pages/SignupPage";
import ViewLotsPage from "./Pages/ViewLotsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path="/ViewLotsPage" element={<ViewLotsPage />} />
        <Route path="/SeeAuctionPage" element={<SeeAuctionPage />} />
        <Route path="/ConstructionPage" element={<ConstructionPage />} />
        <Route path="/SingupPage" element={<SingupPage />} />
        <Route path="/Auction_Catalog" element={<Auction_Catalog />} />
      </Routes>
      {/* <AuctionCatalogBreadCrum /> */}
      {/* <AuctionCataLogCards /> */}
      {/* <AuctionCatalogCategory /> */}
      {/* <Auction_Catalog /> */}
      {/* <Auction_Catalog_slider /> */}
    </>
  );
}

export default App;
