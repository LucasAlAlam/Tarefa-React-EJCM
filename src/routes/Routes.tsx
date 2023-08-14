import Login from '../pages/Login/index';
import Cadastro from '../pages/Cadastro/index'
import Home from '../pages/Home/index'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Login} path='/' />
        <Route Component={Cadastro} path="/Cadastro" />
        <Route Component={Home} path="Home" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;