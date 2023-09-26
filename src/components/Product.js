import React from 'react'
import { NavLink } from 'react-router-dom';
import Formatprice from '../Helper/Formatprice';


const Product = (currElm) => {
    const { id, name, category, price, image } = currElm;
    return (
        <>
            <div className='col-md-4 col-sm-4 products-card-box my-2'>
                <NavLink to={`/singleproduct/${id}`}>
                    <div className="card card-product">
                        <figure className="figure">      
                            <img src={image} className="card-img-top product-img" alt={name} />
                            <div className='figure-caption'>
                            <figcaption>{category}</figcaption>
                            </div>               
                        </figure>
                        <div className="card-body d-flex justify-content-between">
                            <p>{name}</p>
                            <p><Formatprice price={price}/></p>
                        </div>
                    </div>
                </NavLink>
            </div>

        </>
    )
}

export default Product
