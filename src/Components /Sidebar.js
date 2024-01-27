import React, {useEffect, useState} from 'react'
import Dash from '../Assets/Dashboard.svg'
import stats from '../Assets/stats.svg'
import users from '../Assets/users.svg'
import boxed from '../Assets/boxed.svg'
import percent from '../Assets/percentile.svg'
import info from '../Assets/infosec.svg'
import vector from '../Assets/Vector.svg'
import sun from '../Assets/sun.svg'
import moon from '../Assets/moon 1.svg'
import exit from '../Assets/exit.svg'
import settings from '../Assets/settings.svg'
import enter from '../Assets/enter.svg'
import '../Resources/animate.css'

import { PiSunFill, PiMoonFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { IconContext } from 'react-icons'

const Navdata = [
    Dash,
    stats,
    users,
    boxed,
    percent,
    info
  ]

const Sidebar = ({change, state, showNav, onclick }) => {
    console.log(state)

    const [Show, setshow] = useState()
  return (
    <div className={showNav ? "bg-[#FFFFFF] slideout fixed z-50 w-2/4 flex items-start justify-start"  : "hidden lg:block lg:relative" }>

        <div className='bg-back h-[53rem] flex flex-col justify-between '>

        <div className='flex flex-col'>

            <div className='pb-6 pt-5 px-5'>
                <img src={vector}/>
            </div>
        
            <div className='flex flex-col'>
                {Navdata.map((data, index) => {
                        return(
                            <div key={index} className='px-5 py-0 mb-3 relative '>
                                <img src={data} />
                                <div className={index === 0 ? 'absolute right-0 top-1 h-4/5 w-[3px] bg-black rounded-l-lg' : 'hidden'}></div>
                            </div>
                        ) 
                    })}

                    <div className='bg-white flex flex-col mx-4 items-center py-2 rounded-full relative z-[0]' onClick={change}>
                    <div className={state ? "h-[30px] w-[30px] absolute rounded-full bottom-1 bg-[#34CAA5] z-[-1] transition duration-200 ease-in-out" : "h-[30px] w-[30px] absolute rounded-full top-1 translate-y-0 bg-[#34CAA5] z-[-1] transition duration-200 ease-in-out"} ></div>
                        <IconContext.Provider value={{ size: "20px", color:`${state ? "white" : "white"}`}}>
                            <div className='mb-6'>
                                <PiSunFill />
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "20px", color:`${state ? "white" : "grey"}`}}>

                                <div>
                                    <PiMoonFill />
                                </div>
                        </IconContext.Provider>
                    
                    </div>
            </div>
           
        </div>

        <div className='flex flex-col '>
            <img src={exit} className='mb-3'/>
            <img src={settings} className='mb-3'/>
            <img src={enter} className='mb-3'/>
        </div>
        
        </div>

        <div className='lg:hidden absolute top-[10%] right-[0%]' onClick={onclick}>
        <IconContext.Provider value={{color: 'black', size: '50px'}}>
            <IoClose />
        </IconContext.Provider>
        </div>
    </div>
  )
}

export default Sidebar