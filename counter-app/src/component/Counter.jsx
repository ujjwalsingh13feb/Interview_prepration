import React, { useState } from "react";
import  "../css/Counter.css"

export const Counter = () => {
   const [count,setCount] = useState(0)

   const incCount =()=>{
      setCount(count+1)
   }

   const decCount =()=>{
     if(count>0){
        setCount(count-1)
     }else{
        setCount(0)
        alert("Zero limit rich" )
        
     }
   }

  return (
    <>
      <h1>COUNTER</h1>
      <div className="counter-main">
        <div className="counter">
            <h1 className="show">{count}</h1>
            <div className="btn">
            <button onClick={incCount}>Increment</button>
            <button onClick={decCount}>Decrement</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
