import React from 'react'
import { useFilterContex } from '../context/FilterContex'

const Sort = () => {
  const{filterProducts,sorting}=useFilterContex();
  // console.log(sorting);
  // console.log(filterProducts+"sort");
  return (
    <>
        <div className='row sort-section shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
          <div className='col-6 col-sm-6 col-md-6 p-2 '>{`${filterProducts.length} Products Available`}</div>
          <div className='col-6 col-sm-6 col-md-6 NumProducts'>
            <form>
            <label htmlFor='sort'></label>
              <select name='sort' id='sort' onChange={sorting}   className='form-select form-select-lg' aria-label="Large select example">
                <option value='lowest'>select price</option>
                <option value='lowest' >lowest</option>
                <option value='highest'>highest</option>
                <option value='a-z'>A-Z</option>
                <option value='z-a'>Z-A</option>
              </select>
            </form>
          </div>
        </div>
    </>
  )
}

export default Sort
