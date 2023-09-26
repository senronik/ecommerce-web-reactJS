import React from 'react'
import { useFilterContex } from '../context/FilterContex'
import Gridview from './Gridview';

const Productlist = () => {
  const {filterProducts}=useFilterContex();

  // console.log(filterProducts)
    return (
    <Gridview products={filterProducts}/>
    )
}

export default Productlist
