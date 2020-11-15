const LocationReducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return {
        ...state,
        lon: action.payload.long,
        lat: action.payload.lat,
        city: action.payload.city
          .split(',')
          .splice(0)
          .join('')
          .split(' ')
          .splice(1)
          .join(', '),
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default LocationReducer;
