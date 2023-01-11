import React from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Maina = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Maina;
