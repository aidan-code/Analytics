import './App.css';
import React, {useState, useEffect} from 'react';
import Navigation from './Components /Navigation';
import Sidebar from './Components /Sidebar';
import Charts from './Resources/Charts';
import Table from './Components /Table';
import Stat from './Components /Stat';
import ProgressBar from './Resources/ProgressBar';

function App() {

  const [theme, setTheme] = useState("light")
  const [clicker, setClicker] = useState(false)

  const [navHide, setNavHide] = useState(false)

  const handleShow = () =>{
    setNavHide(!navHide)
  }

  useEffect(()=>{
    if (theme ==="dark"){
      document.documentElement.classList.add("dark")
    } else{
      document.documentElement.classList.remove("dark")

    }
  }, [theme])

  const handleChange =() =>{
    setTheme(theme === "dark" ? "light" : "dark")
    setClicker(!clicker)
  }

  console.log(theme)
  return (
    <div className='flex items-start'>
      
      <div className=' h-dvh'>
        <Sidebar change ={handleChange} state={clicker} showNav={navHide} onclick ={handleShow}/>
      </div>

      <div className='flex flex-col w-full'>
        <Navigation onclick ={handleShow}/>
        <div className=' py-6 px-4 h-full bg-[#FAFAFA] lg:grid grid-cols-3 grid-rows-2 gap-3'>
          <div className="col-span-2 overflow-hidden">
              <Charts  />
          </div>

        {/**the stat section */}
        <div className='h-full my-5 lg:my-0 '>
          <Stat />
        </div>

          {/**the table section */}
          <div className="col-span-2 my-5 lg:my-0 ">
            <Table />
         </div>

         {/**the Progress bar section */}
         <div className='p-4 bg-white rounded-xl overflow-hidden  h-[405px]'>
         <div className='flex items-center justify-between mb-3'>
            <p className='font-semibold text-lg'>Top platform</p>
            <p className='text-[#34CAA5]'>See all</p>
         </div>
         <div >
            <ProgressBar name ="Book Bazaar" color="#6160DC" progress=" $2,500,000 " increment="+15%" value="70"/>
            <ProgressBar name ="Artisan Aisle" color="#54C5EB" progress="$1,800,000" increment="+10%" value="50"/>
            <ProgressBar name ="Toy Troop" color="#FFB74A" progress="$1,200,000" increment="+10%" value="35"/>
            <ProgressBar name ="X Store" color="#FF4A55" progress="$1,200,000" increment="+10%" value="25"/>

         </div>
         
         </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
