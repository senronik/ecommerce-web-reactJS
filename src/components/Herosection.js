import React from 'react'
import { NavLink } from 'react-router-dom'

const Herosection = ({myData}) => {
    const {name}=myData;
  return (
    <>
        <div className='container herosection'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='data-section'>
              <h3>Welcome to</h3>
              <h1>{name}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <NavLink to={"/products"}>
                <button type="button" className="btn btn-primary  btn-lg">Shop Now</button>
              </NavLink>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='image-section'>
              <figure>
                <img src='images/shopImage.jpg' alt='img' />
              </figure>
            </div>
          </div>
        
        </div>
      </div>
      
    </>
  )
}

export default Herosection
