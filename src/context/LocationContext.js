import React, { createContext, useReducer } from 'react';
import reducer from '../reducer/LocationReducer';
const initialValue = {
  lon: '',
  lat: '',
  city: '',
};
const locationContext = createContext();
const dispatchLocation = createContext();

const LocationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <locationContext.Provider value={state}>
      <dispatchLocation.Provider value={dispatch}>
        {props.children}
      </dispatchLocation.Provider>
    </locationContext.Provider>
  );
};

export { LocationProvider, locationContext, dispatchLocation };
