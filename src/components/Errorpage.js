import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
      <div className='containe errorPage text-center'>
            <h1>404</h1>
            <h3>You're LOST</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.sit amet consectetur</p>
            <NavLink to={"/"}>
                <button className='btn-btn-style'>go back</button>
            </NavLink>
    
      </div>
    </>
  )
}

export default Errorpage
