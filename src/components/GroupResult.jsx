import Country from './Country';
import styles from './GroupResult.module.css';

function GroupResult() {
  return (
    <section className={styles.groupResult}>
      <h2>Group A</h2>
      <div className={styles.container}>
        <Country img='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'>
          Germany
        </Country>
        <div>
          <span className={styles.result}>5:1</span>
          <span className={styles.date}>Jun 14</span>
        </div>
        <Country img='https://t4.ftcdn.net/jpg/00/96/91/67/360_F_96916794_4rmn1W92aCqyPF9s9575zCFNyYBqzDLu.jpg'>
          Scotland
        </Country>
      </div>
    </section>
  );
}

export default GroupResult;
