import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  return ( 
     <Router>
      <Navbar />

      <Home></Home>
      <Footer />
    </Router>
  );
 
}

export default App
