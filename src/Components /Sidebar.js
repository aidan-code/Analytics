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
import { RxDashboard } from "react-icons/rx";

import { PiSunFill, PiMoonFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { IconContext } from 'react-icons'

const Navdata = [
    {
        image:Dash,
        title:"Dashboard",
        exact:"exact",
        id:1,

    },
    {
        image:stats,
        title:"Dashboard",
        exact:"exact",
        id:2,


    },
    {
        image:users,
        title:"Dashboard",
        exact:"exact",
        id:3,


    },
    {
        image:boxed,
        title:"Dashboard",
        exact:"exact",
        id:4,


    },

    {
        image:percent,
        title:"Dashboard",
        exact:"exact",
        id:5,


    },
    
    {
        image:info  ,
        title:"Dashboard",
        exact:"exact",
        id:6,


    }
   
 
  ]

const Sidebar = ({change, state, showNav, onclick }) => {
    console.log(state)

    const [Show, setshow] = useState()

    const [isActive, setIsActive] = useState(false);

    const setActive = (e) => {
        setIsActive(true);
        console.log("true")
    }
  return (
    <div className={showNav ? " border border-[#E5EAEF]bg-[#FFFFFF] slideout fixed z-50 w-2/4 flex items-start justify-start h-full dark:bg-dark dark:border-r-[e5eaef45]"  : "hidden lg:block lg:relative" }>

        <div className='bg-back h-[60rem] flex flex-col justify-between dark:bg-dark d'>

        <div className='flex flex-col'>

            <div className='pb-6 pt-5 px-5'>
                <img src={vector}/>
            </div>
        
            <div className='flex flex-col'>
                {Navdata.map((data) => {
                        return(
                            <div key={data.id} className='group px-5 py-0 mb-3 relative ' onClick={setActive}>
                                <img src={data.image}/>
                                <div className={data.id || data.id === 1? 'absolute right-0 top-1 h-4/5 w-[3px] bg-black rounded-l-lg hidden group-hover:block ' : 'hidden'}></div>
                                <div className={ data.id === 1? 'absolute right-0 top-1 h-4/5 w-[3px] bg-black rounded-l-lg  group-hover:block ' : 'hidden'}></div>

                            </div>
                        ) 
                    })}

                    <div className='bg-white border  px-1 flex flex-col mx-4 items-center py-2 rounded-full relative z-[0] dark:bg-dark dark:  border-white' onClick={change} >
                        <div className={state ? "h-[30px] w-[30px] absolute rounded-full showlight bg-[#34CAA5] z-[-1] transition-transform origin-top duration-200 ease-in-out" : "h-[30px] w-[30px] absolute rounded-full top-1 translate-y-0 bg-[#34CAA5] z-[-1] transition duration-200 ease-in-out"} ></div>
                            <IconContext.Provider value={{ size: "20px", color:`${state ? "grey" : "white"}`}}>
                                <div className='mb-6 cursor-pointer'>
                                    <PiSunFill />
                                </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ size: "20px", color:`${state ? "white" : "grey"}`}}>

                                    <div  className='cursor-pointer '>
                                        <PiMoonFill />
                                    </div>
                            </IconContext.Provider>
                    
                    </div>
            </div>
           
        </div>

        <div className='flex flex-col '>
            <img src={exit} className='mb-3 px-5'/>
            <img src={settings} className='mb-3 px-5'/>
            <img src={enter} className='mb-3 px-5'/>
        </div>
        
        </div>

        <div className='lg:hidden absolute top-[5%] right-[0%]' onClick={onclick}>
        <IconContext.Provider value={{color: 'black', size: '30px'}}>
            <IoClose />
        </IconContext.Provider>
        </div>
    </div>
  )
}

export default Sidebar