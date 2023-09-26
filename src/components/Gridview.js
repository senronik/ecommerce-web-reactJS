import React from 'react'
import Product from './Product'

const Gridview = ({products}) => {
    console.log(products);
  return (
    <>
        <div className='row'>
            {
                products.map((currElm)=>{
                    return <Product key={currElm.id} {...currElm} />
                })
            }
        </div>
    </>
  )
}

export default Gridview
