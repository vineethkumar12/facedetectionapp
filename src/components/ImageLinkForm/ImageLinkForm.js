import React from 'react'
import "./image.css"
export const ImageLinkForm = ({onchange,onbuttonclick,clear,input1}) => {
  return (
    <div className="image" > 
    <p className='f3'>
    {'This Magic Brain will detect face in your pictures. Ones try it'}
   </p>
   <div className='center'>
      <div className='he center br3 shadow-5  pa4  '>
      <input type="text" placeholder='paste your imageurl'   onChange={onchange} className="f4 in w-70 ba pa2 center br2 shadow-3 " />
         <button onClick={onbuttonclick} className='br2 grow  w-30 f4  link ba pv2 ph3 dib white  bg-pink pointer  '> Detect</button> 
         
      </div>
   </div>
  </div>
  )
}
