import React, { useRef, useState } from 'react'
import "../css/stopwatch.css"

const StopWatch = () => {
   const [time,setTime] = useState(null)
  
   const intervalref = useRef(null)

    const handleStart =()=>{
        intervalref.current = setInterval(()=>{
        setTime(Date.now())
       },10)
    }

    const handleStop =()=>{
      clearInterval(intervalref.current)
    }
  return (
   <>
    <h1>STOPWATCH</h1>
    <div className='main-stopwatch'>
        <div className='stopwatch'>
            <h1 className='show'>STOPWATCH:  {time}</h1>
            <div className='btn'>
                <button onClick={handleStart}>START</button>
                <button onClick={handleStop}>STOP</button>
            </div>
        </div>
    </div>
   </>

  )
}

export default StopWatch