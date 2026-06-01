import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import HomeComponents from "./Components/Pages/Home/HomeComponents";
import ServiceComponents from "./Components/Pages/Service/ServiceComponents";
import PortfolioComponents from "./Components/Pages/Portfolio/PortfolioComponents";
import BlogComponents from "./Components/Pages/Blog/BlogComponents";
import ContactComponents from "./Components/Pages/Contact/ContactComponents";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <Header/>
        <Routes>
          <Route path="/" element={<HomeComponents/>} />
          
          <Route path="/services" element={<ServiceComponents />} />
          <Route path="/portfolio" element={<PortfolioComponents/>} />
          <Route path="/blog" element={<BlogComponents/>} />
          <Route path="/contact" element={<ContactComponents />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
