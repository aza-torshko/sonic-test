import React from 'react';

type ZoneSelectorProps = {
  zones: string[];
  selectedZone: string;
  onSelect: (zone: string) => void;
};
export default function ZoneSelector({ zones, selectedZone, onSelect }: ZoneSelectorProps) {
  return (
    <select value={selectedZone} onChange={(e) => onSelect(e.target.value)}
    style={{ width : '250px', padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
    >
      <option value="">-- Select a zone --</option>
      {zones.map((zone) => (
        <option key={zone} value={zone}>
          {zone}
        </option>
      ))}
    </select>
  );
}