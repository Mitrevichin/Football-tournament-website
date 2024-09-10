import styles from './Country.module.css';

function Country({ children, imgUrl }) {
  return (
    <div className={styles.country}>
      <img src={imgUrl} alt='National flag' />
      <p>{children}</p>
    </div>
  );
}

export default Country;
