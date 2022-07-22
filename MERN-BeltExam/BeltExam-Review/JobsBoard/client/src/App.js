import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import DetailsPage from './views/DetailsPage';
import EditPage from './views/EditPage';
import CreatePage from './views/CreatePage';

function App() {
  return (
    <div className="container mt-5">
      <h1> Jobs Board </h1>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/jobs/new' element={<CreatePage />} />
        <Route path='/jobs/:id' element={<DetailsPage />} />
        <Route path='/jobs/edit/:id' element={<EditPage />} />

      </Routes>
    </div>
  );
}

export default App;
