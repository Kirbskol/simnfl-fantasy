# SimNFL Fantasy

This application has been created as part of my final project for Harvard's CS50x course. It is designed for members of the SimFBA community to complete a fantasy draft of SimNFL players and export their drafted rosters to share (and probably brag) with others. SimFBA is a simulation game created by a group of people that have been playing sim sports games together for almost a decade! With an entirely fictional universe of players, it is your chance to immerse yourself as a Head Coach, GM or even an owner. This Fantasy draft app allows users to have a bit of fun, and try and draft the best team possible, to earn bragging rights with others!

I decided to really try and challenge myself with this project. Before this stage, I had never used React, and had only completed a foundational course on HTML/CSS/JS. I believe the knowledge I gained throughout CS50 really helped me grasp it quite quickly. All of the things I had learned back on C, really assisted me with picking up JS syntax, and I feel without this fantastic course experience, I would never of been able to achieve this final project.

For the project to work, I had to construct the following:

- JSON files for each position group, which were used to pull the players.
- Create state variables for players, in part which helped with figuring out the algorithm to avoid duplicate cards being shown.
- Create all graphics you see, including the icons on the player cards.
- Utilise Tailwind CSS (fantastic bit of kit by the way) to make the styling look optimal.
- Implement html2canvas to enable users to export their drafted roster to share with others.

### Video demo: https://www.youtube.com/watch?v=EwjfcA-BCIQ
### Live app: https://simnfl-fantasy.vercel.app

Please note, I am going to fork this repository for submission as it states the file is too large when attempting submit50.

# Installation

- Clone the repository.
- Navigate to project directory
- Install dependencies
- Start development server

# Exporting your Roster

- Click the "Export" button located in the top right corner of the Roster page
  - You have to complete the draft to be able to export.
- The image will include your drafted roster, as well as an averaged overall rating for the team.

# Tech Used

- React + Vite
- Tailwind CSS
- html2canvas

# Roadmap

All of these features listed are not set in stone, but may be implemented in the future.

- Add leaderboard which displays highest scores of drafted teams with usernames.
- Add user registration/login.
- Add functionality to store drafted teams in a database so users can retrieve previous drafts.
- Add multi-player function, where more than one user can draft simulatenously.
- Add functionality with the actual sim, to run weekly fantasy depending on results and player stats.

# Acknowledgements

- CS50x: This project was developed as part of the Harvard CS50x course. I have thoroughly enjoyed the course, and highly recommend it to all.
- SimFBA Community: Special thanks to the amazing community, have fun with this!

Feel free to contribute to the project by submitting pull requests or raising issues. Thank you!