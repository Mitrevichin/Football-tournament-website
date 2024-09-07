import Country from './Country';
import styles from './GroupResult.module.css';

function GroupResult({ teamA, teamB, teamAFlag, teamBFlag }) {
  return (
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
  );
}

export default GroupResult;
