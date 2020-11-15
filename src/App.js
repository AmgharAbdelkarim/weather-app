import React from 'react';
import Home from './Containers/HomePage';
import { LocationProvider } from './context/LocationContext';
import { FullWeatherProvider } from './context/FullWeatherContext';

const App = () => {
  return (
    <FullWeatherProvider>
      <LocationProvider>
        <Home />
      </LocationProvider>
    </FullWeatherProvider>
  );
};

export default App;
