import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <header>
      <h1>Header do site</h1>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/privada">Privada</Link>
      </nav>
     </header>
     <hr/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/private" element={<Private/>}/>
     </Routes>
    </div>
  );
}

export default App;
