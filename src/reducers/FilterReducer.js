const FilterReducer = (state, action) => {
    switch (action.type) {
        case "SET_FILTER_DATA":
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload]
            };
        case 'GET_SORT_DATA':
            // var userValue=document.getElementById('sort');
            // var sort_value=userValue.options[userValue.selectedIndex].value;
            // console.log(sort_value);
            return {
                ...state,
                sortData: action.payload
            }
        case 'SORTING_VALUE':
            let shortdata;

            const {filterProducts } = state;
            let tempshortdata = [...filterProducts];

            if (state.sortData === 'lowest') {
                shortdata = tempshortdata.sort((a, b) => a.price - b.price);
            }
            if (state.sortData === 'highest') {
                shortdata = tempshortdata.sort((a, b) => b.price - a.price);
            }
            if (state.sortData === 'a-z') {
                shortdata = tempshortdata.sort((a, b) => a.name.localeCompare(b.name));
            }
            if (state.sortData === 'z-a') {
                shortdata = tempshortdata.sort((a, b) => b.name.localeCompare(a.name));
            }
            return {
                ...state,
                filterProducts: shortdata
            };

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };
        case "FILTER_PRODUCTS":
            let { allProducts } = state;
            let tempFilterProduct = [...allProducts];
            
            const { text,category,company} = state.filters;
            

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                });
            }
            
            if (category!=="all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.category === category;
                })}
            
            if (company!=="all") {
              tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.company === company;
              })};
            console.log(tempFilterProduct);
            return {
                ...state,
                filterProducts: tempFilterProduct,
            };
            
            case "CLEAR_FILTERS":
                return {
                    ...state,
                    filters:{
                        ...state.filters,                   
                        text: "",
                        category: "all",
                        company: "all",
                        color: "all",
                    }
                }
        default:
            return state;
    }
}

export default FilterReducer;