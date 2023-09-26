import React, { useState } from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from '../context/CartContext';

const Header = () => {
    const [open, setOpen] = useState(false);
    const {total_item}=useCartContext();
    // console.log("total_items"+total_item);
    return (
        <>
            <section className='navbar-backgrond'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <NavLink to={"/"} >
                            <img className="logo_img" src='../images/icon.png' alt='logoimg' />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={() => { setOpen(true) }}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="navbarTogglerDemo01">

                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" onClick={() => { setOpen(false) }}>
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                                    <NavLink to={"/"} className="nav-link active" aria-current="page" >HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/about"} className="nav-link active" aria-current="page" >ABOUT</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/products"} className="nav-link active" aria-current="page" >PRODUCTS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/contact"} className="nav-link active" aria-current="page" >CONTACT</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/login"} className="nav-link active" aria-current="page"><button className="btn-btn-style" type="submit">Log in</button></NavLink>
                                </li>
                            </ul>
                            <NavLink to={"/cart"} className='cart-trolly--link' onClick={() => { setOpen(false) }}>
                                <FiShoppingCart className='cart-trolly' />
                                <span className='cart-total--item'>{total_item}</span>
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Header
