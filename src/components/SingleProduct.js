// import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductcontext } from "../context/Productcontext";
import PageNavigation from "./PageNavigation";
import MyProimages from "./MyProimages";
import Formatprice from "../Helper/Formatprice"
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { TbReplace } from "react-icons/tb";
import {GiReceiveMoney} from "react-icons/gi"
import Star from "./Star";
import AddTocart from "./AddTocart";
import Loader from "./Loader";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
    
    const { id } = useParams();
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductcontext();

    const {name, price, company, description, category, stock, reviews, stars, image} = singleProduct;
    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`);
    }, []);

    if (isSingleLoading) {
   return <Loader/>

    }
    

    return <>
        <PageNavigation title={name} />
        <div className="container single_box">
            <div className="row ">
                <div className="col-sm-6 col-md-6">
                        <MyProimages img={image} />
                </div>
                <div className="col-sm-6 col-md-6 ">
                    <div className="product_data">
                        <h2>{name}</h2>
                        <p>{category}</p>
                        <Star stars={stars} reviews={reviews}/>
                        <p className="product_data_price">
                            MRP:<del>
                                <Formatprice price={price + 250000} />
                            </del>
                        </p>
                        <p className="product_data_price real_price">
                            Deal of the day <Formatprice price={price} />
                        </p>
                        <p>{description}</p>
                        <div className="row ">
                            <div className="col-3 col-sm-3 col-md-3 product_warranty">
                                <TbTruckDelivery className='fs-1'  />
                                <p>Super Fast and Free Delivery</p>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 product_warranty">
                                <TbReplace className='fs-1' />
                                <p>30 days replacement</p>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 product_warranty">
                            <GiReceiveMoney  className='fs-1'/>
                             <p>Money-back Gauranteed</p>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 product_warranty">
                                <MdSecurity className='fs-1' />
                                <p>2 year warranty</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="product-info-data">
                            <p>
                                Available:<b><span>{" "}{stock>0 ? "in stock":"out of stock"}</span></b>
                            </p>
                            <p>
                                ID:<b><span>{" "}{id}</span></b>       
                            </p>
                            <p>
                                BRAND:<b><span>{" "}{company}</span></b>             
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <div>{stock>0 && <AddTocart product={singleProduct}/>}</div>
                </div>
            </div>
        </div>
        
    </>
}

// const Wrapper = styled.section`
//   .container {
//     padding: 9rem 0;
//   }
//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 2rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//         }
//       }
//     }

// //     .product-data-price {
// //       font-weight: bold;
// //     }
// //     .product-data-real-price {
// //       color: ${({ theme }) => theme.colors.btn};
// //     }
// //     .product-data-info {
// //       display: flex;
// //       flex-direction: column;
// //       gap: 1rem;
// //       font-size: 1.8rem;

// //       span {
// //         font-weight: bold;
// //       }
// //     }

// //     hr {
// //       max-width: 100%;
// //       width: 90%;
// //       /* height: 0.2rem; */
// //       border: 0.1rem solid #000;
// //       color: red;
// //     }
// //   }

// //   .product-images {
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //   }

// //   @media (max-width: ${({ theme }) => theme.media.mobile}) {
// //     padding: 0 2.4rem;
// //   }
// // `;

export default SingleProduct;
