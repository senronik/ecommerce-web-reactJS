import React from 'react'
import {FaStarHalfAlt,FaStar} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai';

const Star = ({stars,reviews}) => {
    // console.log(stars);
    // console.log(reviews);
   let StarResult= Array.from({length:5},(curElm,index)=>{
        let number=index+0.5;
        return(
            <span>
                { stars>=index+1
                ?
                (<FaStar/>)
                :
                stars>=number
                ?(<FaStarHalfAlt/>)
                :(<AiOutlineStar/>)
                }
            </span>
            
        )
    })
  return (
    <div>
      {StarResult}<p>({reviews} customer reviews)</p>
    </div>
  )
}

export default Star
