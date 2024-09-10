import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { csvParser } from '../utils/csvParser';
import styles from './MatchDetails.module.css';

function MatchDetails() {
  const [match, setMatch] = useState([]);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [players, setPlayers] = useState([]);
  const [records, setRecords] = useState([]);

  const { matchID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching match data
    fetch('/matches.csv')
      .then(response => response.text())
      .then(data => {
        const parsedMatches = csvParser(data);
        const currentMatch = parsedMatches.find(m => m.ID === matchID);
        setMatch(currentMatch);

        // Fetching team data
        fetch('/teams.csv')
          .then(response => response.text())
          .then(data => {
            const parsedTeams = csvParser(data);
            setTeamA(parsedTeams.find(t => t.ID === currentMatch.ATeamID));
            setTeamB(parsedTeams.find(t => t.ID === currentMatch.BTeamID));
          });

        // Fetching player data
        fetch('/players.csv')
          .then(response => response.text())
          .then(data => {
            const parsedPlayers = csvParser(data);
            setPlayers(parsedPlayers);
          });

        // Fetching records data
        fetch('/records.csv')
          .then(response => response.text())
          .then(data => {
            const parsedRecords = csvParser(data);
            setRecords(parsedRecords);
          });
      });
  }, [matchID]);

  // console.log(records);

  const teamAResult = match.Score?.split('')[1];
  const teamBResult = match.Score?.split('')[3];

  // Function to get players for a given team
  // const getPlayersForTeam = teamID => {
  //   return players.filter(player => player.TeamID === teamID);
  // };

  // Function to get starting players for a given team from records
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

  // const teamAPlayers = getPlayersForTeam(match.ATeamID);
  // const teamBPlayers = getPlayersForTeam(match.BTeamID);

  // Players for team A
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

  // Similarly for team B

  // const goalkeeperA = teamAPlayers.find(player => player.Position === 'GK');
  // const defendersA = teamAPlayers
  //   .filter(player => player.Position === 'DF')
  //   .slice(0, 4);
  // const midfieldersA = teamAPlayers
  //   .filter(player => player.Position === 'MF')
  //   .slice(0, 4);
  // const strikersA = teamAPlayers
  //   .filter(player => player.Position === 'FW')
  //   .slice(0, 2);

  // Players for team B
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

  // Similarly for team B

  // const goalkeeperB = teamBPlayers.find(player => player.Position === 'GK');
  // const defendersB = teamBPlayers
  //   .filter(player => player.Position === 'DF')
  //   .slice(0, 4);
  // const midfieldersB = teamBPlayers
  //   .filter(player => player.Position === 'MF')
  //   .slice(0, 4);
  // const strikersB = teamBPlayers
  //   .filter(player => player.Position === 'FW')
  //   .slice(0, 2);

  // console.log('TeamA :', teamAPlayers);
  // console.log('TeamB :', teamBPlayers);

  // console.log('Match :', match);
  // console.log('teamA :', teamA);
  // console.log('teamB :', teamB);
  // console.log('Players :', players);

  function transformFullName(fullName) {
    if (fullName.toLowerCase().includes('captain')) {
      return fullName.replace(/captain/gi, 'C');
    }
    return fullName;
  }

  return (
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
                      <span className={styles.number}>{player.TeamNumber}</span>
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
                      <span className={styles.number}>{player.TeamNumber}</span>
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
                      <span className={styles.number}>{player.TeamNumber}</span>
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
                  <div className={styles.playerView}>
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
                    <div className={styles.playerView}>
                      <span className={styles.number}>{player.TeamNumber}</span>
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
                    <div className={styles.playerView}>
                      <span className={styles.number}>{player.TeamNumber}</span>
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
                    <div className={styles.playerView}>
                      <span className={styles.number}>{player.TeamNumber}</span>
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
          <button>
            Team <strong>{teamA.Name}</strong> Details
          </button>
        </Link>

        <Link to={`/match-details/${matchID}/team-details/${teamB.ID}`}>
          <button>
            Team <strong>{teamB.Name}</strong> Details
          </button>
        </Link>
      </div>
      <button className={styles.btnBack} onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </main>
  );
}

export default MatchDetails;
