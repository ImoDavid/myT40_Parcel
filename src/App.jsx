import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from "./components/navbar/";
import { Footer } from "./components/footer/";
import HomePage from "./containers/homePage/homePage";
import { ParcelPage } from "./containers/parcelPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/sendparcel/:id/:route" element={<ParcelPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
