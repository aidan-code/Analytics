import React from 'react'
import { Statdata } from '../UserData/Statdata'
import trendup from '../Assets/trendup (1).svg'
import trenddown from '../Assets/trend-down.svg'
import Lines from '../Resources/linee'

const Stat = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2  gap-2.5 font-sans' >

        {Statdata.map((data, index) => {
            return (
            <div key={index} className='p-4  bg-white rounded-xl relative border border-[#EDF2F7] h-[195px]'>
        {/**the icon per stat */}
                <div className='flex items-center justify-between my-1'>
                    <img src={data.svg} alt="check"/>
                    
                    <div className='absolute right-0.5 top-2'>
                        <Lines color={data.color === "green" ? "#34CAA5" : "#ED544E"}  fillColor={data.color === "green" ? "#34CAA51F" : "#ED544E1F"}/>
                    </div>
                </div>

                {/**the title & value per stat */   }
                <div className='text-lg font-semibold text-xl my-5'>
                    <p className='text-xl text-[#898989]'>{data.title}</p>
                    <p className='text-2xl text-black'>{data.value}</p>
                </div>

         {/**the progress bar per stat */}
                <div className='flex items-center justify-between '>
                    <div className={data.color === "green" ? "bg-[#34CAA51F] flex items-center rounded-full p-2" : "bg-[#ED544E1F] flex items-center rounded-full p-2"}>
                        <img  src={data.color === "green" ? trendup : trenddown } alt="trends"/>
                        <p className='text-[#34CAA5] text-xs '>{data.percent}</p>
                    </div>

                    <div><p className='text-[#606060] text-xs'>vs. previous month</p></div>
                </div>

            </div>
        )})}
    </div>
  )
}

export default Stat