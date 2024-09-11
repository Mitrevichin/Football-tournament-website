import { Link } from 'react-router-dom';
import { isValidDate } from '../utils/isValidDate';
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
  const dateFormat = isValidDate(date);
  const isDateValid = dateFormat !== 'Invalid Date Format';

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
            <time className={styles.date}>
              {isDateValid ? (
                date
              ) : (
                <span className={styles.error}>Invalid Date</span>
              )}
            </time>
          </div>
          <Country imgUrl={teamBFlag}>{teamB}</Country>
        </div>
      </section>
    </Link>
  );
}

export default GroupResult;
