

const getCurrentLocation = (cb, dispatch) =>
  navigator.geolocation.getCurrentPosition(
    (s) => {
      var crd = s.coords;
      cb(dispatch, crd.latitude, crd.longitude);
    },
    () => {},
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );

export default getCurrentLocation;
