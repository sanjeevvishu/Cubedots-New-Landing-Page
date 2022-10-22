import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "../src/App.css";
import AboutUs from "./Pages/AboutUs";
import ContactUsPge from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import WhyUsPage from "./Pages/WhyUsPage";
import Navbar from "./common/Navbar"

function App() {
  return (
    <>
      <Suspense >
        <BrowserRouter basename={"/cubedots_new"}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route exact path="aboutus" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
