
import {React,useState} from 'react'; 


export const Signin=({change,userdata})=> {  
  const [data, setdata]=useState({
        
    
          signpassword:"",
           signemail:"",


    })
  
 
 
 
  
    onsubmit=(e)=>{ 
     /* const password1 = document.getElementById("password")
      const email = document.getElementById("email")*/
     e.preventDefault();
   

      fetch('https://node-server3.onrender.com/signin',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          email:data.signemail,
          password:data.signpassword ,
         
        }) })
        
         .then(response=>response.json())
         .then((user)=>{ 
         
         
            console.log(user)
             
           
           
          
            
            if(user.id)
              {userdata(user) 
               change('home')
              }
             else{
              alert('invalid user')
             }
        
            
             
          
           
         })
       
 
 
 
      

  

    }

  return (
    <div>
        <article className="br3  ba  shadow-3 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
     <main className="pa4 black-80  ">
        <div className="measure  ">
       <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
           <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address" >Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"id="email" value={data.signemail} onChange={(e)=>setdata({...data,signemail:e.target.value})} type="email" name="email-address"  />
         </div>
           <div className="mv3">
             <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
             <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" id="password"   onChange={(e)=>setdata({...data,signpassword:e.target.value})} type="password" name="password"  />
            </div>
        
        </fieldset>
       <div className="">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={onsubmit} value="Sign in"/>
        </div>
        <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db"onClick={()=>change('home')} >Sign up</a>
            <p className="f6 link dim black db  pointer" onClick={()=>change('register')} > Register</p>
        </div>
      </div>
   </main>  

   </article>

    </div>
  )
}
