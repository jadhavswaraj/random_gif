import logo from './logo.svg';
import './App.css';
import Random from './component/Random';
import Tag from './component/Tag';

function App() {
  return (
    <div className="text-center">
      <h1 className='text-center '>Swaraj</h1>
      <div>
      <Random/>
        <Tag/>
        
      </div>
      
    </div>
  );
}

export default App;
