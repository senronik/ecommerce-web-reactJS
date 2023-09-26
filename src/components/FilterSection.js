import React from 'react'
import { useFilterContex } from "../context/FilterContex";
// import { FaCheck } from "react-icons/fa";
const FilterSection = () => {
  const {
    filters: { text,category},
    allProducts,
    updateFilterValue,
    clearFilters,
  } = useFilterContex();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    //   if (attr === "colors") {
      //     // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      //     newVal = newVal.flat();
      //   }

      return (newVal = ["all", ...new Set(newVal)]);
  
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(allProducts, "category");
  const companyData = getUniqueData(allProducts, "company");
  // const colorsData = getUniqueData(all_products, "colors");
  // console.log(
  //   "🚀 ~ file: FilterSection.js ~ line 23 ~ FilterSection ~ companyData",
  //   colorsData
  // );
  return (
    <>
    <div className='filterBar shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
       <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div className='filter-category-item'>
        <ul className='list-group list-group-flush'>
        {categoryData.map((curElem, index) => {
            return (
              <li className='list-group-item'>
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
              </li>
            );
          })}
        
        </ul>
        </div>
      </div>

       <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className='form-select form-select-lg mb-3' aria-label="Large select example"
            onClick={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className='clear-filters'>
            <button type='button' className='btn btn-primary btn-lg' onClick={clearFilters}>Clear Filter</button>
      </div>

      <div className='term-conditions text-center mt-5'>
            <h4>Terms & Conditions</h4>
            <div className='term-condition-para'>
            <p>The Terms of Service Agreement is mainly used for legal purposes by companies which provide 
            software or services, such as web browsers, e-commerce, web search engines, social media, and transport services.
              A legitimate terms-of-service agreement is legally binding and may be subject to change.[2] Companies can enforce the 
              terms by refusing service. Customers can enforce by filing a lawsuit or arbitration case if they can show they were actually 
              harmed by a breach of the terms. There is a heightened risk of data going astray during corporate changes, including mergers, divestitures
              , buyouts, downsizing, etc., when data can be transferred improperly.[3]
            </p>
            </div>
              
      </div>
      </div>
    </>
  )
}

export default FilterSection
