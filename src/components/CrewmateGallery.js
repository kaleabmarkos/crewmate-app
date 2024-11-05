// src/components/CrewmateGallery.js
import React from 'react';

const CrewmateGallery = ({ crewmates }) => {
    return (
        <div>
            <h2>Your Crewmate Gallery</h2>
            {crewmates.length === 0 ? (
                <p>No crewmates found. Create some!</p>
            ) : (
                crewmates.map((crewmate) => (
                    <div key={crewmate.id}>
                        <h3>{crewmate.name}</h3>
                        <p>Speed: {crewmate.speed} mph</p>
                        <p>Color: {crewmate.color}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CrewmateGallery;
