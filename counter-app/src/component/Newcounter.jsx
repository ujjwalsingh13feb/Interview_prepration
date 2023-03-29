import React, { useState } from "react";
import "../css/Counter.css"

const Newcounter = () => {
  const [count,setCount] = useState(0);
  const inc = ()=>{
    setCount(count+1)
  }
  const dec = ()=>{
    if(count>0){
        setCount(count-1)
    }else{
        setCount(0)
        alert("You have already reach the zero")
    }
  }
  return (
    <>
      <h1>Newcounter_app</h1>
      <div className="counter-main">
        <div className="counter">
          <h1 className="show">{count}</h1>
          <div className="btn">
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newcounter;
