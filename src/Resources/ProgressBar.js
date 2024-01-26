import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [filled, setFilled] = useState(0)
    const[runing, setRuning] = useState() 

    useEffect(() =>{
        if(filled < 100){
            setTimeout(() => setFilled(prev => prev += 1), [50])
        }
    }, [filled])
  return (
    <div>
        <div className='h-[50px] w-4/5 bg-[#F5F5F5]'>
            <div style={{
                height:"100%",
                width:`${filled}%`,
                backgroundColor:"#000000",
                transition: "width 0.5s ease-in-out",
            }}></div>
        </div>
        <p>{filled}%</p>
    </div>
  )
}

export default ProgressBar