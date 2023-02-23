import PropTypes from 'prop-types';

import { useLocation, Link } from 'react-router-dom';

import styles from './MovieList.module.css';

const MovieList = ({ results }) => {
  const location = useLocation();
  const elements = results.map(({ id, title }) => (
    <Link
      className={styles.link}
      key={id}
      to={`/movies/${id}`}
      state={{ from: location }}
    >
      <li className={styles.item}>
        <p>{title}</p>
      </li>
    </Link>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default MovieList;

MovieList.defaultProps = {
  results: [],
};

MovieList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
