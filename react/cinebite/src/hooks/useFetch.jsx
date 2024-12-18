
import { useState, useEffect } from "react";
import { options } from "../utils/Options";

const useFetch = (apiPath) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function fetchMovies() {
            
            const response = await fetch(`https://api.themoviedb.org/3/${apiPath}`, options);

            const data = await response.json();

            setData(data.results);

        }

        fetchMovies()

    }, [apiPath]);


    return {data};

}

export default useFetch;