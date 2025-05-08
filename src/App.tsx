import React, { useState } from 'react';
import SonicPic from './images/sonic.png';
import './App.css';
import { SonicCard } from './components/sonicCard';
import { RingCounter } from './components/ringCounter';
import { ZoneSelector } from './components/zoneSelector';
function App() {
  const [zone, setZone] = useState('');
  const [speed, setSpeed] = useState(50);
  return (
    <div className="App">
      <h1>This is SONIC</h1>
      <SonicCard
        name="Sonic the Hedgehog"
        image={SonicPic}
        description="The fastest hedgehog alive, always fighting for justice and rings!"
      />
      <hr />
      <h2>Ring Counter</h2>
      <RingCounter />
      <hr />
      <h2>Select Your Zone</h2>
      <ZoneSelector
        zones={['Green Hill Zone', 'Chemical Plant Zone', 'Sky Sanctuary']}
        onSelect={(value) => setZone(value)}
      />
      {zone && <p>You chose: {zone}</p>}
    </div>
  );
}
export default App;
