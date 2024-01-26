import React, { useEffect, useState } from 'react'

const ProgressBar = (props) => {
    const [dispValue, setDispValue] = useState(0)
    const [filled, setFilled] = useState(props.value)
    const[runing, setRuning] = useState() 

    useEffect((props) =>{
        if(dispValue < filled){
            setTimeout(() => setDispValue(prev => prev += 1), [50])
        }
    }, [filled, dispValue])
  return (
    <div  className='h-full my-4 font-sans'> 
        <p className='font-semibold text-s'>{props.name}</p>
        <div className='h-[15px] w-full bg-[#F5F5F5] rounded-full my-3'>
            <div style={{
                height:"100%",
                width:`${filled}%`,
                backgroundColor:props.color,
                transition: "width 0.5s ease-in-out",
                borderRadius: "50px",
            }}></div>
        </div>
        <div className='flex items-center justify-between' >
            <p className='my-1-'>{props.progress}%</p>
            <p>{props.increment}</p>
        </div>
    </div>
  )
}

export default ProgressBar