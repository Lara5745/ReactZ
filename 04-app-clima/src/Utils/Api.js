import axios from "axios"; //libreria para la conexión con API'S

// const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q="; //Api Open weather map
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&q=";
const key = "140080a36026c48bf2db6a73046d8406";

const Api ={ //Promesas?
    getWeather: async(ciudad)=>{
        const url = baseUrl + ciudad + "&appid="+key;

        return await axios.get(url);
    },
};

export default Api;