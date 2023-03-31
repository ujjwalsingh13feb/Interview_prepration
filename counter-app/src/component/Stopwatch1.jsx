import React from 'react'
import { useState } from 'react';

const Stopwatch1 = () => {

    const [time,setTime]=useState(null)
  
    const handleStart =()=>{

    }

    const handleStop =()=>{}

    const handleReset =()=>{

    }


  return (
    <>
    <h1>STOPWATCH-APP</h1>
    <div>
        <div>
            <h1>STOPWATCH:{time}</h1>
              <div>
                <button onClick={handleStart}>START</button>
                <button onClick={handleStop}>STOP</button>
                <button onClick = {handleReset}>RESET</button>
              </div>
        </div>
    </div>
    </>
  )
}

export default Stopwatch1