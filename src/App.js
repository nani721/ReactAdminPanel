import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Sidebar from "./sidebar";
import Home from "./Home";
import Report from "./Report";
import Services from "./Services";
import Customer from "./Customer";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Breadcrumb from "./Bredcrumb";
import Footer from "./Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid bg-secondary min-vh-100 p-0">
        <div className="d-flex">
          <Sidebar />
          <div className="p-0 main-content">
          <div className='header-nav bg-white'>
          <Nav />
          </div>
          <div className="content-section">
          <Breadcrumb />
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="service" element={<Services />} />
              <Route path="report" element={<Report />} />
              <Route path="customer" element={<Customer />} />
              <Route path="form1" element={<Form1 />} />
              <Route path="form2" element={<Form2 />} />
              <Route path="form3" element={<Form3 />} />
            </Routes>
          </div>
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
