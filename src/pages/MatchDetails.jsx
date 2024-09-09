import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { csvParser } from '../utils/csvParser';
import Navigation from '../components/Navigation';
import styles from './MatchDetails.module.css';

function MatchDetails() {
  const [match, setMatch] = useState([]);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [players, setPlayers] = useState([]);

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
      });
  }, [matchID]);

  const teamAResult = match.Score?.split('')[1];
  const teamBResult = match.Score?.split('')[3];

  // Function to get players for a given team
  const getPlayersForTeam = teamID => {
    return players.filter(player => player.TeamID === teamID);
  };

  if (!match || !teamA || !teamB) return <div>Loading...</div>;

  const teamAPlayers = getPlayersForTeam(match.ATeamID);
  const teamBPlayers = getPlayersForTeam(match.BTeamID);

  // Players for team A
  const goalkeeperA = teamAPlayers.find(player => player.Position === 'GK');
  const defendersA = teamAPlayers
    .filter(player => player.Position === 'DF')
    .slice(0, 4);
  const midfieldersA = teamAPlayers
    .filter(player => player.Position === 'MF')
    .slice(0, 4);
  const strikersA = teamAPlayers
    .filter(player => player.Position === 'FW')
    .slice(0, 2);

  // Players for team B
  const goalkeeperB = teamBPlayers.find(player => player.Position === 'GK');
  const defendersB = teamBPlayers
    .filter(player => player.Position === 'DF')
    .slice(0, 4);
  const midfieldersB = teamBPlayers
    .filter(player => player.Position === 'MF')
    .slice(0, 4);
  const strikersB = teamBPlayers
    .filter(player => player.Position === 'FW')
    .slice(0, 2);

  console.log('TeamA :', teamAPlayers);
  console.log('TeamB :', teamBPlayers);

  // console.log('Match :', match);
  // console.log('teamA :', teamA);
  // console.log('teamB :', teamB);
  // console.log('Players :', players);

  return (
    <main className={styles.matchMain}>
      <Navigation />
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
            <div className={styles.teamAPitch}>
              {/* Goalkeeper */}
              {goalkeeperA && (
                <div className={`${styles.goalkeeperRow} ${styles.row}`}>
                  <div className={styles.playerView}>
                    <span className={styles.number}>
                      {goalkeeperA.TeamNumber}
                    </span>
                  </div>
                  <span className={styles.name}>{goalkeeperA.FullName}</span>
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
                    <span className={styles.name}>{player.FullName}</span>
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
                    <span className={styles.name}>{player.FullName}</span>
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
                    <span className={styles.name}>{player.FullName}</span>
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
                  <span className={styles.name}>{goalkeeperB.FullName}</span>
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
                    <span className={styles.name}>{player.FullName}</span>
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
                    <span className={styles.name}>{player.FullName}</span>
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
                    <span className={styles.name}>{player.FullName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.pitchContainer}>
        <div className={styles.pitch}>
          <div className={styles.wholePitch}>
            <div className={styles.teamAPitch}>
              <div className={`${styles.goalkeeperRow} ${styles.row}`}>
                <div className={styles.playerView}>
                  <span className={styles.number}>1</span>
                </div>
                <span className={styles.name}>Name</span>
              </div>
              <div className={`${styles.defenderRow} ${styles.row}`}>
                <div className={styles.flexRowWrapper}>
                  <div className={styles.leftBack}>
                    <span className={styles.number}>10</span>
                  </div>
                  <span className={styles.name}>Name</span>
                </div>
                <div className={styles.flexRowWrapper}>
                  <div className={styles.centerBack1}>
                    <span className={styles.number}>10</span>
                  </div>
                  <span className={styles.name}>Name</span>
                </div>
                <div className={styles.flexRowWrapper}>
                  <div className={styles.centerBack2}>
                    <span className={styles.number}>10</span>
                  </div>
                  <span className={styles.name}>Name</span>
                </div>
                <div className={styles.flexRowWrapper}>
                  <div className={styles.rightBack}>
                    <span className={styles.number}>10</span>
                  </div>
                  <span className={styles.name}>Name</span>
                </div>
              </div>
              <div className={`${styles.midRow} ${styles.row}`}>
                <div className={styles.flexRowWrapper}>
                  <div className={styles.playerView}>
                    <span className={styles.number}>10</span>
                  </div>
                  <span className={styles.name}>Name</span>
                </div>
                <div className={styles.flexRowWrapper}>
                  <div className={styles.playerView}>
                    <span className={styles.number}>10</span>
                  </div>
                  <span className={styles.name}>Name</span>
                </div>
                <div className={styles.flexRowWrapper}>
                  <div className={styles.playerView}>
                    <span className={styles.number}>10</span>
                  </div>
                  <span className={styles.name}>Name</span>
                </div>
                <div className={styles.flexRowWrapper}>
                  <div className={styles.playerView}>
                    <span className={styles.number}>10</span>
                  </div>
                  <span className={styles.name}>Name</span>
                </div>
              </div>
              <div className={`${styles.strikerRow} ${styles.row}`}>
                <div className={styles.flexRowWrapper}>
                  <div className={styles.playerView}>
                    <span className={styles.number}>10</span>
                  </div>
                  <span className={styles.name}>Name</span>
                </div>
                <div className={styles.flexRowWrapper}>
                  <div className={styles.playerView}>
                    <span className={styles.number}>10</span>
                  </div>
                  <span className={styles.name}>Name</span>
                </div>
              </div>
            </div>
            <div className={styles.teamBPitch}>
              <Link to='team-details'>{teamA.Name}</Link>
            </div>
          </div>
        </div>
        <div className={styles.pitch}></div>
      </section> */}
      <button className={styles.btnBack} onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </main>
  );
}

export default MatchDetails;
