import React from 'react'
import {TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi"
import {RiSecurePaymentLine} from "react-icons/ri"

const Service = () => {
  return (
    <>
        <div className='container service-box'>
            <div className='row mx-5 d-flex justify-content-center'>
                <div id='section1' className='col-md-4 my-1'>
                    <TbTruckDelivery  className='fs-1'/>
                    <h3>Super Fast and Free Delivery</h3>
                </div>
                <div id='section2' className='col-md-4 mx-5 my-1'>
                    <div >
                        <MdSecurity className='fs-1'/>
                        <h3>Non contact Shipping</h3>
                    </div>
                    <div>
                        <GiReceiveMoney  className='fs-1'/>
                        <h3>Money-back Gauranteed</h3>
                    </div>
                </div>
                <div id='section3' className='col-md-4 my-1'>
                <RiSecurePaymentLine className='fs-1'/>
                <h3>Super Secure Payment System</h3>
                </div>
            </div>
        </div>

    </>
  )
}

export default Service
