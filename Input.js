import React from 'react'
import {useState} from 'react'


const Input = () => {
    console.log("here")

    const [ab,setAb]=useState('')
    
    const click = (e)=>{
       
setAb(e.target.value)

        
    }

  return (
    <>
    <input type='text' placeholder='enter something' value={ab} onChange={click}></input>
    {console.log("here")}
    </>

  )
}

export default Input