import './App.css';
import image from './1.jpg';
import imageTwo from './2.jpg';
import { Glocerylist } from './GloceryList';

function App() {
  return (
    <div className='app'>
    
    <img src= { image } width="400px" height="350px" alt="shopingpicture"/>
    <div className="container">
      <h1>Grocery List:</h1> 
      </div>
    <Glocerylist/>
    <img src ={ imageTwo } width="400px" height="350px" alt="shopingpicturetwo"/>
    </div>
  );
}

export default App;
