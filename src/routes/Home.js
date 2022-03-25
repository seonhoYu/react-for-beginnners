import { useState, useEffect } from "react";
import MovieItem from "../components/MovieItem";
import styles from "./Home.module.css";

function Home(){
    const apiUri = `https://yts.mx/api/v2/list_movies.json?mininum_rating=9.5&sort_by=year`;
    const [loading, SetLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() =>{
        const json = await (
        await fetch(apiUri)).json();

        setMovies(json.data.movies);
        SetLoading(false);
    }

    useEffect(() =>{
        getMovies();
    }, []);

    return (
        <div className={styles.container}>
        {loading ? <strong className={styles.loader}>Loading....</strong> : 
            <div className={styles.movies}>
                {
                movies.map((movie, idx) => <MovieItem key={idx}
                                                id={movie.id}
                                                coverImage={movie.medium_cover_image} 
                                                title={movie.title}
                                                year={movie.year}
                                                summary={movie.summary}
                                                showSummaryAll={false}
                                                genres={movie.genres}>
                                            </MovieItem>)
                }
            </div>
        }
        </div>
    );
}

export default Home;