import axios from 'axios';





export const getWeather = async(dispatch,city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a5a7de9f182eacf80fdab5f94e90ebbe`;
        const res = await axios.get(url);
        return (
            dispatch({
                type: "get",
                payload: res.data
            })
        );
    }
    catch {
        return(
            dispatch({
                type: "error"
            })
        );
    }
    

}

export const getFullWeather = async(dispatch,lat,lon)=>{
    try {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=a5a7de9f182eacf80fdab5f94e90ebbe`;
        const res = await axios.get(url);
        return (
            dispatch({
                type:"get",
                payload : res.data
            })
        )
    }
    catch {
        return (
            dispatch({
                type:"error"
            })
        )
    }
    

}


export const getLocation = async(dispatch,lat,lon)=>{
    try {
        const url =`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=c5cd22f2a20d4389ae5fb739fc21a1f0`
        const res  = await axios.get(url)
        return (
            dispatch({
                type:"get",
                payload : {long : res.data.results[0].geometry.lng ,lat : res.data.results[0].geometry.lat , city :res.data.results[0].formatted  }
            })
        )
    }
    catch {
        return (
            dispatch({
                type:"error"
            })
        )
    }
    

}
export const getLocationPlace = async(dispatch,city)=>{
    try {
        const url =`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=c5cd22f2a20d4389ae5fb739fc21a1f0`
        const res  = await axios.get(url)
        return (
            dispatch({
                type:"get",
                payload : {long : res.data.results[0].geometry.lng ,lat : res.data.results[0].geometry.lat , city :res.data.results[0].formatted  }
            })
        )
    }
    catch {
        return (
            dispatch({
                type:"error"
            })
        )
    }
    

}