import { React } from 'react'
import  Navbar  from './components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
      <Outlet />
    </div>
  );
}

export default App
