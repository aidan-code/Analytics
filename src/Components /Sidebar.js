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

import { PiSunFill, PiMoonFill, PiArrowsOutLineVerticalDuotone, PiArrowArcLeft, PiArrowLeft } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { IconContext } from 'react-icons'
import { TbSignLeft } from 'react-icons/tb'

const Navdata = [
    {
        image:Dash,
        title:"Dashboard",
        exact:"exact",
        id:1,

    },
    {
        image:stats,
        title:"Stats",
        exact:"exact",
        id:2,


    },
    {
        image:users,
        title:"Users",
        exact:"exact",
        id:3,


    },
    {
        image:boxed,
        title:"Products",
        exact:"exact",
        id:4,


    },

    {
        image:percent,
        title:"Rates",
        exact:"exact",
        id:5,


    },
    
    {
        image:info  ,
        title:"News",
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
    <div className={showNav ? " bg-[#FFFFFF] slideout transition duration-300 fixed z-50 w-[75%] flex items-start justify-start h-full dark:bg-dark dark:border-r-[e5eaef45]"  : "hidden lg:block lg:relative" }>

        <div className='bg-back h-[60rem] flex flex-col justify-between dark:bg-dark d items-center' >

        <div className='flex flex-col'>

            <div className='pb-6 pt-5 px-5'>
                <img src={vector} alt='logo'/>
            </div>
        
            <div className='flex flex-col items-start justify-center'>
                {Navdata.map((data) => {
                        return(
                            <div key={data.id} className='group px-5 py-0 mb-3 relative flex items-center justify-start' onClick={setActive}>
                                <img src={data.image} alt='logos'/>
                                <p className=' lg:hidden dark:text-white'>{data.title}</p>
                                <div className={data.id || data.id === 1? 'absolute right-0 top-1 h-4/5 w-[3px] bg-black rounded-l-lg hidden group-hover:block ' : 'hidden'}></div>
                                <div className={ data.id === 1? 'absolute right-0 top-1 h-4/5 w-[3px] bg-black rounded-l-lg  group-hover:block dark:bg-[#e5eaef45] ' : 'hidden'}></div>

                            </div>
                        ) 
                    })}
                    <div className='flex px-5 w-full'>
                        <div className='bg-white border justify-between px-2 flex flex-col mx-1  items-center py-2 rounded-full relative z-[0] dark:bg-dark dark:  border-[#e5eaef45]' onClick={change} >
                            <div className={state ? "h-[30px] w-[30px] absolute rounded-full  showlight bg-[#34CAA5] z-[-1]" : "h-[30px] w-[30px] absolute rounded-full top-1 translate-y-0 bg-[#34CAA5] z-[-1] transition"} ></div>
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
           
        </div>

        <div className='flex flex-col  items-start  w-full'>
            <img src={exit} className='mb-3 px-5'/>
            <img src={settings} className='mb-3 px-5'/>
            <img src={enter} className='mb-3 px-5'/>
        </div>
        
        </div>

        <div className='lg:hidden absolute top-[3%] right-[10%]' onClick={onclick}>
        <IconContext.Provider value={{color: `${state ? "white": "black"}`, size: '20px'}}>
            <PiArrowLeft/>
        </IconContext.Provider>
        </div>
    </div>
  )
}

export default Sidebar