import React, { useEffect, useState } from 'react'

const GroundTheme = () => {
    
    const [change,setChange]=useState(false)
    const [color,setColor]=useState('')
    const [back,setBack]=useState('')

    useEffect(()=>{
        
        console.log("runing")
        if(change){
            setBack("bg-light")
            setColor("text-dark")
        }else{
            setBack("bg-dark")
            setColor("text-light")
        }  
    },[change])

    
  return (
    <div className={`d-flex flex-column align-items-center  p-5  vh-100 ${back} ${color}`} >
      <h1>{ change ?  "Light Mode":"Drak Mode" }</h1>
      <button onClick={()=>(setChange(!change))}>change Mode</button>
    </div>
  )
}

export default GroundTheme
