import { useEffect, useState } from 'react';
import { getMatchDetails } from '../utils/getMatchDetails';
import { getMatchDetailsForTheFinals } from '../utils/getMatchDetailsForTheFinals';
import { csvParser } from '../utils/csvParser';
import GroupStageBox from '../components/GroupStageBox';
import styles from './Homepage.module.css';
import FinalsBracketView from '../components/FinalsBracketView';

function Homepage() {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Matches
    fetch('/matches.csv')
      .then(response => response.text())
      .then(data => {
        const parsedMatches = csvParser(data);
        setMatches(parsedMatches);
      })
      .catch(error => console.error('Error fetching matches:', error));

    //  Teams
    fetch('/teams.csv')
      .then(response => response.text())
      .then(data => {
        const parsedTeams = csvParser(data);
        setTeams(parsedTeams);
      })
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  const groups = ['A', 'B', 'C', 'D', 'E', 'F'];

  const matchesWithDetails = getMatchDetails(matches, teams);
  const matchesWithDetailsForTheFinals = getMatchDetailsForTheFinals(
    matches,
    teams
  );

  console.log('Matches with details: ', matchesWithDetails);
  // console.log('Matches: ', matches);
  // console.log('Teams: ', teams);

  return (
    <main className={styles.home}>
      {groups.map(group => (
        <GroupStageBox
          key={group}
          group={group}
          matches={matches}
          teams={teams}
          matchesWithDetails={matchesWithDetails}
        />
      ))}
      <FinalsBracketView
        matchesWithDetailsForTheFinals={matchesWithDetailsForTheFinals}
      />
    </main>
  );
}

export default Homepage;
