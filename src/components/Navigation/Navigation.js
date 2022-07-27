import React from 'react'



 export const Navigation = ({isSignedin,change}) => { 
 


 

    if(isSignedin)
    return (  <nav style={{display:'flex', justifyContent:'flex-end'}}>

      <p className='f3  link dim black underline pointer ma3' onClick={()=>change('signin')}>
       Sign Out
     </p>

    </nav> )
    else
         return(  <nav style={{display:'flex', justifyContent:'flex-end'}}>

                   <p className='f3  link dim black underline pointer ma3'onClick={()=>change('signin')} >
                      Sign in
                   </p> 
             <p className='f3  link dim black underline pointer ma3'onClick={()=>change('register') }>
              Register
               </p> 
              </nav> 
              )

  
  
}
 