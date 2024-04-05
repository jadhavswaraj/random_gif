import logo from './logo.svg';
import './App.css';
import Random from './component/Random';
import Tag from './component/Tag';

function App() {
  return (
    <div className="text-center bg-[#334155] w-full h-screen flex flex-col relative overflow-x-hidden  items-center">
     
      <h1 className='absolute text-center bg-[#e2e8f0] mt-[20px] rounded-lg w-11/12 ml-[15px] 
     px-8 py-1 text-4xl font-bold'>RANDOM GIF's</h1>
     
      <div className='flex flex-col w-full items-center gap-y-10
      mt-[100px]'>
        <Random/>
         <Tag/>
        
      </div>
      
    </div>
  );
}

export default App;
