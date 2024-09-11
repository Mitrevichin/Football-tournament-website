import styles from './Header.module.css';
import Navigation from './Navigation';

function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <img src='/trophy.png' alt='' />
      <h1>Uefa Euro 2024</h1>
    </header>
  );
}

export default Header;
