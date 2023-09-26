import React from "react";
import Productlist from "./Productlist";
import Sort from "./Sort";
import FilterSection from "./FilterSection";

const Products = () => {
  return (
    <>
      <div className="container">
          <div className="row">
            <div className="col-4 col-sm-4 col-md-4">
                  <FilterSection/>
            </div>
            <div className="col-8 col-sm-8 col-md-8">
                <div className="sort">
                  <Sort/>
                </div>
                <div className="main_products">
                    <Productlist/>
                </div>
            </div>
          </div>
      </div>
    </>
  )
};

// const Wrapper = styled.section`
//   .grid-filter-column {
//     grid-template-columns: 0.2fr 1fr;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-filter-column {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

export default Products;
