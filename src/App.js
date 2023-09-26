import React from "react";
import { Route,Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Errorpage from "./components/Errorpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Login from "./components/Login"
// https://api.pujakaitem.com/api/products
const App = () => {
  return (
    <>
    <Header/>
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Errorpage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
};

export default App;
