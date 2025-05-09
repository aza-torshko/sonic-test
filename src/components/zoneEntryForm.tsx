import React, { useState } from 'react';
import ZoneSelector from './zoneSelector';
type ZoneEntryFormProps = {
    availableZones: string[];
    onSubmit: (data: { name: string; zone: string }) => void;
};
export default function ZoneEntryForm({ availableZones, onSubmit }: ZoneEntryFormProps) {
    const [name, setName] = useState('');
    const [zone, setZone] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            setError('Whoa! Sonic needs a name to roll!');
            return;
        }
        if (!zone) {
            setError('Hold up! Choose a zone before blasting off!');
            return;
        }
        setError('');
        onSubmit({ name, zone });
    };
    return (
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            padding: '16px',
            border: '2px dashed #1E90FF',
            borderRadius: '12px',
            backgroundColor: '#f0f8ff',
            maxWidth: '400px',
            margin: '0 auto'
        }}>
            <h2 style={{ color: '#0a3d62', fontFamily: 'monospace' }}>Visit Sonic's World</h2>
            <label htmlFor="name" style={{ fontWeight: 'bold', color: '#0a3d62' }}>Your Name</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sonic, Shadow, Tails..."
                style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    width: '250px'
                }}
            />
            <label htmlFor="zone" style={{ fontWeight: 'bold', color: '#0a3d62' }}>Choose Your Zone</label>
            <ZoneSelector
                zones={availableZones}
                selectedZone={zone}
                onSelect={(z) => setZone(z)}
            />
            <button type="submit" style={{
                marginTop: '12px',
                padding: '8px 20px',
                backgroundColor: '#1E90FF',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                cursor: 'pointer'
            }}>
                Let's Go!
            </button>
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
        </form>
    );
}