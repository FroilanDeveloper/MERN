import './App.css';
import Header from './components/Header'
import People from './views/People'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Planets from './views/Planets'




function App() {
  return (
    <BrowserRouter>
      <h1>Star Wars API</h1>
      <Header />
      <Routes>
        <Route path='/people/:id' element={<People/>} />
        <Route path='/planets/:id' element={<Planets/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
