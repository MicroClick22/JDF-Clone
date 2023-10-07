import React from "react";
import Home from "./Home";
import About from "./About";
import './css/mega.css';
import './css/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Billing from "./Billing";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path='' element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/billing" element={<Billing/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
