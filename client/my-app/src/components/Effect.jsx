import React ,{useEffect, useRef } from "react"


const Effect=()=>{
   useEffect(()=>{
    alert("welcome!!")
   },[])
   const inputRef=useRef(null)
 const alinput=()=>{
    alert(inputRef.current.value)
    
 }

   
 return(
    <>
    <input ref={inputRef}/>
    <button onClick={alinput}>click me</button>

    </>
 )




         
    
}
export default Effect