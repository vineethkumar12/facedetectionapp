import React from 'react'
import './Rank.css' 

export const Rank = ({name,entries}) => {
  return (
    
    <div  className='Rank center'>
     <div className='white  f3 '>
     { `${name} your current entries is`}
     <div className="white f1">
         { entries ? entries:"0"} 
     </div>
     </div>   
     </div>

  
  )
}
