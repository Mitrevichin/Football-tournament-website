import { Link } from 'react-router-dom';
import styles from './BracketItem.module.css';

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
    console.log('additionalScore', additionalScore);
    return `${mainScore} ${additionalScore}`;
  }

  return (
    <li className={styles.semiLi}>
      <Link
        to={`/match-details/${matchID}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div className={styles.liDiv}>
          <span className={styles.text}>
            {teamAScore.length > 2 || teamBScore.length > 2
              ? 'Win on penalties'
              : ''}
          </span>
          <div>
            <span className={styles.flag}>
              <img src={flagAUrl} alt='Flag' />
            </span>
            <span className={styles.teamName}>{teamA}</span>
            <span className={styles.lastChild}>{formatScore(teamAScore)}</span>
          </div>
          <time className={styles.date}>{date}</time>
          <div>
            <span className={styles.flag}>
              <img src={flagBUrl} alt='Flag' />
            </span>
            <span className={styles.teamName}>{teamB}</span>
            <span>{formatScore(teamBScore)}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default BracketItem;
