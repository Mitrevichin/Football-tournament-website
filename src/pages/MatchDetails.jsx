import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import styles from './MatchDetails.module.css';

function MatchDetails() {
  const navigate = useNavigate();

  return (
    <main className={styles.matchMain}>
      <Navigation />
      <div className={styles.result}>
        <span>Spain &nbsp; 2</span>
        <span>:</span>
        <span>0 &nbsp; Germany</span>
      </div>
      <section className={styles.pitchContainer}>
        <div className={styles.pitch}></div>
        <div className={styles.pitch}></div>
      </section>
      <button className={styles.btnBack} onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </main>
  );
}

export default MatchDetails;
