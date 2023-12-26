import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/ProductReducer';

const Appcontext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const intialstate = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialstate);
    console.log(state.products);
    const getProducts = async (url) => {
        dispatch({ type: "isLoading" })
        try {
            const res = await axios.get(url);
            const products = res.data;
            dispatch({ type: "SET_API_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }
    const getSingleProduct = async (url) => {
        dispatch({ type: "IS_SINGLE_LOADING" })
        try {

            const res = await axios.get(url);
            const singleProduct = res.data;
            dispatch({ type: "SET_SINGLE_DATA", payload: singleProduct })

        } catch (error) {
            dispatch({ type: "SINGLE_ERROR" })
        }
    }
    useEffect(() => {
        getProducts(API)
    }, [])

    return <Appcontext.Provider value={{ ...state, getSingleProduct }}>
        {children}
    </Appcontext.Provider>
}

//  custom hook
const useProductcontext = () => {
    return useContext(Appcontext)
}
export { Appcontext, AppProvider, useProductcontext };