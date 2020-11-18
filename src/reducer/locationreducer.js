const LocationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CREDENTIAL_SUCCESS':
      return {
        ...state,
        ...action.payload,
        errorMessage: null
      };
    case 'GET_CREDENTIAL_FAILED':
      return {
        ...state,
        errorMessage: 'Something Wrong'
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default LocationReducer;
