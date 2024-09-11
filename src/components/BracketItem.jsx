import { Link } from 'react-router-dom';
import styles from './BracketItem.module.css';
import { isValidDate } from '../utils/isValidDate';

function BracketItem({
  matchID,
  flagAUrl,
  flagBUrl,
  teamA,
  teamB,
  teamAScore,
  teamBScore,
  date,
}) {
  function formatScore(score) {
    const openParenIndex = score.indexOf('(');

    if (openParenIndex === -1) {
      return score;
    }
    const mainScore = score.slice(0, openParenIndex);
    const additionalScore = score.slice(openParenIndex);

    return `${mainScore} ${additionalScore}`;
  }

  function penaltyScore(score) {
    const match = score.match(/\((\d+)\)/);
    return match ? parseInt(match[1], 10) : null;
  }

  const teamAPenaltyScore = penaltyScore(teamAScore);
  const teamBPenaltyScore = penaltyScore(teamBScore);

  const dateFormat = isValidDate(date);
  const isDateValid = dateFormat !== 'Invalid Date Format';

  return (
    <li className={styles.semiLi}>
      <Link
        to={`/match-details/${matchID}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div className={styles.liDiv}>
          <span className={styles.text}>
            {teamAScore.length > 2 || teamBScore.length > 2
              ? teamAPenaltyScore > teamBPenaltyScore
                ? `${teamA} wins on penalties`
                : `${teamB} wins on penalties`
              : ''}
          </span>
          <div className={styles.rowTeam}>
            <span className={styles.flag}>
              <img src={flagAUrl} alt='Flag' />
            </span>
            <span className={styles.teamName}>{teamA}</span>
            <span className={`${styles.lastChild} ${styles.score}`}>
              {formatScore(teamAScore)}
            </span>
          </div>
          <time className={styles.date}>
            {isDateValid ? (
              date
            ) : (
              <span className={styles.error}>Invalid Date</span>
            )}
          </time>
          <div>
            <span className={styles.flag}>
              <img src={flagBUrl} alt='Flag' />
            </span>
            <span className={styles.teamName}>{teamB}</span>
            <span className={styles.score}>{formatScore(teamBScore)}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default BracketItem;
