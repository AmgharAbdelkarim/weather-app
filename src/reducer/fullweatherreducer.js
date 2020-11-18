
const initialState = {
  dailyWeather: [],
  hourlyWeather: [],
  currentWeather: [],
  errorMessage : null,
  isLoading: true,
};

export const FullWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FULL_WEATHER_SUCCESS':
      return {
        ...state,
        ...action.payload,
        errorMessage: null,
        isLoading: false,
      };
      case 'GET_FULL_WEATHER_FAILED':
        return {
          ...state,
          errorMessage: action.payload,
          isLoading: true,
        };
    default: {
      return {
        ...state,
      };
    }
  }
};
