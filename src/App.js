import logo from './logo.svg';
import './App.css';
import Navigation from './Components /Navigation';
import Sidebar from './Components /Sidebar';
import Charts from './Resources/Charts';

function App() {
  return (
    <div className='flex items-start'>
      
      <div className=' h-dvh'>
        <Sidebar />
      </div>

      <div className='flex flex-col  w-full'>
        <Navigation />
        <div className='grid-rows-2'>
          <Charts />
        </div>
      </div>
    </div>
  );
}

export default App;
