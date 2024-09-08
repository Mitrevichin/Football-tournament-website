import { Link } from 'react-router-dom';
import Country from './Country';
import styles from './GroupResult.module.css';

function GroupResult({ teamA, teamB, teamAFlag, teamBFlag }) {
  return (
    <Link to='match-details' style={{ textDecoration: 'none', color: 'black' }}>
      <section className={styles.groupResult}>
        <div className={styles.container}>
          <Country imgUrl={teamAFlag}>{teamA}</Country>
          <div>
            <span className={styles.result}>5:1</span>
            <span className={styles.date}>Jun 14</span>
          </div>
          <Country imgUrl={teamBFlag}>{teamB}</Country>
        </div>
      </section>
    </Link>
  );
}

export default GroupResult;
