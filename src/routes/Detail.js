import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import MovieItem from "../components/MovieItem";
import styles from "./Detail.module.css";

function Detail(){
    const {id} = useParams();
    const [loading, SetLoading] = useState(true);
    const [movie, setMovieInfo] = useState();
    const detailUri = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    
    const getMovie = async() =>{
        const json = await(
            await fetch(detailUri)).json();

        setMovieInfo(json.data.movie);
        SetLoading(false);
    }
    useEffect(() =>{
        getMovie();
        
    }, []);

    console.log(id);
    console.log(movie);

    return (
        <div className={styles.container}>
        {loading ? <strong className={styles.loader}>Loading....</strong> : 
            <div className={styles.movies}>
                <MovieItem key={movie.id}
                    id={movie.id}
                    coverImage={movie.medium_cover_image} 
                    title={movie.title}
                    year={movie.year}
                    summary={movie.description_full}
                    showSummaryAll={true}
                    genres={movie.genres}>
                </MovieItem>
            </div>
        }
        </div>
    )
}

export default Detail;