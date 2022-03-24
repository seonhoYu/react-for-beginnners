import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./MovieItem.module.css";

function MovieItem({id, coverImage, title, year, summary, genres}){
    return (<div key={id} className={styles.movie}>
    <img className={styles.movie__img} src={coverImage} ></img>
    <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
    <h3 className={styles.movie__year}>{year}</h3>
    <p>{summary.length > 256 ? `${summary.slice(0, 256)}...` : summary }</p>
    <ul className={styles.movie__genres}>
      {
        genres.map((genre, genreIdx) => <li key={genreIdx}>{genre}</li>)
      }
    </ul>
  </div>);
}

MovieItem.propTypes ={
  id : PropTypes.number.isRequired,
  coverImage : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieItem;