import React, { useRef, useState } from 'react'
import "../css/stopwatch.css"

const StopWatch = () => {
   const [time,setTime] = useState(null)
   const [now, setNow] = useState(null)
   const intervalref = useRef(null)

    const handleStart =()=>{
        setTime(Date.now())
        setNow(Date.now())
        intervalref.current = setInterval(()=>{
        setTime(Date.now())
       },10)
    }

    const handleStop =()=>{
      clearInterval(intervalref.current)
    }

    
   
    let timepass = (time - now)/1000

    const handleReset =()=>{
      setTime()       
   }
     
  return (
   <>
    <h1>STOPWATCH</h1>
    <div className='main-stopwatch'>
        <div className='stopwatch'>
            <h1 className='show'>STOPWATCH:  {timepass.toFixed(3)}</h1>
            <div className='btn'>
                <button onClick={handleStart}>START</button>
                <button onClick={handleStop}>STOP</button>
                <button onClick={handleReset}>RESET</button>
            </div>
        </div>
    </div>
   </>

  )
}

export default StopWatch