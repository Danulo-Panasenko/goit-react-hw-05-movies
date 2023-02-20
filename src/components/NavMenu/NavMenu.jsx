import styles from './NavMenu.module.css';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  <nav className={styles.navlink}>
    <NavLink className={styles.link} to="/">
      Home
    </NavLink>
    <NavLink className={styles.link} to="/about">
      Movies
    </NavLink>
  </nav>;
};
export default NavMenu;
