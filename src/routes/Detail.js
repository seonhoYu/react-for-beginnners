import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import style from "./Detail.module.css";

function Detail(){
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState();
    const detailUri = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const getMovie = async() =>{
        const json = await(
            await fetch(detailUri)).json();

        setMovieInfo(json);
    }
    useEffect(() =>{
        getMovie();
    }, []);

    console.log(id);

    return <div>Detail</div>
}

export default Detail;