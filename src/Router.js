import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Join from './Components/Join'
import Contact from './Components/Contact'
import FAQ from './Components/FAQ'
import Blog from './Components/Blog'
import Database from './Components/Database'
import Dashboard from "./Components/Dashboard";
import Popular from "./Components/Popular";

const Router = () => {
	return (
		<BrowserRouter>
      <Header />
      <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/popular" element={<Popular />} />

          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/services" element={<Services />} />
          <Route path="/database" element={<Database />} /> */}
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
      </Routes>
      {/* <Todo/>
      <Display /> */}
      <Footer/>
		</BrowserRouter>
	);
};

export default Router;
