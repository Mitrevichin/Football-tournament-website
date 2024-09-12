# React

# European Football Championship React App

# https://football-tournament-app-euro-2024.vercel.app/

[Visit the app](https://football-tournament-app-euro-2024.vercel.app/)


**Objective:**  
Develop a dynamic and interactive React web application to visualize and manage data for the European Football Championship. The application processes and displays data from multiple CSV files, providing users with a detailed overview of the tournament, including match details, team statistics, and progression through various stages, from group stages to knockout rounds.

## Algorithm

1. **Understand the Task:** Get a good understanding of the overall task before starting. Aim to see the big picture, then break it down into smaller parts.
2. **Visualize a Basic Design:** Think of a minimalist design—just enough to get started. Even a rough drawing on paper helps keep the idea in front of me.
3. **Break Down the UI:** Divide the user interface into larger components to begin with.
4. **Build a Static Version:** Start by building a static version of the UI to realize where smaller, reusable components are needed.
5. **Basic Styling:** Apply simple CSS for basic colors and shapes.
6. **Set Up Routing:** Implement basic routing without parameters.
7. **Analyze Data:** Understand the structure of the data and manually create logic to parse it from CSV files.
8. **Add State:** Bring the components to life by adding state where needed.
9. **Sync Data:** Ensure data flows smoothly between the components.
10. **Refine the Code:** Look for opportunities to optimize and refactor the code.
11. **Complete the Styling:** Add full CSS styling to finalize the design.

## Components

### Homepage

- **Purpose:** Displays all group stage matches and provides links to match details.
- **Key Functionality:**
  - Fetches and renders group stage matches from `matches.csv`.
  - Displays match details such as teams, scores, and match dates.
  - Links each match to the detailed MatchDetails page.

### GroupStageBox

- **Purpose:** Displays group stage matches for a given group.
- **Key Functionality:**
  - Filters and sorts matches based on the group and date.
  - Renders each match using the `GroupResult` component.

### GroupResult

- **Purpose:** Displays a single group stage match.
- **Key Functionality:**
  - Renders team names, scores, and flags.
  - Provides a link to detailed match information.

### Country

- **Purpose:** Renders a country's flag and name.
- **Key Functionality:**
  - Displays the flag image and country name.

### MatchDetails

- **Purpose:** Displays detailed match information, including team formations and player stats.
- **Key Functionality:**
  - Fetches match details from `matches.csv` and `records.csv`.
  - Dynamically renders the football field with player names, positions, and numbers.
  - Displays team lineups and match results.

### TeamDetails

- **Purpose:** Displays details of a specific football team, including a list of players sorted by position.
- **Key Functionality:**
  - Fetches player data from `players.csv`.
  - Filters and sorts players by their team and position.
  - Renders player details in a table format.

### FinalsBracketView

- **Purpose:** Displays the knockout rounds for the tournament, including the Round of 16, Quarter-finals, Semi-finals, and Final.
- **Key Functionality:**
  - Dynamically renders matches for each round.
  - Displays team names, flags, and scores for each match.
  - Handles match progression from one round to the next.

### BracketItem

- **Purpose:** Displays the match information for two teams in a knockout round.
- **Key Functionality:**
  - Renders the flags, team names, and scores for both teams.
  - Dynamically updates team details based on match results.

## Utility Functions

### csvParser

- **Purpose:** Parses CSV data into JavaScript objects.
- **Key Functionality:**
  - Splits CSV data into headers and rows.
  - Maps rows to objects based on headers.

### getMatchDetails

- **Purpose:** Enhances match data with team details.
- **Key Functionality:**
  - Finds and attaches team details to match data.

### getMatchDetailsForTheFinals

- **Purpose:** Prepares match details for knockout stages.
- **Key Functionality:**
  - Creates a lookup object for team details.
  - Enhances match data with team information.

### isValidDate

- **Purpose:** Validates a date string against multiple date formats.
- **Key Functionality:**
  - Checks if the date string matches one of the predefined date formats.
  - Returns the format if the date is valid or 'Invalid Date Format' if not.
- **Supported Formats:**
  - `YYYY-MM-DD`
  - `MM/DD/YYYY`
  - `DD/MM/YYYY`
  - `MM-DD-YYYY`
  - `YYYY/MM/DD`
