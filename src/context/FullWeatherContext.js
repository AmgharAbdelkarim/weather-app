import React, { createContext, useReducer } from 'react';
import { FullWeatherReducer } from '../reducer/FullWeatherReducer';

const initialState = {
  dailyWeather: [],
  hourlyWeather: [],
  currentWeather: [],
  errorMessage: null,
  isLoading: true,
}

const FullWeatherContext = createContext();
const DispatchFullWeather = createContext();

const FullWeatherProvider = (props) => {
  const [state, dispatch] = useReducer(FullWeatherReducer, initialState);

  return (
    <FullWeatherContext.Provider value={state}>
      <DispatchFullWeather.Provider value={dispatch}>
        {props.children}
      </DispatchFullWeather.Provider>
    </FullWeatherContext.Provider>
  );
};

export { FullWeatherProvider, FullWeatherContext, DispatchFullWeather };
