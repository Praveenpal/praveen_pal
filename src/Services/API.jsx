import axios from "axios";

export const fetchAllMovies = async (searchValue="ti") => {
    const url=`http://www.omdbapi.com/?t=${searchValue}&apikey=17bd1c84`
    const movies = await axios.get(url)
    const moviesData = await movies.data
    return moviesData
}