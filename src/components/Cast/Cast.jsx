import { useEffect, useState } from 'react';
import { fetchCredits } from 'shared/services/fetch-api';
import { useParams, Link } from 'react-router-dom';
import styles from './Cast.module.css';
const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchCredits(movieId);
        setMovieCast(cast);
      } catch ({ response }) {
        setError(true);
        console.log(response.data.message);
      }
    };
    fetchCast(movieId);
  }, [movieId]);
  return (
    <>
      <Link className={styles.link}>
        {movieCast.slice(0, 12).map(actor => (
          <li className={styles.item} key={actor.cast_id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : `https://via.placeholder.com/200`
              }
              alt={`${actor.name}`}
            />
            <div className={styles.div}>
              <p>{actor.name}</p>
              <p>
                Character:
                <span>{actor.character}</span>
              </p>
            </div>
          </li>
        ))}
      </Link>
    </>
  );
};

export default MovieCast;
