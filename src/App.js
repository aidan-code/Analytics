import logo from './logo.svg';
import './App.css';
import Navigation from './Components /Navigation';
import Sidebar from './Components /Sidebar';
import Charts from './Resources/Charts';
import Table from './Components /Table';
import Stat from './Components /Stat';
import ProgressBar from './Resources/ProgressBar';

function App() {
  return (
    <div className='flex items-start'>
      
      <div className=' h-dvh'>
        <Sidebar />
      </div>

      <div className='flex flex-col w-full'>
        <Navigation />
        <div className='grid grid-rows-2 grid-cols-3 gap-3  py-6 px-4 h-full bg-[#FAFAFA]'>
          <div className="col-span-2 h-fit">
              <Charts  />
          </div>

        {/**the stat section */}
        <div>
          <Stat />
        </div>

          {/**the table section */}
          <div className="col-span-2">
            <Table />
         </div>

         {/**the Progress bar section */}
         <div className='p-4 bg-white rounded-xl overflow-hidden  h-[407px]'>
         <div className='flex items-center justify-between mb-3'>
            <p className='font-semibold text-lg'>Top platform</p>
            <p className='text-[#34CAA5]'>See all</p>
         </div>
         <div >
            <ProgressBar name ="Book Bazaar" color="#6160DC" progress=" $2,500,000 " increment="+15%" value="75"/>
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
