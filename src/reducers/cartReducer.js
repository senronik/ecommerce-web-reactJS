const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
    //   console.log(
    //     "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
    //     product
    //   );
  
      let existingproduct=state.cart.find((currElm)=>{
        return currElm.id===id+color;
      });
      console.log(existingproduct);
      if(existingproduct){
        let updatedCartProduct=state.cart.map((currElm)=>{
          if(currElm.id===id+color){
            let newAmount=currElm.amount+amount;
            if(newAmount>=currElm.max){
              newAmount=currElm.max
            }
            return {
              ...currElm,
              amount:newAmount
            }
          }else{
            return currElm;
          }
        })
        return {
          ...state,
          cart:updatedCartProduct,
        }
      }else{
        let cartProduct = {
            id: id + color,
            name: product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
          };
      
          return {
            ...state,
            cart: [...state.cart, cartProduct],
          };
      }
    }
    // to set increment and decrement of product in cart
    if(action.type==="SET_DECREMENT"){
      let updatedProduct=state.cart.map((currElm)=>{
        if(currElm.id===action.payload){
          let decAmount=currElm.amount-1;
          if(decAmount<=1){
            decAmount=1;
          }
          return{
            ...currElm,
            amount:decAmount,
          }
        }else{
          return currElm;
        }
      })
      return{
        ...state,
        cart:updatedProduct,
      }
    }

    if(action.type==="SET_INCREMENT"){
      let updatedProduct=state.cart.map((currElm)=>{
        if(currElm.id===action.payload){
          let incAmount=currElm.amount+1;
          if(incAmount>=currElm.max){
            incAmount=currElm.max
          }
          return{
            ...currElm,
            amount:incAmount,
          }
        }else{
          return currElm;
        }
      })
      return{
        ...state,
        cart:updatedProduct,
      }
    }


    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    if(action.type=== "CLEARCARTS"){
      return {
        ...state,
        cart:[],
      }
    }

    //set total items in cart 
    if(action.type==="SET_TOTAL_ITEMS"){
      let updatedAmount=state.cart.reduce((intialValue,curElem)=>{
        let {amount}=curElem;
        intialValue=intialValue+amount;
        return intialValue;
      },0)
      // console.log(updatedAmount);
      return{
        ...state,
        total_item:updatedAmount,
      }
    }
    //set total price in cart
    if(action.type==="CART_TOTAL_PRICE"){
      let total_price=state.cart.reduce((intialValue,curElem)=>{
        let {price,amount}=curElem;
        intialValue=intialValue+(price*amount)
        return intialValue;
      },0)
      return{
        ...state,
        total_price:total_price,
      }
    }

    return state;
  };
  
  export default cartReducer;