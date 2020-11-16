
const initialState = {
  hourly: [],
  daily: [],
  Current: [],
};

export const FullWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get':
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
