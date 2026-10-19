const matches = [
  {
    date: "19",
    month: "OCT",
    tournament: "Bangladesh Free Fire Pro League S4",
    startsAt: "2026-10-19T20:00:00+06:00",
    endsAt: "2026-10-19T22:00:00+06:00",
    time: "8:00 PM",
    livestream: "https://www.youtube.com/watch?v=ayUsvm7HIqE",
    videoId: "ayUsvm7HIqE"
  },
  {
    date: "25",
    month: "OCT",
    tournament: "FF Asian Gateway II — K.O. Stage Day 4",
    startsAt: "2026-10-25T20:00:00+06:00",
    endsAt: "2026-10-25T22:00:00+06:00",
    time: "8:00 PM",
    livestream: "https://www.youtube.com/watch?v=mRoRautAB3M",
    videoId: "mRoRautAB3M"
  },
  {
    date: "19",
    month: "OCT",
    tournament: "FF Asian Gateway II — K.O. Stage Day 2",
    startsAt: "2026-10-19T19:30:00+06:00",
    endsAt: "2026-10-19T21:00:00+06:00",
    time: "7:30 PM",
    livestream: "https://www.youtube.com/watch?v=jVvbNEBIBc0",
    videoId: "jVvbNEBIBc0"
  },
  {
    date: "12",
    month: "OCT",
    tournament: "FF Asian Gateway II — K.O. Stage Day 1",
    startsAt: "2026-10-12T20:00:00+06:00",
    endsAt: "2026-10-12T22:00:00+06:00",
    time: "8:00 PM",
    livestream: "https://www.youtube.com/watch?v=xkpZ6kk0BBA",
    videoId: "xkpZ6kk0BBA"
  },
  {
    date: "—",
    month: "TBD",
    tournament: "EEE Mega Clash — Tier 1 Final",
    startsAt: "",
    endsAt: "",
    time: "See livestream",
    livestream: "https://www.youtube.com/live/ayoca0bk-8w",
    videoId: "ayoca0bk-8w"
  }
];
const players = [
  {
    id: "safinx",
    nickname: "SAFINX",
    name: "Name not published",
    role: "SUPPORTER",
    nationality: "Bangladesh",
    status: "Active",
    joinDate: "2025-12-03",
    image: "assets/safin.png",
    bio: "Active Team Electro player listed on Liquipedia.",
    winnings: "Not published",
    social: { facebook: "https://www.facebook.com/profile.php?id=61595545616626", youtube: "https://www.youtube.com/@SAFINX7", instagram: "" },
    achievements: []
  },
  {
    id: "aizenx",
    nickname: "AIZENX",
    name: "Name not published",
    role: "RUSHER",
    nationality: "Bangladesh",
    status: "Active",
    joinDate: "2026-03-03",
    image: "assets/aizen.png",
    bio: "Active Team Electro player listed on Liquipedia.",
    winnings: "Not published",
    social: { facebook: "https://www.facebook.com/md.alif.133", youtube: "https://www.youtube.com/@ELCAIZEN", instagram: "" },
    achievements: []
  },
  {
    id: "amin",
    nickname: "AMIN",
    name: "Name not published",
    role: "RUSHER",
    nationality: "Bangladesh",
    status: "Active",
    joinDate: "2026-04-03",
    image: "assets/amin.png",
    bio: "Active Team Electro player listed on Liquipedia.",
    winnings: "Not published",
    social: { facebook: "https://www.facebook.com/NTnuramin00", youtube: "https://www.youtube.com/@elcaminyt", instagram: "" },
    achievements: []
  },
  {
    id: "sajidx",
    nickname: "SAJIDX",
    name: "Name not published",
    role: "BOMBER",
    nationality: "Bangladesh",
    status: "Active",
    joinDate: "2026-07-07",
    image: "assets/sajid.png",
    bio: "Active Team Electro player listed on Liquipedia.",
    winnings: "Not published",
    social: { facebook: "https://www.facebook.com/profile.php?id=61568330271256", youtube: "https://www.youtube.com/@Sajidx.077", instagram: "" },
    achievements: []
  },
  {
    id: "xiot",
    nickname: "XIOT",
    name: "Name not published",
    role: "SNIPER",
    nationality: "Bangladesh",
    status: "Active",
    joinDate: "Not published",
    image: "assets/xiot.png",
    bio: "Active Team Electro player.",
    winnings: "Not published",
    social: { facebook: "https://www.facebook.com/mh.chaudhary.641283", youtube: "https://www.youtube.com/@XIOT-m9m", instagram: "" },
    achievements: []
  },
  {
    id: "coach",
    nickname: "COACH",
    name: "Name not published",
    role: "COACH",
    nationality: "Bangladesh",
    status: "Not published",
    joinDate: "Not published",
    image: "assets/sezler.png",
    bio: "Team Electro coach details have not been published.",
    winnings: "Not published",
    social: { facebook: "https://www.facebook.com/Coach.Selzer", youtube: "https://www.youtube.com/@coach_selzer", instagram: "https://www.instagram.com/coach_selzer/" },
    achievements: []
  },
  {
    id: "syed-khalid",
    nickname: "SYED KHALID",
    name: "Syed Khalid",
    role: "MANAGER",
    nationality: "Bangladesh",
    status: "Active",
    joinDate: "2020-09-23",
    image: "assets/team-electro-logo.png",
    bio: "Team Electro manager listed on Liquipedia.",
    winnings: "Not applicable",
    social: { facebook: "https://www.facebook.com/syedkhalid17/", youtube: "", instagram: "" },
    achievements: []
  }
];
let achievements = [
  { date: "2026-10-10", name: "Free Fire Bangladesh Pro League Season 4", description: "Team Electro finished 1st in this B-Tier tournament.", placement: "1ST", tier: "B-TIER", prize: "$2,433" },
  { date: "2026-10-06", name: "A1 Ignite Pro League 2026", description: "Team Electro finished 7th in this C-Tier tournament.", placement: "7TH", tier: "C-TIER", prize: "$49" },
  { date: "2026-10-05", name: "Crewx Warchest Pro League Season 2", description: "Team Electro finished 6th in this D-Tier tournament.", placement: "6TH", tier: "D-TIER", prize: "$49" },
  { date: "2026-09-20", name: "Zong 5G Free Fire Azaadi Series 2026", description: "Team Electro finished 1st in this D-Tier tournament.", placement: "1ST", tier: "D-TIER", prize: "$271" },
  { date: "2026-09-05", name: "Free Fire World Series - Bangladesh 2026 Fall", description: "Team Electro finished 9th in this A-Tier tournament.", placement: "9TH", tier: "A-TIER", prize: "$814" },
  { date: "2026-08-23", name: "UEO Pro League 2026 Fall", description: "Team Electro finished 3rd in this D-Tier tournament.", placement: "3RD", tier: "D-TIER", prize: "$123" },
  { date: "2026-08-22", name: "Crewx Firestorm Series 2026", description: "Team Electro finished 9th in this D-Tier tournament.", placement: "9TH", tier: "D-TIER", prize: "$16" },
  { date: "2026-08-19", name: "Oraimo Presents Challengers Series 2026", description: "Team Electro finished 10th in this C-Tier tournament.", placement: "10TH", tier: "C-TIER", prize: "$98" },
  { date: "2026-08-13", name: "FREAK~22 FFWS Scrim 2026 Fall", description: "Team Electro finished 15th in this D-Tier tournament.", placement: "15TH", tier: "D-TIER", prize: "—" },
  { date: "2026-08-11", name: "Crewx Empires Conference Cup 2026", description: "Team Electro finished 10th in this D-Tier tournament.", placement: "10TH", tier: "D-TIER", prize: "—" },
  { date: "2026-08-10", name: "UEO Showdown Season 6", description: "Team Electro finished 4th in this D-Tier tournament.", placement: "4TH", tier: "D-TIER", prize: "$49" },
  { date: "2026-08-06", name: "Vertex Empire Showdown 2026", description: "Team Electro finished 11th in this D-Tier tournament.", placement: "11TH", tier: "D-TIER", prize: "—" },
  { date: "2026-08-03", name: "Tahiax Esports Presents - FFWS Spring Returns 2026", description: "Team Electro finished 2nd in this D-Tier tournament.", placement: "2ND", tier: "D-TIER", prize: "$73" },
  { date: "2026-08-01", name: "Free Fire Bangladesh Pro League Season 3", description: "Team Electro finished 6th in this B-Tier tournament.", placement: "6TH", tier: "B-TIER", prize: "$447" },
  { date: "2026-07-31", name: "Bangladesh Pro Legaue Gateway Season 3", description: "Team Electro finished 8th in this D-Tier tournament.", placement: "8TH", tier: "D-TIER", prize: "—" },
  { date: "2026-07-26", name: "UEO Championship Season 13", description: "Team Electro finished 4th in this D-Tier tournament.", placement: "4TH", tier: "D-TIER", prize: "$49" },
  { date: "2026-07-26", name: "UEO Battlefield Championship 2025", description: "Team Electro finished 12th in this D-Tier tournament.", placement: "12TH", tier: "D-TIER", prize: "—" },
  { date: "2026-06-06", name: "Free Fire World Series - Bangladesh 2026 Spring", description: "Team Electro finished 6th in this A-Tier tournament.", placement: "6TH", tier: "A-TIER", prize: "$1,629" },
  { date: "2026-05-26", name: "Crewx Goats of Bangladesh 2026", description: "Team Electro finished 9th in this D-Tier tournament.", placement: "9TH", tier: "D-TIER", prize: "$16" },
  { date: "2026-05-15", name: "KSA Legacy of Fire 2026", description: "Team Electro finished 11th in this D-Tier tournament.", placement: "11TH", tier: "D-TIER", prize: "—" },
  { date: "2026-05-14", name: "UEO Grand Championship Season 6", description: "Team Electro finished 7th in this D-Tier tournament.", placement: "7TH", tier: "D-TIER", prize: "$20" },
  { date: "2026-05-09", name: "Legacy Syndicate Global Spring", description: "Team Electro finished 22nd in this D-Tier tournament.", placement: "22ND", tier: "D-TIER", prize: "—" },
  { date: "2026-05-04", name: "UEO Snowstorm Survival Championship Season 4", description: "Team Electro finished 10th in this D-Tier tournament.", placement: "10TH", tier: "D-TIER", prize: "$16" },
  { date: "2026-04-27", name: "VLife Esports - FFWS BD-NP Spring Gateway 2026", description: "Team Electro finished 6th in this D-Tier tournament.", placement: "6TH", tier: "D-TIER", prize: "$16" },
  { date: "2026-04-24", name: "Free Fire Bangladesh Pro League Season 2", description: "Team Electro finished 12th in this B-Tier tournament.", placement: "12TH", tier: "B-TIER", prize: "$163" },
  { date: "2026-03-15", name: "UEO Championship Season 12", description: "Team Electro finished 2nd in this D-Tier tournament.", placement: "2ND", tier: "D-TIER", prize: "$82" },
  { date: "2026-03-05", name: "UEO Invasion Battle League Season 9", description: "Team Electro finished 3rd in this D-Tier tournament.", placement: "3RD", tier: "D-TIER", prize: "$82" },
  { date: "2025-12-30", name: "UEO Survivors Rumble 2025", description: "Team Electro finished 4th in this D-Tier tournament.", placement: "4TH", tier: "D-TIER", prize: "$49" },
  { date: "2025-10-08", name: "Rise Of Nations 2025", description: "Team Electro finished 6th in this C-Tier tournament.", placement: "6TH", tier: "C-TIER", prize: "$49" },
  { date: "2025-08-21", name: "Lidoma Endless Series 2025 - South Asia Regional Championship", description: "Team Electro finished 24th in this C-Tier tournament.", placement: "24TH", tier: "C-TIER", prize: "—" },
  { date: "2025-06-20", name: "Free Fire Bangladesh Championship 2025", description: "Team Electro finished 4th in this A-Tier tournament.", placement: "4TH", tier: "A-TIER", prize: "$4,910" },
  { date: "2025-06-17", name: "Lidoma Endless Series 2025 - Bangladesh Open Regional Cups", description: "Team Electro finished 5th in this D-Tier tournament.", placement: "5TH", tier: "D-TIER", prize: "$25" },
  { date: "2025-05-26", name: "Liquid Esports - Bhaishakhi Face Off 1432", description: "Team Electro finished 11th in this D-Tier tournament.", placement: "11TH", tier: "D-TIER", prize: "—" },
  { date: "2021-03-19", name: "Free Fire Bangladesh Championship Spring 2021", description: "Team Electro finished 12th in this A-Tier tournament.", placement: "12TH", tier: "A-TIER", prize: "$213" }
];

