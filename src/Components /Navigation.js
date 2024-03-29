import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import { CiBellOn, CiCalendar, CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import group from '../Assets/Group.svg'
import bell from "../Assets/solar_bell-outline.svg"
import profile from '../Assets/profile.png'
import dayjs from 'dayjs';
import { IoCalendarOutline } from 'react-icons/io5';
import { PiBell, PiBellLight } from 'react-icons/pi';

const Navigation = ({onclick, state}) => {

    const[userProfile, setUserProfile] = useState({
        name :"Justin Bergson",
        email: "justin.bergson@.com"
    })

    const [search, setSearch]= useState(false)

    const  dayjs = require("dayjs")
    let date = (dayjs().format('MMMM DD, YYYY'))

    const showSearch = () =>{
        setSearch(!search)
    }
  return (
    <div className='border-b border-b-[#E5EAEF] w-full flex justify-between items-center p-3 font-sans border-b-1 dark:border- dark:border-b-[#e5eaef45] relative'>
{/**Dashboard title */}
        <div className='w-9/12 flex items-center'>
            <div className='w-[20px] mx-2 lg:hidden' onClick={onclick}v>
                <div className='h-0.5  bg-black my-1 rounded-full dark:bg-[#e5eaef45]'></div>
                <div className='h-0.5  bg-black my-1 rounded-full dark:bg-[#e5eaef45]'></div>
                <div className='h-0.5  bg-black my-1 rounded-full dark:bg-[#e5eaef45]'></div>
            </div>
                <p className='font-semibold lg:text-lg text-xs dark:text-white'>Dashboard</p>
        </div>
{/**Naviagtion, searchbar, date , notification and the profile picture*/}

        <div className='w-full flex items-center justify-end lg:justify-between  '>
        
            <div className= 'border-back border rounded-full p-1 lg:p-2 flex items-center lg:w-[40%] dark:bg-[#e5eaef45] dark:border-[#e5eaef45]' onClick={showSearch}>

                <IconContext.Provider value={{color: 'gray', size: '14px'}}>
                <CiSearch />
                </IconContext.Provider>
                <div className='mx-2 hidden lg:block'>
                    <input className='text-[#A3A3A3] outline-none dark:bg-[#e5eaef00]' placeholder="Search..." type='text'/>
                </div>

                <div className='bg-white w-full absolute top-20  left-0 lg:hidden'>
                    <div className={search ? 'border-back border rounded-full p-3 flex items-center w-100% lg:hidden': " lg:block hidden border-back border rounded-full p-3  w-1/3"}>
                       <div className='flex items-center'>
                            <IconContext.Provider value={{color: 'gray', size: `${"15px lg:20px"}`}}>
                            <CiSearch />
                            </IconContext.Provider>
                            <div className='mx-2'>
                                <input className='text-[#A3A3A3] outline-none border-0 '  placeholder="Search..." type='text'/>
                            </div>
                       </div>
                   
                    </div>
                </div>
            </div>

            <IconContext.Provider value={{color :`${state ? "white" : "black"}`, size: '15px'}}>
                <div className='flex items-center mx-2  group'>
                    <IoCalendarOutline/>

                    <div>
                        <p className='mx-3 font-medium hidden hover:block lg:block lg:w-full lg:text-xs xl:text-sm dark:text-white'>{date}</p>
                    </div>

                    <div className='rounded-full border border-back p-1 ml-2 dark:border-0'>
                        <PiBell />
                        { /**<img src={bell} className='w-3 h-3 lg:h-auto lg:w-auto'/>*/}
                    </div>
            </div>


            <div className='flex items-center border border-back rounded-full py-1 px-2 dark:border-[#e5eaef45] dark:text-white'>
                <img src={profile} className='h-7'/>
 
                <div className='mx-3 hidden lg:block'>
                    <p className='leading-normal text-sm'>{userProfile.name}</p>
                    <p className='leading-normal text-sm text-[#A3A3A3]'>{userProfile.email}</p>
                </div>

                <IoIosArrowDown />
                
            </div>
            </IconContext.Provider>
        </div>

    </div>
  )
}

export default Navigation