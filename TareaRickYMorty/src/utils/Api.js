import axios from "axios"; //libreria para la conexión con API'S

const baseUrl = "https://rickandmortyapi.com/api/character";

// const baseUrl = process.env.REACT_APP_URL; //Datos obtenidos desde .env *OJO* VITAL crear la variable de entorno para que pueda funcionar esta parte, de lo contrario usar #3
// const key = process.env.REACT_APP_KEY;

const Api ={ //Promesas?
    getWeather: async(ciudad)=>{
        const url = baseUrl + "/?name=" + ciudad;

        return await axios.get(url);
    },
};

export default Api;