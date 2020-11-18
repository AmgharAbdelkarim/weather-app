import axios from 'axios';

export const getFullWeather = async (dispatch, lat, lon) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=a5a7de9f182eacf80fdab5f94e90ebbe`;

        const { data } = await axios.get(url);

        const { hourly, daily, current } = data;
        
        const dailyWeather = daily.map(day => ({
            date: day.dt,
            icon: day.weather[0].icon,
            temp: day.temp.day,
            humidity: day.humidity,
        }));

        const hourlyWeather = hourly.map(day => ({
            date: day.dt,
            icon: day.weather[0].icon,
            temp: day.temp,
            humidity: day.humidity,
        }));

        const { temp, pressure, sunrise : sunRise, humidity, wind_speed : windSpeed, sunset : sunSet } = current;

        const currentWeather = {
            feelsLike: current.feels_like,
            description: current.weather[0].description,
            weatherIcon: current.weather[0].icon,
            ...{ temp, pressure,  sunRise, humidity,  windSpeed, sunSet }
        }
        return (
            dispatch({
                type: "GET_FULL_WEATHER_SUCCESS",
                payload: { dailyWeather, hourlyWeather, currentWeather  }
            })
        )
    }
    catch {
        return (
            dispatch({
                type: "GET_FULL_WEATHER_FAILED",
                payload : "Something Wrong"
            })
        )
    }
    

};


export const getCityFromLatAndLon = async (dispatch, latitude, Long) => {
    try {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${Long}&key=c5cd22f2a20d4389ae5fb739fc21a1f0`;

        const { data } = await axios.get(url);

        const { lng  : lon, lat } = data.results[0].geometry;
        const city = data.results[0].formatted.split(',')
        .splice(0)
        .join('')
        .split(' ')
        .splice(1)
        .join(', ');

        return (
            dispatch({
                type: "GET_CREDENTIAL_SUCCESS",
                payload: {
                    lon,  lat, city
                        
                }
            })
        )
    }
    catch {
        return (
            dispatch({
                type: "GET_CREDENTIAL_FAILED"
            })
        )
    }
    

};
export const getLatAndLonFromCity = async (dispatch, searchedCity) => {
    try {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchedCity}&key=c5cd22f2a20d4389ae5fb739fc21a1f0`;

        const { data } = await axios.get(url);
        const { lng: lon, lat } = data.results[0].geometry;
        
        const city = data.results[0].components.city + ", " + data.results[0].components["ISO_3166-1_alpha-2"];
        return (
            dispatch({
                type: "GET_CREDENTIAL_SUCCESS",
                payload: {
                    lon,  lat, city
                }
            })
        )
    }
    catch {
        return (
            dispatch({
                type: "GET_CREDENTIAL_FAILED"
            })
        );
    }
    

};