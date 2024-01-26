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

        <div className='bg-back h-[53rem] flex flex-col justify-between '>

        <div className='flex flex-col'>

            <div className='pb-7 pt-2 px-5'>
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

                    <div className='bg-white flex flex-col mx-4 items-center py-2 rounded-full'>
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