const matchList = document.querySelector("#matches-list");
const filters = document.querySelectorAll(".filter");
const profileModal = document.querySelector("#profile-modal");
const profileModalContent = document.querySelector("#profile-modal-content");
let profileHistoryOpen = false;
let currentMatchFilter = "all";

function getMatchStatus(match, now = new Date()) {
  if (!match.startsAt || !match.endsAt) return match.status || "upcoming";
  const start = Date.parse(match.startsAt);
  const end = Date.parse(match.endsAt);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
    console.error(`Invalid match schedule for "${match.tournament}".`);
    return "upcoming";
  }
  const currentTime = now.getTime();
  if (currentTime < start) return "upcoming";
  if (currentTime < end) return "live";
  return "completed";
}

function updateMatchStatuses() {
  const now = new Date();
  matches.forEach(match => {
    if (match.statusSource !== "youtube") {
      match.status = getMatchStatus(match, now);
    }
  });
}

async function refreshYouTubeStatuses() {
  const videoIds = matches.map(match => match.videoId).filter(Boolean);
  if (!videoIds.length) return;
  try {
    const response = await fetch(`/api/youtube-status?ids=${encodeURIComponent(videoIds.join(","))}`);
    if (!response.ok) throw new Error(`Status endpoint returned ${response.status}.`);
    const { statuses } = await response.json();
    matches.forEach(match => {
      if (statuses[match.videoId]) {
        match.status = statuses[match.videoId];
        match.statusSource = "youtube";
      }
    });
    renderMatches(currentMatchFilter, false);
  } catch (error) {
    console.error("Could not refresh YouTube match statuses:", error);
  }
}

