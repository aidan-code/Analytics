import logo from './logo.svg';
import './App.css';
import Navigation from './Components /Navigation';
import Sidebar from './Components /Sidebar';

function App() {
  return (
    <div className='flex items-start'>
      
      <div className=' h-dvh'>
        <Sidebar />
      </div>

      <div className='flex w-full'>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
