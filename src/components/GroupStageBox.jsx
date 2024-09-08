import GroupResult from './GroupResult';
import styles from './GroupStageBox.module.css';

function GroupStageBox({ matches, teams, group, matchesWithDetails }) {
  // console.log('Matches:', matches);
  // console.log('Teams:', teams);
  // console.log('Group:', group);
  console.log('Matches with details:', matchesWithDetails);

  function isGroupMatch(match) {
    const month = Number(match.Date.split('/')[0]);
    const day = Number(match.Date.split('/')[1]);
    return month === 6 && day <= 26;
  }

  // Filtering matches per group
  const filteredMatchesForEachGroup = matchesWithDetails.filter(match => {
    const teamAGroup = match.teamA ? match.teamA.Group : null;
    const teamBGroup = match.teamB ? match.teamB.Group : null;

    return (
      (teamAGroup === group || teamBGroup === group) && isGroupMatch(match)
    );
  });

  return (
    <div className={styles.container}>
      <h2>Group {group}</h2>
      <section className={styles.box}>
        {filteredMatchesForEachGroup.map(match => {
          const formattedScore = match.Score.slice(1);

          return (
            <GroupResult
              key={match.ID}
              teamA={match.teamA.Name}
              teamB={match.teamB.Name}
              date={match.Date}
              score={formattedScore}
              teamAFlag={match.teamA.Flag}
              teamBFlag={match.teamB.Flag}
            />
          );
        })}
      </section>
    </div>
  );
}

export default GroupStageBox;
