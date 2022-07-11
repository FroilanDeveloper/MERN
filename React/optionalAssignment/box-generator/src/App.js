import './App.css';
import Form from './components/Form';
import {useState} from 'react'

function App() {
  const[boxList, setBoxList] = useState([]);
  const addBox = (newBox) => {
    setBoxList([...boxList, newBox])
  }
  return (
    <div className="App">
      <Form addBox={addBox}/>
      <div className="sort">
        {
          boxList.map((b => 
          <div 
          style={{
          backgroundColor: b.boxColor, 
          height: b.boxSize, 
          width: b.boxSize
          }}>
          </div>))
        }
      </div>
    </div>
  );
}

export default App;
