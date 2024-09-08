import { Children } from 'react';
import styles from './BracketItem.module.css';

function BracketItem({
  flagAUrl,
  flagBUrl,
  teamA,
  teamB,
  teamAScore,
  teamBScore,
}) {
  return (
    <li className={styles.semiLi}>
      <div className={styles.liDiv}>
        <div>
          <span className={styles.flag}>
            <img src={flagAUrl} alt='Flag' />
          </span>
          <span>{teamA}</span>
          <span className={styles.lastChild}>{teamAScore}</span>
        </div>
        <div>
          <span className={styles.flag}>
            <img src={flagBUrl} alt='Flag' />
          </span>
          <span>{teamB}</span>
          <span>{teamBScore}</span>
        </div>
      </div>
    </li>
  );
}

export default BracketItem;
