import { Link } from 'react-router-dom';
import Country from './Country';
import styles from './GroupResult.module.css';

function GroupResult({
  matchID,
  teamA,
  teamB,
  date,
  score,
  teamAFlag,
  teamBFlag,
}) {
  return (
    <Link
      to={`/match-details/${matchID}`}
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <section className={styles.groupResult}>
        <div className={styles.container}>
          <Country imgUrl={teamAFlag}>{teamA}</Country>
          <div>
            <span className={styles.result}>{score}</span>
            <span className={styles.date}>{date}</span>
          </div>
          <Country imgUrl={teamBFlag}>{teamB}</Country>
        </div>
      </section>
    </Link>
  );
}

export default GroupResult;
