
const ProductReducer = (state,action) => {
    switch (action.type) {
        case "isLoading":
            return {
                ...state,
                isLoading:true,
            };
            case "SET_API_DATA":
                const featureData=action.payload.filter((currElm)=>{
                    return currElm.featured===true;
                });
                return {
                    ...state,    
                    isLoading:false,                               
                    products:action.payload,
                    featureProducts:featureData,
                }
        case "API_ERROR":
            return {
                ...state,
                isLoading:false,
                isError:true,
            };
        case "IS_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading:true,
            };
        case "SET_SINGLE_DATA":
            return {
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload,
            };    
        case "SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading:false,
                isError:true,
            };

        default:
            return state;
    }

}

export default ProductReducer
