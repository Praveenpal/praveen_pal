import { useEffect, useState } from "react"
import { fetchAllMovies } from "../Services/API";

import * as React from 'react';


const MovieList = () => {
    const [movieList, setMovieList] = useState({});
    const [searchValue, setSearchValue] = useState("t")

    useEffect(() => {
        getAllMovies()
    }, [])

    const getAllMovies = async () => {
        const allMovies = await fetchAllMovies(searchValue)
        setMovieList(allMovies)
    }

    const handleSubmit = async (e) => {
        const allMovies = await fetchAllMovies(searchValue)
        setMovieList(allMovies)
    }


    return (
        <>
            <h1>Movie List</h1>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
            <button onClick={handleSubmit}> Search</button>
            <br />
               <div> Name:- {movieList.Title}</div>
               <div>Year:- {movieList.Year}</div>
               <div>Genre:- {movieList.Genre}</div>
        </>
    )
}

export default MovieList