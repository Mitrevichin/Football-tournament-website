import { useEffect, useState } from 'react';
import { getMatchDetails } from '../utils/getMatchDetails';
import GroupStageBox from '../components/GroupStageBox';
import Navigation from '../components/Navigation';
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

  function csvParser(csvDoc) {
    const [headerLine, ...rows] = csvDoc.split('\n'); // Split into header and rows
    const headers = headerLine.split(','); // Split header into columns

    return rows.map(row => {
      const values = row.split(','); // Split row into values
      const obj = {}; // Create an empty object

      for (let i = 0; i < headers.length; i++) {
        const value = values[i] ? values[i].trim() : ''; // Check if value exists, else assign empty string
        obj[headers[i].trim()] = value; // Assign key-value pairs
      }

      return obj;
    });
  }

  const groups = ['A', 'B', 'C', 'D', 'E', 'F'];

  const matchesWithDetails = getMatchDetails(matches, teams);

  return (
    <main className={styles.home}>
      <Navigation />
      {groups.map(group => (
        <GroupStageBox
          key={group}
          group={group}
          // matches={matchesWithDetails.filter(match => match.Group === group)}
          matches={matches}
          teams={teams}
          matchesWithDetails={matchesWithDetails}
        />
      ))}
      <FinalsBracketView />
    </main>
  );
}

export default Homepage;