function renderResponsiveImage(source, alt, sizes = "(max-width: 600px) 50vw, 280px") {
  const webpSource = source.replace(/\.(png|jpe?g)$/i, ".webp");
  const base = webpSource.replace(/\.webp$/i, "");
  const srcset = `${base}-400.webp 400w, ${base}-800.webp 800w, ${webpSource} 2000w`;
  return `<picture><source srcset="${srcset}" sizes="${sizes}" type="image/webp"><img src="${source}" alt="${alt}" loading="lazy" decoding="async" width="2000" height="2000"></picture>`;
}

function renderMatches(filter = "all", refreshTime = true) {
  currentMatchFilter = filter;
  if (refreshTime) updateMatchStatuses();
  updateCounts();
  const visible = matches.filter(match => filter === "all" || match.status === filter);
  if (!visible.length) {
    const isAllMatches = filter === "all";
    const filterLabel = filter === "live" ? "live / ongoing" : filter;
    const heading = isAllMatches ? "No confirmed fixtures yet." : `No ${filterLabel} matches yet.`;
    const message = isAllMatches
      ? "The match center will show the next verified Team Electro fixture here. Check back for schedule, opponent, BST time, and stream details."
      : `There are no ${filterLabel} matches to show right now.`;
    matchList.innerHTML = `<div class="data-empty match-empty"><div class="empty-index">MATCH / 001</div><div><span class="empty-icon">✦</span><h3>${heading}</h3><p>${message}</p></div><span class="empty-state-label">AWAITING VERIFIED DATA</span></div>`;
    return;
  }
  matchList.innerHTML = visible.map(match => `
    <article class="match-card">
      <div class="match-date"><strong>${match.date}</strong>${match.month}</div>
      <div class="match-info"><p>${match.tournament}</p><small>${match.time} · BST (UTC+6)</small><a class="match-stream" href="${match.livestream}" target="_blank" rel="noreferrer">Watch livestream ↗</a></div>
      <div class="match-status ${match.status}">${match.status === "live" ? "Live / ongoing" : match.status}</div>
    </article>`).join("");
}

