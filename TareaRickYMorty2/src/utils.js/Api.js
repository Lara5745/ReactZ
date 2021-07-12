import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/character";

const Api ={
    getMovies: async(title)=>{
        const url= baseUrl + "/?name=" +title;
        return await axios.get(url);
    },
    getMoviesDetail: async(id)=>{
        const url= baseUrl+ "/" +id;
        return await axios.get(url);
    }
};

export default Api;