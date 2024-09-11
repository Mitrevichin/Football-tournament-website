import { HashLink as Link } from 'react-router-hash-link';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link smooth to='#groupA'>
            Group results
          </Link>
        </li>
        <li>
          <Link smooth to='#finals'>
            Finals results
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
