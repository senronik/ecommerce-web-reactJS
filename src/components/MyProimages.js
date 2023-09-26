import React, { useState } from 'react'

const MyProimages = ({img=[{url:""}]}) => {
  // console.log({img});
  const[mainImg,setImage]=useState(0)
  return (
    <>
    <div className='row'>
    <div className='col-6 col-sm-6 col-md-6 main_box'>
       {
          img.map((currElm,index)=>{
            return (
            <>
             <figure key={index}>
              <img 
              src={currElm.url} 
              alt={currElm.filename} 
              key={index} 
              className='figure-img img-fluid'
              onClick={()=>setImage(index)}
              />
            </figure>
            </>
            )
          })
        }
    </div>
    <div className='col-6 col-sm-6 col-md-6 main_image'>
      <img src={img[mainImg].url} alt={img[mainImg].filename} className='figure-img img-fluid'/>
    </div>
    </div>
    </>
  )
}

export default MyProimages
