import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './components/cart.css';
import "./components/loading.css"
import "./components/product.css"
import "./components/Home.css";
import "./components/registration.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AppProvider } from "./context/Productcontext";
import {FilterContextProvider} from './context/FilterContex'
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
    <BrowserRouter>
    <AppProvider>
    <FilterContextProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </FilterContextProvider>
    
    </AppProvider>
        
    </BrowserRouter>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
