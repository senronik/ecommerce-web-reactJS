import React from "react";
import Formatprice from "../Helper/Formatprice";

import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/CartContext';
import CreatAmountToggle from "./CreatAmountToggle";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem ,setDecrease,setIncrease} = useCartContext();
  // const setDecrease = () => {
  //   // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrease = () => {
  //   // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };

  return (
    <div className="row">
      <div className="col-sm cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="col-sm cart-hide">
        <p>
          <Formatprice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <div className="col-sm">
      <CreatAmountToggle
        amount={amount}
        setDecrease={()=>setDecrease(id)}
        setIncrease={()=>setIncrease(id)}
      />
      </div>

      {/* //Subtotal */}
      <div className="col-sm cart-hide">
        <p>
          <Formatprice price={price * amount} />
        </p>
      </div>

      <div className="col-sm">
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;