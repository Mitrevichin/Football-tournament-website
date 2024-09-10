import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { csvParser } from '../utils/csvParser';
import styles from './TeamDetails.module.css';

function TeamDetails() {
  const { matchID, teamID } = useParams();
  const [players, setPlayers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/players.csv')
      .then(response => response.text())
      .then(data => {
        const parsedPlayers = csvParser(data);
        const teamPlayers = parsedPlayers.filter(
          player => player.TeamID === teamID
        );
        setPlayers(teamPlayers);

        const positionOrder = {
          GK: 1,
          DF: 2,
          MF: 3,
          FW: 4,
        };

        const sortedPlayers = [...teamPlayers].sort(
          (a, b) => positionOrder[a.Position] - positionOrder[b.Position]
        );

        setPlayers(sortedPlayers);
      });
  }, [teamID]);

  // console.log('Players: ', players);

  return (
    <main className={styles.mainTable}>
      <Link to='/'>Homepage</Link>

      <table>
        <thead>
          <tr>
            <th scope='col'>Number</th>
            <th scope='col'>Name</th>
            <th scope='col'>Position</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => {
            let bgColor;

            if (player.Position === 'GK') {
              bgColor = 'gk';
            } else if (player.Position === 'DF') {
              bgColor = 'df';
            } else if (player.Position === 'MF') {
              bgColor = 'mf';
            } else if (player.Position === 'FW') {
              bgColor = 'fw';
            }

            return (
              <tr key={player.ID}>
                <td>{player.TeamNumber}</td>
                <td>{player.FullName}</td>
                <td>
                  <span className={`${styles.circle} ${styles[bgColor]}`}>
                    {player.Position}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className={styles.btnBack} onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </main>
  );
}

export default TeamDetails;
