import './App.css';
import HeaderForm from './components/HeaderForm';
import Planets from './views/Planet'
import People from './views/People'
import {Route, Routes} from 'react-router-dom';

const ErrorPage = ()  => {
  return (
    <h1> Error page</h1>
  )
}

function App() {
  return (
    <div >
      <h1> Starwars API </h1>
      <HeaderForm />
    <Routes>
      <Route path="/people/:id" element={<People />} />
      <Route path="/planets/:id" element={<Planets />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
  );
}

export default App;
