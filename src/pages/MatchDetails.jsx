import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { csvParser } from '../utils/csvParser';
import styles from './MatchDetails.module.css';
import Loader from '../components/Loader';

function MatchDetails() {
  const [match, setMatch] = useState([]);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [players, setPlayers] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { matchID } = useParams();
  const navigate = useNavigate();

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
        const currentMatch = parsedMatches.find(m => m.ID === matchID);
        setMatch(currentMatch);

        // Teams
        const teamsResponse = await fetch('/teams.csv');
        if (!teamsResponse.ok) {
          throw new Error('Failed to fetch teams');
        }
        const teamsData = await teamsResponse.text();
        const parsedTeams = csvParser(teamsData);
        setTeamA(parsedTeams.find(t => t.ID === currentMatch.ATeamID));
        setTeamB(parsedTeams.find(t => t.ID === currentMatch.BTeamID));

        // Players
        const playersResponse = await fetch('/players.csv');
        if (!playersResponse.ok) {
          throw new Error('Failed to fetch players');
        }
        const playersData = await playersResponse.text();
        const parsedPlayers = csvParser(playersData);
        setPlayers(parsedPlayers);

        // Records
        const recordsResponse = await fetch('/records.csv');
        if (!recordsResponse.ok) {
          throw new Error('Failed to fetch records');
        }
        const recordsData = await recordsResponse.text();
        const parsedRecords = csvParser(recordsData);
        setRecords(parsedRecords);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [matchID]);

  if (error) return <div>Error: {error}</div>;

  const teamAResult = match.Score?.split('')[1];
  const teamBResult = match.Score?.split('')[3];

  const getStartingPlayersForTeam = (teamID, matchID) => {
    const teamRecords = records.filter(record => record.MatchID === matchID);

    const startingRecords = teamRecords.filter(
      record => record.fromMinutes === '0'
    );

    const startingPlayers = startingRecords.map(record => {
      return players.find(
        player => player.ID === record.PlayerID && player.TeamID === teamID
      );
    });

    return startingPlayers;
  };

  if (!match || !teamA || !teamB) return <div>Loading...</div>;

  const startingPlayersA = getStartingPlayersForTeam(teamA.ID, matchID);
  const startingPlayersB = getStartingPlayersForTeam(teamB.ID, matchID);

  // Team A
  const goalkeeperA = startingPlayersA.find(
    player => player?.Position === 'GK'
  );
  const defendersA = startingPlayersA.filter(
    player => player?.Position === 'DF'
  );

  const midfieldersA = startingPlayersA.filter(
    player => player?.Position === 'MF'
  );

  const strikersA = startingPlayersA.filter(
    player => player?.Position === 'FW'
  );

  // Team B
  const goalkeeperB = startingPlayersB.find(
    player => player?.Position === 'GK'
  );
  const defendersB = startingPlayersB.filter(
    player => player?.Position === 'DF'
  );

  const midfieldersB = startingPlayersB.filter(
    player => player?.Position === 'MF'
  );

  const strikersB = startingPlayersB.filter(
    player => player?.Position === 'FW'
  );

  function transformFullName(fullName) {
    if (fullName.toLowerCase().includes('captain')) {
      return fullName.replace(/captain/gi, 'C');
    }
    return fullName;
  }

  return (
    <>
      {loading && <Loader />}
      <main className={styles.matchMain}>
        <div className={styles.result}>
          <span>
            {teamA.Name} &nbsp; {teamAResult}
          </span>
          <span>:</span>
          <span>
            {teamBResult} &nbsp; {teamB.Name}
          </span>
        </div>

        <section className={styles.pitchContainer}>
          <div className={styles.pitch}>
            <div className={styles.wholePitch}>
              {/* The first team */}
              <div className={styles.teamAPitch}>
                {/* Goalkeeper */}
                {goalkeeperA && (
                  <div className={`${styles.goalkeeperRow} ${styles.row}`}>
                    <div className={styles.playerView}>
                      <span className={styles.number}>
                        {goalkeeperA.TeamNumber}
                      </span>
                    </div>
                    <span className={styles.name}>
                      {transformFullName(goalkeeperA.FullName)}
                    </span>
                  </div>
                )}

                {/* Defenders */}
                <div className={`${styles.defenderRow} ${styles.row}`}>
                  {defendersA.map((player, index) => (
                    <div
                      key={index}
                      className={`${styles.flexRowWrapper} ${styles.littleFix}`}
                    >
                      <div className={styles.playerView}>
                        <span className={styles.number}>
                          {player.TeamNumber}
                        </span>
                      </div>
                      <span className={styles.name}>
                        {transformFullName(player.FullName)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Midfielders */}
                <div className={`${styles.midRow} ${styles.row}`}>
                  {midfieldersA.map((player, index) => (
                    <div
                      key={index}
                      className={`${styles.flexRowWrapper} ${styles.littleFix}`}
                    >
                      <div className={styles.playerView}>
                        <span className={styles.number}>
                          {player.TeamNumber}
                        </span>
                      </div>
                      <span className={styles.name}>
                        {transformFullName(player.FullName)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Strikers */}
                <div className={`${styles.strikerRow} ${styles.row}`}>
                  {strikersA.map((player, index) => (
                    <div key={index} className={styles.flexRowWrapper}>
                      <div className={styles.playerView}>
                        <span className={styles.number}>
                          {player.TeamNumber}
                        </span>
                      </div>
                      <span className={styles.name}>
                        {transformFullName(player.FullName)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.pitch}>
            <div className={styles.wholePitch}>
              {/* The second team */}
              <div className={styles.teamAPitch}>
                {/* Goalkeeper */}
                {goalkeeperA && (
                  <div className={`${styles.goalkeeperRow} ${styles.row}`}>
                    <div
                      className={`${styles.playerView} ${styles.teamBColor}`}
                    >
                      <span className={styles.number}>
                        {goalkeeperB.TeamNumber}
                      </span>
                    </div>
                    <span className={styles.name}>
                      {transformFullName(goalkeeperB.FullName)}
                    </span>
                  </div>
                )}

                {/* Defenders */}
                <div className={`${styles.defenderRow} ${styles.row}`}>
                  {defendersB.map((player, index) => (
                    <div
                      key={index}
                      className={`${styles.flexRowWrapper} ${styles.littleFix}`}
                    >
                      <div
                        className={`${styles.playerView} ${styles.teamBColor}`}
                      >
                        <span className={styles.number}>
                          {player.TeamNumber}
                        </span>
                      </div>
                      <span className={styles.name}>
                        {transformFullName(player.FullName)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Midfielders */}
                <div className={`${styles.midRow} ${styles.row}`}>
                  {midfieldersB.map((player, index) => (
                    <div
                      key={index}
                      className={`${styles.flexRowWrapper} ${styles.littleFix}`}
                    >
                      <div
                        className={`${styles.playerView} ${styles.teamBColor}`}
                      >
                        <span className={styles.number}>
                          {player.TeamNumber}
                        </span>
                      </div>
                      <span className={styles.name}>
                        {transformFullName(player.FullName)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Strikers */}
                <div className={`${styles.strikerRow} ${styles.row}`}>
                  {strikersB.map((player, index) => (
                    <div key={index} className={styles.flexRowWrapper}>
                      <div
                        className={`${styles.playerView} ${styles.teamBColor}`}
                      >
                        <span className={styles.number}>
                          {player.TeamNumber}
                        </span>
                      </div>
                      <span className={styles.name}>
                        {transformFullName(player.FullName)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.btnDetailsWrapper}>
          <Link to={`/match-details/${matchID}/team-details/${teamA.ID}`}>
            <button className={styles.teamABtn}>
              Team <strong>{teamA.Name}</strong> Details &nbsp; &rarr;
            </button>
          </Link>

          <Link to={`/match-details/${matchID}/team-details/${teamB.ID}`}>
            <button className={styles.teamBBtn}>
              Team <strong>{teamB.Name}</strong> Details &nbsp; &rarr;
            </button>
          </Link>
        </div>
        <button className={styles.btnBack} onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </main>
    </>
  );
}

export default MatchDetails;
