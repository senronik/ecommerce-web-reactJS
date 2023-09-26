import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import CreatAmountToggle from "./CreatAmountToggle";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const AddTocart = ({product}) => {
    // console.log(product)
    const {addToCart}=useCartContext()
    const {id,colors,stock}=product;
    const[color,setColor]=useState(colors[1]);
    const [amount,setAmount]=useState(1)
    // console.log(colors);
    
    const setDecrease=()=>{
        amount>1? setAmount(amount-1): setAmount(1)
    }
    const setIncrease=()=>{
        amount<stock? setAmount(amount+1): setAmount(stock)
    }
  return (
    <>
        <div className='colors'>

           Colors: {
                colors.map((curColor,index)=>{
                    return <button style={{backgroundColor:curColor}}
                    className={color==curColor?"styButton active":"styButton"}
                    onClick={()=>setColor(curColor)}
                    >
                        {color==curColor?<FaCheck/>:null}
                    </button>
                })
            }
        </div>
        
        <div className="toggle">
                    <CreatAmountToggle
                    amount={amount}
                    setDecrease={setDecrease}
                    setIncrease={setIncrease}
                   />  
                    </div>
        <div className='Add-cart-button'>
        <NavLink to={'/cart'} onClick={()=>addToCart(id,color,amount,product)}>
            <button className='btn btn-primary'>Add to Cart</button>
        </NavLink>
        </div>
    </>
  )
}

export default AddTocart
