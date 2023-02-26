import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchReviews } from 'shared/services/fetch-api';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';
import styles from './MovieRewiers.module.css';

const MovieRewiewers = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const { results } = await fetchReviews(movieId);
        setReviews(results);
      } catch ({ response }) {
        setError(true);
        console.log(response.data.message);
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId]);
  return (
    <>
      <Link className={styles.link}>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <div>
              <h2 className={styles.name}>{author}</h2>
              <p>{content}</p>
            </div>
          </li>
        ))}
      </Link>
    </>
  );
};
MovieRewiewers.defaultProps = [];

MovieRewiewers.propTypes = {
  id: PropTypes.number,
  autor: PropTypes.string,
  content: PropTypes.string,
};
export default MovieRewiewers;
