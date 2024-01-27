import React from 'react'
import { Statdata } from '../UserData/Statdata'
import trendup from '../Assets/trendup (1).svg'
import trenddown from '../Assets/trend-down.svg'
import Lines from '../Resources/linee'

const Stat = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2  gap-2.5 font-sans text-xs ' >

        {Statdata.map((data, index) => {
            return (
            <div key={index} className='p-2  bg-white rounded-xl relative border border-[#EDF2F7] h-full lg:h-[195px] sm:py-3 sm px-2'>
        {/**the icon per stat */}
                <div className='flex items-center justify-between my-1'>
                    <img src={data.svg} alt="check"/>
                    
                    <div className='absolute right-0.5 top-2'>
                        <Lines color={data.color === "green" ? "#34CAA5" : "#ED544E"}  fillColor={data.color === "green" ? "#34CAA51F" : "#ED544E1F"}/>
                    </div>
                </div>

                {/**the title & value per stat */   }
                <div className='text-lg text-xl my-5'>
                    <p className='text-xl lg:text-base text-[#898989]'>{data.title}</p>
                    <p className='text-2xl text-black font-semibold lg:text-2xl '>{data.value}</p>
                </div>

         {/**the progress bar per stat */}
                <div className='flex items-center justify-between '>
                    <div className={data.color === "green" ? "bg-[#34CAA51F] flex items-center rounded-full px-2 py-1" : "bg-[#ED544E1F] flex items-center rounded-full px-2 py-1"}>
                        <img  src={data.color === "green" ? trendup : trenddown } alt="trends"/>
                        <p className={data.color === "green" ? "text-[#34CAA5] text-[9px] ":"text-[#ED544E] text-[9px]"}>{data.percent}</p>
                    </div>

                    <div>
                        <p className='text-[#606060] text-[9px] lg:block md:block xl:hidden'> vs. prev month</p>
                        <p className='text-[#606060] text-xs hidden lg:hidden md:hidden xl:block'>vs. previous month</p>
                    </div>
                </div>

            </div>
        )})}
    </div>
  )
}

export default Stat