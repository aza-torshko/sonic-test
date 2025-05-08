import React from "react";

export const RingCounter = () => {
    const [rings, setRings] = React.useState(0);

    return (
        <div>
            <p data-testid="ring-count">Rings: {rings}</p>
            <button onClick={() => setRings(rings + 1)}>Collect a Ring</button>
        </div>
    );
};