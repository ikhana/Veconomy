// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import TokenEconomics from './components/TokenEconomics';
import MissionControl from './components/MissionControl';
import BattlePlans from './components/BattlePlans';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <TokenEconomics />
      <MissionControl/>
      <BattlePlans/>
      <Footer/>
    </div>
  );
}

export default App;
