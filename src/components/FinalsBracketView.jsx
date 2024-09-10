// import BracketItem from './BracketItem';
// import styles from './FinalsBracketView.module.css';

// function FinalsBracketView({ matchesWithDetails }) {
//   return (
//     <>
//       <h2 className={styles.finalHeading}>Road to the final</h2>
//       <div className={styles.bracket}>
//         <article aria-labelledby='round-1'>
//           <h2 id='round-1'>Round of 16</h2>
//           <ol>
//             <BracketItem
//               teamA='Spain'
//               teamB='Georgia'
//               flagAUrl='https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png'
//               flagBUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/1200px-Flag_of_Georgia.svg.png'
//               teamAScore='4'
//               teamBScore='1'
//             />
//             <BracketItem
//               teamA='Germany'
//               teamB='Denmark'
//               flagAUrl='https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png'
//               flagBUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/512px-Flag_of_Denmark.svg.png'
//               teamAScore='2'
//               teamBScore='0'
//             />
//             <BracketItem
//               teamA='Portugal'
//               teamB='Slovenia'
//               flagAUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png'
//               flagBUrl='https://www.countryflags.com/wp-content/uploads/slovenia-flag-png-large.png'
//               teamAScore='0'
//               teamBScore='0'
//             />
//             <BracketItem
//               teamA='France'
//               teamB='Belgium'
//               flagAUrl='https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png'
//               flagBUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqgeNAeAEwncFomFrvo_LleK3Crj3pl1STg&s'
//               teamAScore='1'
//               teamBScore='0'
//             />
//             <BracketItem
//               teamA='Romania'
//               teamB='Netherlands'
//               flagAUrl='https://www.countryflags.com/wp-content/uploads/romania-flag-png-large.png'
//               flagBUrl='https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png'
//               teamAScore='0'
//               teamBScore='3'
//             />
//             <BracketItem
//               teamA='Austria'
//               teamB='Turkey'
//               flagAUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/800px-Flag_of_Austria.svg.png?20220412141234'
//               flagBUrl='https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png'
//               teamAScore='1'
//               teamBScore='2'
//             />
//             <BracketItem
//               teamA='England'
//               teamB='Slovakia'
//               flagAUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png'
//               flagBUrl='https://www.countryflags.com/wp-content/uploads/slovakia-flag-png-large.png'
//               teamAScore='2'
//               teamBScore='1'
//             />
//             <BracketItem
//               teamA='Switzerland'
//               teamB='Italy'
//               flagAUrl='https://content.app-sources.com/s/39330979433008693/uploads/store/Switzerland-flag-1-5957046.jpg'
//               flagBUrl='https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png'
//               teamAScore='2'
//               teamBScore='0'
//             />
//           </ol>
//         </article>
//         <article aria-labelledby='round-2' className='secondArticle'>
//           <h2 id='round-2'>Quater-Finals</h2>
//           <ol>
//             <BracketItem
//               teamA='Spain'
//               teamB='Germany'
//               flagAUrl='https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png'
//               flagBUrl='https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png'
//               teamAScore='2'
//               teamBScore='1'
//             />
//             <BracketItem
//               teamA='Portugal'
//               teamB='France'
//               flagAUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png'
//               flagBUrl='https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png'
//               teamAScore='0'
//               teamBScore='0'
//             />
//             <BracketItem
//               teamA='Netherlands'
//               teamB='Turkey'
//               flagAUrl='https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png'
//               flagBUrl='https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png'
//               teamAScore='2'
//               teamBScore='1'
//             />
//             <BracketItem
//               teamA='England'
//               teamB='Switzerland'
//               flagAUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png'
//               flagBUrl='https://content.app-sources.com/s/39330979433008693/uploads/store/Switzerland-flag-1-5957046.jpg'
//               teamAScore='1'
//               teamBScore='1'
//             />
//           </ol>
//         </article>
//         <article aria-labelledby='round-3'>
//           <h2 id='round-3'>Semi-Finals</h2>
//           <ol>
//             <BracketItem
//               teamA='Spain'
//               teamB='France'
//               flagAUrl='https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png'
//               flagBUrl='https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png'
//               teamAScore='2'
//               teamBScore='1'
//             />
//             <BracketItem
//               teamA='Netherlands'
//               teamB='England'
//               flagAUrl='https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png'
//               flagBUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png'
//               teamAScore='1'
//               teamBScore='2'
//             />
//           </ol>
//         </article>
//         <article aria-labelledby='round-4'>
//           <h2 id='round-4'>Final</h2>
//           <ol>
//             <BracketItem
//               teamA='Spain'
//               teamB='England'
//               flagAUrl='https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png'
//               flagBUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png'
//               teamAScore='2'
//               teamBScore='1'
//             />
//           </ol>
//         </article>
//       </div>
//     </>
//   );
// }

