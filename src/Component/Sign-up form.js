import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import Card from "./Card";


function Signup(){

    const URL = "https://jsonplaceholder.typicode.com/users"
    const [texts, setText] = useState ("");
    const [email,setEmail] = useState([]);
    const [input, setInput] = useState(false);
    
    function handle(event){
        setText(event.target.value);
     
    }
     useEffect(()=>{axios.get(URL)
        .then(res=>{
            console.log(res.data);
            if (res.data)
            {const Email = res.data.map(updateEmail => updateEmail.email)
            setEmail(Email);}
        })
        .catch(error=>{
            console.log(error);
        })
      },[]);
        
           
        
    

    function updateClick(event){
        event.preventDefault();
        for(let i =0; i <= email.length; i++){
            if(email[i]=== texts){
                setInput(true);
            }
        }
    }
   

    return(

        <div className="card">
           <form >
           <div className="card1">

           <label>Email</label>
           <input className="input" onChange={handle}  type="email" placeholder="Email"/>
   
           <label>Password</label>
           <input className="input" onChange={handle} type="text" placeholder="Password"/>

           <label>Confirm Password</label>
           <input className="input" onChange={handle} type="text" placeholder="Confirm Password"/>
           <button className="button" onClick={updateClick}>SIGN UP!</button>
          

           <p className="para">Not a member?<span>Signup for an account</span></p>
          
            
          
            </div>
          
           </form>
        
            {input === true ?  <Card/>: (<div className="card4"> <p className="p1"> Try again</p></div>)}
        </div>
       
    );
}

export default Signup;