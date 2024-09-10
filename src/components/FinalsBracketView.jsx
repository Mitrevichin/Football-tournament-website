// import BracketItem from './BracketItem';
// import styles from './FinalsBracketView.module.css';

// function FinalsBracketView({ matchesWithDetailsForTheFinals }) {
//   // Add a check to ensure matchesWithDetails exist
//   // if (!matchesWithDetails || matchesWithDetails.length === 0) {
//   //   return <div>Loading knockout matches...</div>;
//   // }

//   const knockoutMatches = matchesWithDetailsForTheFinals.filter(match => {
//     const [month, day] = match.Date.split('/').map(Number);
//     return (month === 6 && day >= 29) || month === 7;
//   });

//   // console.log('KcockoutMatches: ', knockoutMatches);

//   // function sortKnockoutMatches(obj) {
//   //   const matchesArray = Object.values(obj);
//   //   matchesArray.sort((a, b) => Number(a.Order) - Number(b.Order));

//   //   return matchesArray;
//   // }

//   // Split sorted matches into categories
//   // const roundOf16Matches = sortedMatchesForRendering.slice(0, 8);
//   // const quarterFinalsMatches = sortedMatchesForRendering.slice(8, 12);
//   // const semiFinalsMatches = sortedMatchesForRendering.slice(12, 14);
//   // const finalMatch = sortedMatchesForRendering.slice(14, 15);

//   return (
//     <>
//       <h2 className={styles.finalHeading}>Road to the Final</h2>
//       <div className={styles.bracket}>
//         {/* Round of 16 */}
//         <article aria-labelledby='round-16'>
//           <h2 id='round-16'>Round of 16</h2>
//           <ol>
//             {knockoutMatches.slice(0, 8).map(match => {
//               return (
//                 <BracketItem
//                   key={match.ID}
//                   matchID={match.ID}
//                   teamA={match.TeamA?.Name}
//                   teamB={match.TeamB?.Name}
//                   teamAScore={match.Score.split('-')[0].slice(1)}
//                   teamBScore={match.Score.split('-')[1]}
//                   flagAUrl={match.TeamA?.Flag}
//                   flagBUrl={match.TeamB?.Flag}
//                 />
//               );
//             })}
//           </ol>
//         </article>

//         {/* Quarter-finals */}
//         <article aria-labelledby='quarter-finals'>
//           <h2 id='quarter-finals'>Quarter-finals</h2>
//           <ol>
//             {knockoutMatches.slice(8, 12).map(match => (
//               <BracketItem
//                 key={match.ID}
//                 matchID={match.ID}
//                 teamA={match.TeamA?.Name}
//                 teamB={match.TeamB?.Name}
//                 teamAScore={match.Score.split('-')[0].slice(1)}
//                 teamBScore={match.Score.split('-')[1]}
//                 flagAUrl={match.TeamA?.Flag}
//                 flagBUrl={match.TeamB?.Flag}
//               />
//             ))}
//           </ol>
//         </article>

//         {/* Semi-finals */}
//         <article aria-labelledby='semi-finals'>
//           <h2 id='semi-finals'>Semi-finals</h2>
//           <ol>
//             {knockoutMatches.slice(12, 14).map(match => (
//               <BracketItem
//                 key={match.ID}
//                 matchID={match.ID}
//                 teamA={match.TeamA?.Name}
//                 teamB={match.TeamB?.Name}
//                 teamAScore={match.Score.split('-')[0].slice(1)}
//                 teamBScore={match.Score.split('-')[1]}
//                 flagAUrl={match.TeamA?.Flag}
//                 flagBUrl={match.TeamB?.Flag}
//               />
//             ))}
//           </ol>
//         </article>

