export const FullWeatherReducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return {
        ...state,
        data: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
