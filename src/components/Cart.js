import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Formatprice from "../Helper/Formatprice";
const Cart = () => {
  const { cart ,clearCarts,total_price,shipping_fee} = useCartContext();
  // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);
if(cart.length===0){
  return <div className="Nocart">
    <h1>No items In Cart</h1>
  </div>
}

  return (
    <>
      <div class="container cart-item">
        <div class="row">
          <div class="col-sm">
            <h4>ITEM</h4>
          </div>
          <div class="col-sm">
            <h4>PRICE</h4>
          </div>
          <div class="col-sm">
            <h4>QUANTITY</h4>
          </div>
          <div class="col-sm">
            <h4>SUBTOTAL</h4>
          </div>
          <div class="col-sm">
            <h4>REMOVE</h4>
          </div>
        </div>
        <hr/>
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr/>
          <div className="row mt-5">
              <div className="col col-sm col-md">
                  <NavLink to={"/products"}>
                  <button className="btn btn-primary btn-lg">Continue shopping</button>
                  </NavLink>
              </div>
              <div className="col col-sm col-md d-flex justify-content-center">
                <button className="btn btn-danger btn-lg" onClick={()=>clearCarts()}>Clear Carts</button>
              </div>
          </div>
          <div className="order-total--amount">
              <div className="order-total--subdata">
                <div>
                  <p>Subtotal Fee:</p>
                  <p>
                    <Formatprice price={total_price}/>
                  </p>
                </div>
                <div>
                  <p>shipping Fee:</p>
                  <p>
                    <Formatprice price={shipping_fee}/>
                  </p>
                </div>
                <hr/>
                <div>
                  <p>Order total Fee:</p>
                  <p>
                    <Formatprice price={shipping_fee+total_price}/>
                  </p>
                </div>
              </div>
          </div>
      </div>
      </>
  );
};

export default Cart;