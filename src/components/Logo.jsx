import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  const handleClick = () => {
    console.log('Logo clicked!');
  };

  return (
    <Link to='/' onClick={handleClick}>
      <img src='/logo.png' alt='Euro 2024 Logo' className={styles.logo} />
    </Link>
  );
}

export default Logo;
