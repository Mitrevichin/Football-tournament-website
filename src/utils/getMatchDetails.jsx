export function getMatchDetails(matches, teams) {
  return matches.map(match => {
    const teamA = teams.find(team => team.ID === match.ATeamID);
    const teamB = teams.find(team => team.ID === match.BTeamID);
    return {
      ...match,
      teamA,
      teamB,
    };
  });
}
