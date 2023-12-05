import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './componentes/Menu';
import Rutina from './componentes/Formulario';
import Admin from './componentes/Admin';
import Rutinas from './componentes/Rutinas';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Menu />
      <div>
        <Routes>
          <Route path='/' element={<Rutinas />}/>
          <Route path='/agregar' element={<Rutina />}/>
          <Route path='/admin' element={<Admin />}/>
        </Routes>
        
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
