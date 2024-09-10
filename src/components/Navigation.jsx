import { Link } from 'react-router-dom';
import Logo from './Logo';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <Link to='/'>Homepage</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