function renderRoster() {
  const target = document.querySelector("#roster-list");
  if (!players.length) {
    target.innerHTML = `<div class="data-empty roster-empty"><div class="empty-index">ROSTER / 001</div><div><span class="empty-icon">✦</span><h3>The lineup is being verified.</h3><p>Liquipedia currently lists no active Team Electro players. Verified player profiles, roles, and approved portraits will be published here when confirmed.</p></div><span class="empty-state-label">ROSTER DATA PENDING</span></div>`;
    return;
  }
  target.innerHTML = players.map(player => `
    <article class="player-card">
      <div class="player-art">${renderResponsiveImage(player.image, `${player.nickname} avatar`)}</div>
      <div class="player-details">
        <span class="player-role">${player.role}</span>
        <h3>${player.nickname}</h3>
        <div class="player-socials" aria-label="${player.nickname} social links">
          ${renderSocialLink(player.social.facebook, "FB", "Facebook")}
          ${renderSocialLink(player.social.youtube, "YT", "YouTube")}
          ${renderSocialLink(player.social.instagram, "IG", "Instagram")}
        </div>
        <button class="profile-button" type="button" data-profile-id="${player.id}">View profile</button>
      </div>
    </article>`).join("");
}

function renderSocialLink(url, label, platform) {
  const icons = {
    Facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z"/></svg>',
    YouTube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.3V8.7l5.7 3.3-5.7 3.3Z"/></svg>',
    Instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" class="social-icon-fill"/></svg>'
  };
  const icon = icons[platform];
  if (!url) return "";
  return `<a href="${url}" target="_blank" rel="noreferrer" aria-label="${platform} profile">${icon}</a>`;
}