// export default FinalsBracketView;

import BracketItem from './BracketItem';
import styles from './FinalsBracketView.module.css';

function FinalsBracketView({ matchesWithDetailsForTheFinals }) {
  // Add a check to ensure matchesWithDetails exist
  // if (!matchesWithDetails || matchesWithDetails.length === 0) {
  //   return <div>Loading knockout matches...</div>;
  // }

  const knockoutMatches = matchesWithDetailsForTheFinals.filter(match => {
    const [month, day] = match.Date.split('/').map(Number);
    return (month === 6 && day >= 29) || month === 7;
  });

  console.log('KcockoutMatches: ', knockoutMatches);

  return (
    <>
      <h2 className={styles.finalHeading}>Road to the Final</h2>
      <div className={styles.bracket}>
        {/* Round of 16 */}
        <article aria-labelledby='round-16'>
          <h2 id='round-16'>Round of 16</h2>
          <ol>
            {knockoutMatches.slice(0, 8).map(match => (
              const teamAScore = match.Score;
              console.log(teamAScore)
              <BracketItem
                key={match.ID}
                matchID={match.ID}
                teamA={match.TeamA?.Name}
                teamB={match.TeamB?.Name}
                teamAScore={match.Score.split(':')[0]}
                teamBScore={match.Score.split(':')[1]}
                flagAUrl={match.TeamA?.Flag}
                flagBUrl={match.TeamB?.Flag}
              />
            ))}
          </ol>
        </article>

        {/* Quarter-finals */}
        <article aria-labelledby='quarter-finals'>
          <h2 id='quarter-finals'>Quarter-finals</h2>
          <ol>
            {knockoutMatches.slice(8, 12).map(match => (
              <BracketItem
                key={match.ID}
                matchID={match.ID}
                teamA={match.TeamA?.Name}
                teamB={match.TeamB?.Name}
                teamAScore={match.Score.split(':')[0]}
                teamBScore={match.Score.split(':')[1]}
                flagAUrl={match.TeamA?.Flag}
                flagBUrl={match.TeamB?.Flag}
              />
            ))}
          </ol>
        </article>

        {/* Semi-finals */}
        <article aria-labelledby='semi-finals'>
          <h2 id='semi-finals'>Semi-finals</h2>
          <ol>
            {knockoutMatches.slice(12, 14).map(match => (
              <BracketItem
                key={match.ID}
                matchID={match.ID}
                teamA={match.TeamA?.Name || 'TBD'}
                teamB={match.TeamB?.Name || 'TBD'}
                teamAScore={match.Score.split(':')[0]}
                teamBScore={match.Score.split(':')[1]}
                flagAUrl={match.TeamA?.Flag || ''}
                flagBUrl={match.TeamB?.Flag || ''}
              />
            ))}
          </ol>
        </article>

        {/* Final */}
        <article aria-labelledby='final'>
          <h2 id='final'>Final</h2>
          <ol>
            {knockoutMatches.slice(14, 15).map(match => (
              <BracketItem
                key={match.ID}
                matchID={match.ID}
                teamA={match.TeamA?.Name || 'TBD'}
                teamB={match.TeamB?.Name || 'TBD'}
                teamAScore={match.Score.split(':')[0]}
                teamBScore={match.Score.split(':')[1]}
                flagAUrl={match.TeamA?.Flag || ''}
                flagBUrl={match.TeamB?.Flag || ''}
              />
            ))}
          </ol>
        </article>
      </div>
    </>
  );
}

export default FinalsBracketView;
