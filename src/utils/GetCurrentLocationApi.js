import axios from 'axios';

const getCurrentLocation = (getLocation, dispatch3) =>
  navigator.geolocation.getCurrentPosition(
    (s) => {
      var crd = s.coords;
      getLocation(dispatch3, crd.latitude, crd.longitude);
    },
    () => {
      axios
        .get('http://ip-api.com/json')
        .then((r) => getLocation(dispatch3, r.data.lat, r.data.lon));
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );

export default getCurrentLocation;
