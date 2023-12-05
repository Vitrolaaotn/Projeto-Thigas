import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/login';
import Painel from './Pages/painel';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const auh = localStorage.getItem('key') === 'token' || false;
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login />} />
        {auh ? <Route path="/painel" element={<Painel />} />: ""} 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
