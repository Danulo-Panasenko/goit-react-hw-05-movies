import styles from './NavMenu.module.css';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav className={styles.navlink}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};
export default NavMenu;
