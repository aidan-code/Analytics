import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import group from '../Assets/Group.svg'
import bell from "../Assets/solar_bell-outline.svg"
import profile from '../Assets/profile.png'
import dayjs from 'dayjs';

const Navigation = () => {

    const[userProfile, setUserProfile] = useState({
        name :"Justin Bergson",
        email: "justin.bergson@.com"
    })

    const  dayjs = require("dayjs")
    let date = (dayjs().format('MMMM DD, YYYY'))
  return (
    <div className=' w-full flex justify-between items-center p-3 font-sans border border-[#E5EAEF]'>
{/**Dashboard title */}
        <div className='w-9/12'>
            <p className='font-semibold text-lg '>Dashboard</p>
        </div>
{/**Naviagtion, searchbar, date , notification and the profile picture*/}

        <div className='w-full flex items-center justify-evenly'>
        
            <div className= 'border-back border rounded-full p-3 flex items-center w-1/3'>

            <IconContext.Provider value={{color: 'gray', size: '20px'}}>
            <CiSearch />
            </IconContext.Provider>
            <div className='mx-2'>
                <p className='text-[#A3A3A3]'>Search...</p>
            </div>
            </div>

            <div className='flex items-center mx-5'>
                <img src={group} />

                <div>
                    <p className='mx-3 font-medium'>{date}</p>
                </div>

                <div className='rounded-full border border-back p-2 mx-3'>
                    <img src={bell} />
                </div>
            </div>


            <div className='flex items-center border border-back rounded-full py-1 px-2'>
                <img src={profile} className='h-7'/>

                <div className='mx-3'>
                    <p className='leading-normal text-sm'>{userProfile.name}</p>
                    <p className='leading-normal text-sm text-[#A3A3A3]'>{userProfile.email}</p>
                </div>

                <IoIosArrowDown />
                
            </div>

        </div>

    </div>
  )
}

export default Navigation