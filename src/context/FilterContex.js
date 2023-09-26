import React, { createContext, useContext, useEffect, useReducer} from 'react'
import {  useProductcontext } from './Productcontext'
import reducer from '../reducers/FilterReducer';

const filtercontext=createContext()
const intialstate={
    filterProducts:[],
    allProducts:[],
    sortData:'lowest',
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
      },
}


const FilterContextProvider=({children})=>{
    const {products}=useProductcontext()
    // console.log(products);

    const[state,dispatch]=useReducer(reducer,intialstate);
    // console.log(state);

    //set data in filter
    // const setGridview=()=>{
    //     return dispatch({type:"SET_GRIDVIEW"});
    // }

    //sorting function
    const sorting=(event)=>{
        var selectValue=event.target.value;
        dispatch({type:'GET_SORT_DATA' , payload:selectValue})
    }

    

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    // if (name === "company") {
    //   value = event.target.value;
    // }

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  //to clear the filters
  const clearFilters=()=>{
    dispatch({type:"CLEAR_FILTERS"});
  }
    
    useEffect(()=>{
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({type:'SORTING_VALUE'})
    },[state.sortData,state.filters,products])

    
    useEffect(()=>{
        dispatch({type:"SET_FILTER_DATA",payload:products});
    },[products])

    return <filtercontext.Provider value={{
        ...state,
        sorting,
        updateFilterValue,
        clearFilters
        }}>
            {children}
    </filtercontext.Provider>
}

const useFilterContex=()=>{
    return useContext(filtercontext);
}

export {FilterContextProvider,filtercontext ,useFilterContex}