import React, { useState } from 'react';
import SonicPic from './images/sonic.png';
import SonicRing from './images/sonicRing.png';
import './App.css';
import { SonicCard } from './components/sonicCard';
import { RingCounter } from './components/ringCounter';
import ZoneSelector from './components/zoneSelector';
import ZoneEntryForm from './components/zoneEntryForm';

function App() {
  const [zone, setZone] = useState('');
  const zones = ['Forest', 'Beach', 'Desert', 'Mountain', 'City'];
  const handleZoneSubmit = (data: { name: string; zone: string }) => {
    alert(`Welcome ${data.name} to ${data.zone}!`);
    setZone(data.zone);
  };
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);}

  return (
    <div className="App">
      <h1>This is SONIC</h1>
      <SonicCard
        name="Sonic the Hedgehog"
        image={SonicPic}
        description="!!! The fastest hedgehog alive !!!"
      />
      <hr />
      <div
        style={{
          border: '2px dashed #1E90FF',
          padding: '16px',
          borderRadius: '12px',
          backgroundColor: '#f0f8ff',
          width: '260px',
          margin: '0 auto',
          marginTop: '20px',
        }}
      >
        <h2
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '1.8rem',
            color: '#0033cc',
          }}
        >
          Count Rings
          <img
            src={SonicRing}
            alt="Sonic Ring"
            style={{
              width: '28px',
              height: '28px',
              animation: 'spin 1.5s linear infinite',
            }}
          />
        </h2>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Rings: {count}</p>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: '#1E90FF',
            color: 'white',
            fontWeight: 'bold',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            marginTop: '8px',
            cursor: 'pointer',
            transition: '0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0033cc';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#1E90FF';
          }}
        >
          Collect a Ring!
        </button>
      </div>
      <hr />
      <h2>Explore with Sonic</h2>
      <ZoneEntryForm availableZones={zones} onSubmit={handleZoneSubmit} />
      {zone && <p>You chose: {zone}</p>}
    </div>
  );
}
export default App;