//         {/* Final */}
//         <article aria-labelledby='final'>
//           <h2 id='final'>Final</h2>
//           <ol>
//             {knockoutMatches.slice(14, 15).map(match => (
//               <BracketItem
//                 key={match.ID}
//                 matchID={match.ID}
//                 teamA={match.TeamA?.Name}
//                 teamB={match.TeamB?.Name}
//                 teamAScore={match.Score.split('-')[0].slice(1)}
//                 teamBScore={match.Score.split('-')[1]}
//                 flagAUrl={match.TeamA?.Flag}
//                 flagBUrl={match.TeamB?.Flag}
//               />
//             ))}
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
  // Filter final matches
  const knockoutMatches = matchesWithDetailsForTheFinals.filter(match => {
    const [month, day] = match.Date.split('/').map(Number);
    return (month === 6 && day >= 29) || month === 7;
  });

  console.log(knockoutMatches);

  // Final rounds
  const roundOf16Matches = knockoutMatches.slice(0, 8);
  const quarterFinalsMatches = knockoutMatches.slice(8, 12);
  const semiFinalsMatches = knockoutMatches.slice(12, 14);
  const finalMatch = knockoutMatches.slice(14, 15);

  function sortMatchesByOrder(match) {
    return match.sort((a, b) => Number(a.Order) - Number(b.Order));
  }

  return (
    <>
      <h2 className={styles.finalHeading}>Road to the Final</h2>
      <div className={styles.bracket}>
        {/* Round of 16 */}
        <article aria-labelledby='round-16'>
          <h2 id='round-16'>Round of 16</h2>
          <ol>
            {sortMatchesByOrder(roundOf16Matches).map(match => (
              <BracketItem
                key={match.ID}
                matchID={match.ID}
                teamA={match.TeamA?.Name}
                teamB={match.TeamB?.Name}
                teamAScore={match.Score.split('-')[0].slice(1)}
                teamBScore={match.Score.split('-')[1]}
                flagAUrl={match.TeamA?.Flag}
                flagBUrl={match.TeamB?.Flag}
                date={match.Date}
              />
            ))}
          </ol>
        </article>

        {/* Quarter-finals */}
        <article aria-labelledby='quarter-finals'>
          <h2 id='quarter-finals'>Quarter-finals</h2>
          <ol>
            {sortMatchesByOrder(quarterFinalsMatches).map(match => (
              <BracketItem
                key={match.ID}
                matchID={match.ID}
                teamA={match.TeamA?.Name}
                teamB={match.TeamB?.Name}
                teamAScore={match.Score.split('-')[0].slice(1)}
                teamBScore={match.Score.split('-')[1]}
                flagAUrl={match.TeamA?.Flag}
                flagBUrl={match.TeamB?.Flag}
                date={match.Date}
              />
            ))}
          </ol>
        </article>

        {/* Semi-finals */}
        <article aria-labelledby='semi-finals'>
          <h2 id='semi-finals'>Semi-finals</h2>
          <ol>
            {sortMatchesByOrder(semiFinalsMatches).map(match => (
              <BracketItem
                key={match.ID}
                matchID={match.ID}
                teamA={match.TeamA?.Name}
                teamB={match.TeamB?.Name}
                teamAScore={match.Score.split('-')[0].slice(1)}
                teamBScore={match.Score.split('-')[1]}
                flagAUrl={match.TeamA?.Flag}
                flagBUrl={match.TeamB?.Flag}
                date={match.Date}
              />
            ))}
          </ol>
        </article>

        {/* Final */}
        <article aria-labelledby='final'>
          <h2 id='final'>Final</h2>
          <ol>
            {finalMatch.map(match => (
              <BracketItem
                key={match.ID}
                matchID={match.ID}
                teamA={match.TeamA?.Name}
                teamB={match.TeamB?.Name}
                teamAScore={match.Score.split('-')[0].slice(1)}
                teamBScore={match.Score.split('-')[1]}
                flagAUrl={match.TeamA?.Flag}
                flagBUrl={match.TeamB?.Flag}
                date={match.Date}
              />
            ))}
          </ol>
        </article>
      </div>
    </>
  );
}

export default FinalsBracketView;
