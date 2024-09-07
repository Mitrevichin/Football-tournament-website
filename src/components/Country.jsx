import styles from './Country.module.css';

function Country({ children, img }) {
  return (
    <div className={styles.country}>
      <img src={img} alt='National flag' />
      <p>{children}</p>
    </div>
  );
}

export default Country;
