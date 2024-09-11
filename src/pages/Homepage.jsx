import { useEffect, useState } from 'react';
import { getMatchDetails } from '../utils/getMatchDetails';
import { getMatchDetailsForTheFinals } from '../utils/getMatchDetailsForTheFinals';
import { csvParser } from '../utils/csvParser';
import GroupStageBox from '../components/GroupStageBox';
import styles from './Homepage.module.css';
import FinalsBracketView from '../components/FinalsBracketView';
import Header from '../components/Header';
import Loader from '../components/Loader';

function Homepage() {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Matches
        const matchesResponse = await fetch('/matches.csv');
        if (!matchesResponse.ok) {
          throw new Error('Failed to fetch matches');
        }
        const matchesData = await matchesResponse.text();
        const parsedMatches = csvParser(matchesData);
        setMatches(parsedMatches);

        // Teams
        const teamsResponse = await fetch('/teams.csv');
        if (!teamsResponse.ok) {
          throw new Error('Failed to fetch teams');
        }
        const teamsData = await teamsResponse.text();
        const parsedTeams = csvParser(teamsData);
        setTeams(parsedTeams);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  const groups = ['A', 'B', 'C', 'D', 'E', 'F'];

  const matchesWithDetails = getMatchDetails(matches, teams);
  const matchesWithDetailsForTheFinals = getMatchDetailsForTheFinals(
    matches,
    teams
  );

  return (
    <>
      {loading && <Loader />}
      <Header />
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
    </>
  );
}

export default Homepage;
