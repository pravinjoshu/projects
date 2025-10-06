import React, { useState } from 'react'

const Count = () => {

    const [value,setValue] = useState(0)
    
    // const add = ()=>{
    
    //     setValue( value=>value+1)  
    // }
    const add = ()=>{    
        setValue(value+1)  
        setValue(value+1)
    }
  return (
    <div className='card w-25 mx-auto my-5' >
        <div className='card-body'>
            <h1 className='body-title'>Increases Your Value:{value}</h1>
            <button onClick={add}>Count</button>

        </div>
    </div>
  )
}

export default Count
