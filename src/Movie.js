import Button from "./Button";
import Styles from "./Movie.module.css";
import { useState, useEffect } from "react";

 

function Movie() {
  const [loading, SetLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    fetch(
      `https://yts.mx/api/v2/list_movies.json?mininum_rating=8.5&sort_by=year`
    ).then(respose => respose.json())
    .then(json => {
      setMovies(json.data.movies);
      SetLoading(false);
      
    });
    
  }, []);

  console.log(movies);

  return (
    <div>
      <h1>Movie List ({movies.length})</h1>
      {loading ? <strong>Loading....</strong> : 
        <div>
          <ul>
            {
              movies.map((movie, idx) => <li key={idx}>{movie.title}</li>)
            }
          </ul>
        </div>
      }
    </div>
  );
}

export default Movie;