function renderProfile(player) {
  const rows = player.achievements.map((result, index) => `
    <tr class="${index > 2 ? "result-extra" : ""}" ${index > 2 ? "hidden" : ""}><td>${result.date}</td><td>${result.place}</td><td>${result.tier}</td><td>${result.tournament}</td><td>${result.prize}</td></tr>`).join("");
  profileModalContent.innerHTML = `
    <div class="profile-identity">
      <div class="profile-avatar">${renderResponsiveImage(player.image, `${player.nickname} profile image`, "138px")}</div>
      <span class="player-role">${player.role}</span>
      <h2 id="profile-modal-title">${player.nickname}</h2>
      <p>${player.name}</p>
      <dl class="profile-meta">
        <div><dt>Nationality</dt><dd><span aria-hidden="true">🇧🇩</span> ${player.nationality}</dd></div>
        <div><dt>Status</dt><dd class="profile-active">${player.status}</dd></div>
        <div><dt>Role</dt><dd>${player.role}</dd></div>
        <div><dt>Joined</dt><dd>${player.joinDate}</dd></div>
      </dl>
    </div>
    <div class="profile-data">
      <p class="profile-bio">${player.bio}</p>
      <div class="winnings-box"><span>Total winnings</span><strong>${player.winnings}</strong></div>
      <div class="results-heading"><h3>Achievements</h3><span>${player.achievements.length} results</span></div>
      <div class="results-table-wrap">
        <table class="results-table">
          <thead><tr><th>Date</th><th>Place</th><th>Tier</th><th>Tournament</th><th>Prize</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <button class="show-results" type="button" ${player.achievements.length <= 3 ? "disabled" : ""}>Show all results</button>
    </div>`;
  history.pushState({ profileModal: true }, "", `#profile-${player.id}`);
  profileHistoryOpen = true;
  profileModal.hidden = false;
  document.body.classList.add("modal-open");
  profileModal.querySelector(".profile-modal-back").focus();
}

