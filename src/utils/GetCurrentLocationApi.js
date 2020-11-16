import axios from 'axios';

const getCurrentLocation = (cb, dispatch) =>
  navigator.geolocation.getCurrentPosition(
    (s) => {
      var crd = s.coords;
      cb(dispatch, crd.latitude, crd.longitude);
    },
    () => {
      axios
        .get('http://ip-api.com/json')
        .then((r) => cb(dispatch, r.data.lat, r.data.lon));
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );

export default getCurrentLocation;
