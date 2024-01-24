import React from 'react'
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

const Navdata = [
    Dash,
    stats,
    users,
    boxed,
    percent,
    info
  ]

const Sidebar = () => {
  return (
    <div className='bg-white'>

        <div className='bg-back h-[53rem] p-3 flex flex-col justify-between px-5'>

        <div className='flex flex-col'>

            <div className='pb-7 pt-2'>
                <img src={vector}/>
            </div>
        
            <div className='flex flex-col'>
                {Navdata.map((data, index) => {
                        return(
                            <div key={index} className='mb-3'>
                                <img src={data} />
                            </div>
                        ) 
                    })}

                    <div className='bg-white flex flex-col rounded-full items-center py-2'>
                        <img src={sun} className='mb-3'/>
                        <img src={moon}/>
                    </div>
            </div>
           
        </div>

        <div className='flex flex-col '>
            <img src={exit} className='mb-3'/>
            <img src={settings} className='mb-3'/>
            <img src={enter} className='mb-3'/>
        </div>
        
        </div>
    </div>
  )
}

export default Sidebar