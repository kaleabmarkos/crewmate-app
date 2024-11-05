// src/components/App.js
import React from 'react';
import CrewmateForm from './components/CrewmateForm';
import CrewmateGallery from './components/CrewmateGallery';
import './App.css'
import { useState, useEffect } from 'react';
import { supabase } from '../src/supabaseClient'; 




const App = () => {
  const [crewmates, setCrewmates] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  const fetchCrewmates = async () => {
      setLoading(true); // Set loading to true
      const { data, error } = await supabase.from('crewmates').select();
      setLoading(false); // Set loading to false
      if (error) {
          console.error('Error fetching crewmates:', error);
      } else {
          console.log('Fetched Crewmates:', data); // Log fetched data
          setCrewmates(data); // Update state with fetched crewmates
      }
  };

  useEffect(() => {
      fetchCrewmates(); // Fetch crewmates on component mount
  }, []);

  return (
      <div>
          <h1>Welcome to the Crewmate Creator!</h1>
          <CrewmateForm fetchCrewmates={fetchCrewmates} />
          {loading ? (
              <p>Loading...</p>
          ) : (
              <CrewmateGallery crewmates={crewmates} />
          )}
      </div>
  );
};

export default App;