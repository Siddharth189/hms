import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dest from "./components/Dest";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Explore from "./components/Explore";
import Details from "./components/Details";
import { StrictMode } from "react";
import "./App.css";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/hms" element={<Home />} />
          <Route path="/hms/destination-cover" element={<Dest />} />
          <Route path="/hms/deals" element={<Deals />} />
          <Route path="/hms/explore" element={<Explore />} />
          <Route path="/hms/footer" element={<Footer />} />
          <Route path="/hms/hotels/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
