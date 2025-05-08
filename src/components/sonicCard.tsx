import React from "react";

type Props = {
    name: string;
    image: string;
    description: string;
};

export const SonicCard: React.FC<Props> = ({ name, image, description }) => (
    <div>
        <h2>{name}</h2>
        <img src={image} alt={name} width={200}/>
        <p>{description}</p>
    </div>
);