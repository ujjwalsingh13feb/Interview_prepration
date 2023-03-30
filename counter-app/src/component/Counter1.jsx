import React from 'react'
import { useState } from 'react';

const Counter1 = () => {
   const [initialNum ,setcurrentNum] = useState(0)

   const inc = ()=>{
     setcurrentNum(initialNum+1)
   }
   const dec = ()=>{    
     if(initialNum>0){
        setcurrentNum(initialNum-1)
     }else{
        setcurrentNum(0)
        alert("You reach the least value of Zero")
     }
   }

  return (
   <>
   <div>
    <div>
        <h1>{initialNum}</h1>
        <div>
            <button onClick={inc}>incrment</button>
            <button onClick={dec}>decrement</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Counter1