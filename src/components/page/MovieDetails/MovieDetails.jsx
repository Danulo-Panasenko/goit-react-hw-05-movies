import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Outlet,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { fetchMovieById } from 'shared/services/fetch-api';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState();
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const result = await fetchMovieById(movieId);
        setMovieInfo(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);
  const goBack = () => navigate(from);
  return (
    <main className={styles.main}>
      <button className={styles.button} onClick={goBack}>
        Go back
      </button>
      {movieInfo && (
        <div className={styles.div}>
          <img
            className={styles.img}
            src={
              movieInfo.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`
                : 'https://via.placeholder.com/200'
            }
            alt={movieInfo.tagline}
          />
          <div className={styles.divinfo}>
            <h1 className={styles.name}>
              <span>{movieInfo.title}</span>
              <span>{`(${movieInfo.release_date.slice(0, 4)})`}</span>
            </h1>
            <p className={styles.p}>
              Popularity: {Math.ceil(movieInfo.popularity)}
            </p>
            <p className={styles.pp}>
              <span className={styles.span}>Overview</span>
              {movieInfo.overview}
            </p>
            <p className={styles.ppp}>
              <span className={styles.sspan}>Genre:</span>
              <span>
                {movieInfo.genres &&
                  movieInfo.genres.map(genre => genre.name).join(', ')}
              </span>
            </p>
          </div>
        </div>
      )}
      <div className={styles.dddd}>
        <NavLink className={styles.NavLink} to="cast" state={{ from }}>
          Cast
        </NavLink>
        <NavLink className={styles.NavLink} to="reviews" state={{ from }}>
          Reviews
        </NavLink>
      </div>

      <Outlet />
    </main>
  );
};

export default MovieDetails;
