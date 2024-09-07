import GroupResult from './GroupResult';
import styles from './GroupStageBox.module.css';

function GroupStageBox() {
  return (
    <div className={styles.container}>
      <h2>Group A</h2>
      <section className={styles.box}>
        <GroupResult
          teamA='Germany'
          teamB='Scotland'
          teamAFlag='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
          teamBFlag='https://t4.ftcdn.net/jpg/00/96/91/67/360_F_96916794_4rmn1W92aCqyPF9s9575zCFNyYBqzDLu.jpg'
        />
        <GroupResult
          teamA='Hungary '
          teamB='Switzerland'
          teamAFlag='https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg'
          teamBFlag='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7d9K-YEH9mErUvSV0UAISu25NVUiLbUd_Q&s'
        />
        <GroupResult
          teamA='Germany'
          teamB='Hungary'
          teamAFlag='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
          teamBFlag='https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg'
        />
        <GroupResult
          teamA='Scotland '
          teamB='Switzerland'
          teamAFlag='https://t4.ftcdn.net/jpg/00/96/91/67/360_F_96916794_4rmn1W92aCqyPF9s9575zCFNyYBqzDLu.jpg'
          teamBFlag='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7d9K-YEH9mErUvSV0UAISu25NVUiLbUd_Q&s'
        />
        <GroupResult
          teamA='Switzerland'
          teamB='Germany'
          teamAFlag='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7d9K-YEH9mErUvSV0UAISu25NVUiLbUd_Q&s'
          teamBFlag='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
        />
        <GroupResult
          teamA='Scotland'
          teamB='Hungary'
          teamAFlag='https://t4.ftcdn.net/jpg/00/96/91/67/360_F_96916794_4rmn1W92aCqyPF9s9575zCFNyYBqzDLu.jpg'
          teamBFlag='https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg'
        />
      </section>
    </div>
  );
}

export default GroupStageBox;
