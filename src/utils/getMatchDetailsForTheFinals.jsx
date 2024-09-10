export function getMatchDetailsForTheFinals(matches, teams) {
  // Create a lookup object for team details
  const teamMap = {};

  // Populate the teamMap object with team ID as keys
  for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    teamMap[team.ID] = team;
  }

  // Enhance match data with team details
  const matchesWithDetails = [];

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const teamA = teamMap[match.ATeamID] || {};
    const teamB = teamMap[match.BTeamID] || {};

    // Add match details including team information
    matchesWithDetails.push({
      ...match,
      TeamA: teamA,
      TeamB: teamB,
    });
  }

  return matchesWithDetails;
}
