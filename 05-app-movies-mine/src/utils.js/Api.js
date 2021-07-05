import axios from "axios";

const key = "a4a947a3";
const baseUrl = "http://www.omdbapi.com/?apikey=" + key;

const Api ={
    getMovies: async(title)=>{
        const url= baseUrl+"&s="+title;
        return await axios.get(url);
    },
    getMoviesDetail: async(id)=>{
        const url= baseUrl+"&i="+id;
        return await axios.get(url);
    }
};

export default Api;