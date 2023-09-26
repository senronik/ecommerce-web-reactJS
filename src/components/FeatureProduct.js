import React from 'react'
import Product from './Product'
import { useProductcontext } from '../context/Productcontext'
import Loader from './Loader';



const FeatureProduct = () => {

    const { isLoading, featureProducts } = useProductcontext();
    // console.log(featureProducts);

    if (isLoading) {
        return <Loader/>
    }
    return (
        <>
            <div className='container-fluid feature-section'>
                <div className='intro-data'><h3>Check Now!</h3><h3>Our features Services</h3></div>
                <div className='row'>
                    {featureProducts.map((currElm) => {
                        return <Product key={currElm.id} {...currElm} />
                    })}
                </div>
            </div>

        </>
    )
}

export default FeatureProduct
