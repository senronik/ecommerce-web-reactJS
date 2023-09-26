import React from 'react'
import { FaPlus,FaMinus } from 'react-icons/fa'

const CreatAmountToggle = ({amount,setDecrease,setIncrease}) => {

  return (
    <div className='toggleBox'>
      <button onClick={()=>setDecrease()} className='minusBtn'><FaMinus/></button>
      <span style={{fontSize:'15px'}}>{amount}</span>
      <button onClick={()=>setIncrease()} className='plusBtn'><FaPlus/></button>
    </div>
  )
}

export default CreatAmountToggle