function closeProfile(fromHistory = false) {
  if (!fromHistory && profileHistoryOpen) {
    history.back();
    return;
  }
  profileModal.hidden = true;
  document.body.classList.remove("modal-open");
  profileHistoryOpen = false;
}

document.querySelector("#roster-list").addEventListener("click", event => {
  const button = event.target.closest("[data-profile-id]");
  if (button) {
    const player = players.find(item => item.id === button.dataset.profileId);
    if (player) renderProfile(player);
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    renderMatches(currentMatchFilter);
    refreshYouTubeStatuses();
  }
});
setInterval(() => {
  renderMatches(currentMatchFilter);
  refreshYouTubeStatuses();
}, 60 * 1000);
profileModal.addEventListener("click", event => {
  if (event.target.matches("[data-close-profile]")) closeProfile();
  if (event.target.matches(".show-results")) {
    profileModal.querySelectorAll(".result-extra").forEach(row => { row.hidden = false; });
    event.target.textContent = "All results shown";
    event.target.disabled = true;
  }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !profileModal.hidden) closeProfile();
});
window.addEventListener("popstate", () => {
  if (!profileModal.hidden) closeProfile(true);
});

function renderAchievements() {
  const target = document.querySelector("#achievements-list");
  target.innerHTML = achievements.length ? `
    <div class="results-table-wrap">
      <table class="achievement-table">
        <thead>
          <tr><th>Date</th><th>Place</th><th>Tier</th><th>Tournament</th><th>Prize</th></tr>
        </thead>
        <tbody>
          ${achievements.map((item, index) => `<tr class="${index >= 15 ? "achievement-extra" : ""}" ${index >= 15 ? "hidden" : ""}><td>${item.date}</td><td><span class="placement-badge ${getPlacementClass(item.placement)}">${item.placement}</span></td><td>${item.tier}</td><td>${item.name}</td><td>${item.prize}</td></tr>`).join("")}
        </tbody>
      </table>
      ${achievements.length > 15 ? '<button class="show-achievements" type="button">Show all results</button>' : ""}
    </div>` : `<div class="empty-state"><span class="empty-icon">✦</span><h3>No achievements published yet.</h3><p>Liquipedia currently has no verified Team Electro achievements. Confirmed tournament results will appear here as they are published.</p></div>`;
}

function getPlacementClass(placement) {
  const place = Number.parseInt(placement, 10);
  if (place === 1) return "placement-first";
  if (place === 2) return "placement-second";
  if (place === 3) return "placement-third";
  return "placement-other";
}

document.querySelector("#achievements-list").addEventListener("click", event => {
  if (!event.target.matches(".show-achievements")) return;
  const expanded = event.target.dataset.expanded === "true";
  document.querySelectorAll("#achievements-list .achievement-extra").forEach(row => { row.hidden = expanded; });
  event.target.dataset.expanded = String(!expanded);
  event.target.textContent = expanded ? "Show all results" : "Show fewer results";
});

function updateCounts() {
  const counts = matches.reduce((result, match) => {
    result[match.status] += 1;
    return result;
  }, { live: 0, upcoming: 0, completed: 0 });
  document.querySelector("#count-all").textContent = matches.length;
  document.querySelector("#count-live").textContent = counts.live;
  document.querySelector("#count-upcoming").textContent = counts.upcoming;
  document.querySelector("#count-completed").textContent = counts.completed;
}

filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => { item.classList.remove("active"); item.setAttribute("aria-selected", "false"); });
  button.classList.add("active"); button.setAttribute("aria-selected", "true"); renderMatches(button.dataset.filter);
}));

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => { const open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }));

renderMatches(); renderRoster(); renderAchievements(); updateCounts();
refreshYouTubeStatuses();
