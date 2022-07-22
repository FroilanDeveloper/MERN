import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import DetailsPage from './views/DetailsPage';
import CreatePage from './views/CreatePage';



function App() {
  return (
    <div className="container mt-5">
      <h1> Pirate Crew </h1>
      
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/pirates/new' element={<CreatePage />} />
        <Route path='/pirates/:id' element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
