import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
