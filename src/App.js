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
         <div>
          <ProgressBar />
         </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
