import React from 'react';

type Props = {
    zones: string[];
    onSelect: (zone: string) => void;
};

export const ZoneSelector: React.FC<Props> = ({ zones, onSelect }) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="">Select a zone</option>
            {zones.map((zone) => (
                <option key={zone} value={zone}>
                    {zone}
            </option>
            ))}
        </select>
    );
};