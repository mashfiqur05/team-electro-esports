# Team Electro Esports

**An unofficial fan website for Team Electro — Free Fire Esports.**

**Live Website:** https://team-electro-esports.vercel.app  
**GitHub Repository:** https://github.com/mashfiqur05/team-electro-esports

## About the Project

Team Electro Esports is a responsive esports fan website designed to showcase Team Electro's identity, players, achievements, and match information in one place.

The website features a dark navy and electric blue visual theme inspired by modern esports websites. It aims to provide fans with an engaging experience and an easy way to follow match schedules, results, and livestream updates.

## Features

- ⚡ **Esports-Inspired UI** — Dark theme with electric blue accents.
- **Player Roster** — Showcase team members and player information.
- **Achievements** — Highlight tournament performances and accomplishments.
- **Match Center** — Display match schedules and results.
- **YouTube Livestream Status** — Check whether linked match videos are live or completed.
- **Responsive Design** — Designed for desktop, tablet, and mobile screens.
- **Dynamic Match Updates** — Refresh livestream statuses automatically.
- **Live Deployment** — Hosted on Vercel.

## Tech Stack

- **HTML5** — Website structure.
- **CSS3** — Styling, layout, animations, and responsiveness.
- **JavaScript** — Interactive features and dynamic content.
- **Vercel** — Hosting and serverless API functions.
- **YouTube Data API v3** — Livestream status checking.

## 📂 Project Structure

```text
team-electro-esports/
├── api/
│   └── youtube-status.js
├── assets/
│   └── images and other static assets
├── index.html
├── styles.css
├── app.js
├── server-cache.conf.example
└── README.md
```

- `index.html` — Main website structure and content.
- `styles.css` — Website design, colors, layout, and responsive styles.
- `app.js` — Client-side interactions and match-related functionality.
- `api/` — Serverless API endpoint for checking YouTube video status.
- `assets/` — Images, logos, and other static resources.
- `server-cache.conf.example` — Example server cache configuration.

## Run Locally

### Prerequisites

- Git
- A modern web browser
- Python 3 (for a simple local web server)

### 1. Clone the repository

```bash
git clone https://github.com/mashfiqur05/team-electro-esports.git
```

### 2. Enter the project directory

```bash
cd team-electro-esports
```

### 3. Start a local server

```bash
python3 -m http.server 8000
```

### 4. Open the website

Visit:

http://localhost:8000

**Note:** The static website can run locally this way. The Vercel serverless API and YouTube livestream-status integration require the appropriate deployment or local serverless setup.

## ⚙️ YouTube API Configuration

The Match Center uses the YouTube Data API v3 to check the status of linked videos.

To enable this feature in the deployed website:

1. Create an API key in Google Cloud Console.
2. Enable **YouTube Data API v3** for your project.
3. Open your project in Vercel.
4. Navigate to **Settings → Environment Variables**.
5. Add the following environment variable:

   ```env
   YOUTUBE_API_KEY=your_youtube_api_key
   ```

6. Enable it for the required environments and redeploy the project.

Keep the API key private. Do not commit it to GitHub or expose it in client-side JavaScript.

The website checks livestream status on page load, when the user returns to the tab, and periodically while the page remains open.

## 🎯 Project Goals

- Build a dedicated online presence for Team Electro fans.
- Present team information in a clean, organized interface.
- Make match schedules, results, and livestream information easier to access.
- Practice frontend development, API integration, and deployment.
- Create a foundation for future features and improvements.

## Future Improvements

- Admin dashboard for managing team information.
- Easier updates for player profiles and achievements.
- Improved match history and tournament statistics.
- Additional social media integrations.
- Performance and accessibility improvements.

## Contributing

Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## ⚠️ Disclaimer

This is an unofficial fan project and is not affiliated with or endorsed by Team Electro, Garena, or Free Fire. All respective names, logos, and trademarks belong to their owners.

