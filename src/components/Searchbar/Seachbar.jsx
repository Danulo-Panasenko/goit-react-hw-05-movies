import { useState } from 'react';
import styles from './Seachbar.module.css';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import initialState from './initialState';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state.search);
    setState({ ...initialState });
  };

  const { query } = state;
  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.label}>Search</span>
          <ImSearch />
        </button>

        <input
          name="search"
          value={query}
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
