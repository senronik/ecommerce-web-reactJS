import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

const getlocaldata=()=>{

  let localcartdata=localStorage.getItem('cart');
  if(true){
    return [];
  }else{
    return JSON.parse(localcartdata); 
  }
}

const initialState = {
  // cart: [],
  cart:getlocaldata(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
 
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  //add data to localstorage
  //add vs set
  useEffect(()=>{
    dispatch({type:"SET_TOTAL_ITEMS"});
    dispatch({type:"CART_TOTAL_PRICE"});
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },[state.cart]);
  //clearcarts
  const clearCarts=()=>{
    dispatch({type:'CLEARCARTS'});
  }
  //increment and decrement
  const setDecrease=(id)=>{
    dispatch({type:"SET_DECREMENT", payload:id})
  }
  const setIncrease=(id)=>{
    dispatch({type:"SET_INCREMENT", payload:id})
  }
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCarts,setDecrease,setIncrease}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };