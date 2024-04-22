import { useState } from 'react';

import './App.css'
import Home from './pages/Home';
import BettingStrategy from './pages/BettingStrategy/BettingStrategy';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [bettingConfig, setBettingConfig] = useState([1,2,4])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="strategy" element={<BettingStrategy bettingConfig={bettingConfig} setBettingConfig={setBettingConfig}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
