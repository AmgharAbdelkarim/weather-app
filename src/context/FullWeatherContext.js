import React, { createContext, useReducer } from 'react';
import { FullWeatherReducer } from '../reducer/fullweatherreducer';

const initialValue = {
  data: null,
};
const FullWeatherContext = createContext();
const DispatchFullWeather = createContext();

const FullWeatherProvider = (props) => {
  const [state, dispatch] = useReducer(FullWeatherReducer, initialValue);

  return (
    <FullWeatherContext.Provider value={state}>
      <DispatchFullWeather.Provider value={dispatch}>
        {props.children}
      </DispatchFullWeather.Provider>
    </FullWeatherContext.Provider>
  );
};

export { FullWeatherProvider, FullWeatherContext, DispatchFullWeather };
