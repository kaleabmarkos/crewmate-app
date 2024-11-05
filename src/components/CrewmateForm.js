// src/components/CrewmateForm.js
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const CrewmateForm = ({ fetchCrewmates }) => {
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('crewmates')
            .insert([{ name, speed, color }]);

        if (error) {
            console.error('Error creating crewmate:', error);
        } else {
            console.log('Crewmate created:', data);
            fetchCrewmates(); // Call fetchCrewmates to update the gallery
            setName('');
            setSpeed('');
            setColor('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Crewmate Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Speed (mph)"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                required
            />
            <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
            >
                <option value="">Select Color</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Purple">Purple</option>
                <option value="Pink">Pink</option>
            </select>
            <button type="submit">Create Crewmate</button>
        </form>
    );
};

export default CrewmateForm;
