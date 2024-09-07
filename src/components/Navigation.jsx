import { Link } from 'react-router-dom';
import Logo from './Logo';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <Link to='/match-details'>Match Details</Link>
        </li>
        <li>
          <Link to='/team-details'>Team Details</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
