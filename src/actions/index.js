import axios from 'axios';

export const getWeather = async (dispatch, city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a5a7de9f182eacf80fdab5f94e90ebbe`;

        const { data } = await axios.get(url);
        
        const { hourly, daily, current } = data;


        return (
            dispatch({
                type: "get",
                payload: { hourly, daily, current }
            })
        );
    }
    catch {
        return (
            dispatch({
                type: "error"
            })
        );
    }
    

};

export const getFullWeather = async (dispatch, lat, lon) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=a5a7de9f182eacf80fdab5f94e90ebbe`;

        const { data } = await axios.get(url);

        const { hourly, daily, current } = data;

        return (
            dispatch({
                type: "get",
                payload: { hourly, daily, current }
            })
        )
    }
    catch {
        return (
            dispatch({
                type: "error"
            })
        )
    }
    

};


export const getLocation = async (dispatch, lati, lon) => {
    try {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${lati}+${lon}&key=c5cd22f2a20d4389ae5fb739fc21a1f0`;

        const { data } = await axios.get(url);

        const { lng  : long, lat } = data.results[0].geometry;
        const city = data.results[0].formatted.split(',')
        .splice(0)
        .join('')
        .split(' ')
        .splice(1)
        .join(', ');

        return (
            dispatch({
                type: "get",
                payload: {
                    long,  lat, city
                        
                }
            })
        )
    }
    catch {
        return (
            dispatch({
                type: "error"
            })
        )
    }
    

};
export const getLocationPlace = async (dispatch, searchedCity) => {
    try {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${searchedCity}&key=c5cd22f2a20d4389ae5fb739fc21a1f0`;

        const { data } = await axios.get(url);
        const { lng : long , lat } = data.results[0].geometry;
        const city = data.results[0].formatted.split(',')
        .filter((_, i) => i != 1).join(', ');
        return (
            dispatch({
                type: "get",
                payload: {
                    long,  lat, city
                }
            })
        )
    }
    catch {
        return (
            dispatch({
                type: "error"
            })
        );
    }
    

};