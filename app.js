const matches = [
  {
    date: "20",
    month: "OCT",
    tournament: "Bangladesh Free Fire Pro League S4",
    status: "live",
    time: "8:00 PM",
    livestream: "https://www.youtube.com/"
  },
  {
    date: "25",
    month: "OCT",
    tournament: "Bangladesh Free Fire League S#",
    status: "upcoming",
    time: "8:00 PM",
    livestream: "https://www.youtube.com/"
  },
  {
    date: "19",
    month: "OCT",
    tournament: "FFWS Gateway",
    status: "completed",
    time: "7:30 PM",
    livestream: "https://www.youtube.com/"
  },
  {
    date: "12",
    month: "OCT",
    tournament: "ASIA Invitational",
    status: "completed",
    time: "8:00 PM",
    livestream: "https://www.youtube.com/"
  }
];
const players = [
];
const achievements = [];

const matchList = document.querySelector("#matches-list");
const filters = document.querySelectorAll(".filter");

function renderMatches(filter = "all") {
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
    target.innerHTML = `<div class="data-empty roster-empty"><div class="empty-index">ROSTER / 001</div><div><span class="empty-icon">✦</span><h3>Names worth waiting for.</h3><p>Verified player profiles, roles, and approved portraits will be published here when confirmed by the community.</p></div><span class="empty-state-label">ROSTER DATA PENDING</span></div>`;
    return;
  }
  target.innerHTML = players.map(player => `
    <article class="player-card">
      <div class="player-art"><span class="player-number">${player.number}</span></div>
      <div class="player-details"><span class="player-role">${player.role}</span><h3>${player.nickname}</h3><div class="unverified">${player.note}</div></div>
    </article>`).join("");
}

function renderHistory() {
  const target = document.querySelector("#history-list");
  target.innerHTML = achievements.length ? achievements.map(item => `<article class="timeline-entry"><div class="timeline-date">${item.date}</div><div><h3>${item.name}</h3><p>${item.description}</p></div><div class="placement">${item.placement}<small>${item.tier}</small></div></article>`).join("") : `<div class="empty-state"><span class="empty-icon">✦</span><h3>The archive is being verified.</h3><p>Competitive results will appear once confirmed from reliable public sources.</p></div>`;
}

function updateCounts() {
  document.querySelector("#count-all").textContent = matches.length;
  document.querySelector("#count-live").textContent = matches.filter(m => m.status === "live").length;
  document.querySelector("#count-upcoming").textContent = matches.filter(m => m.status === "upcoming").length;
  document.querySelector("#count-completed").textContent = matches.filter(m => m.status === "completed").length;
}

filters.forEach(button => button.addEventListener("click", () => {
  filters.forEach(item => { item.classList.remove("active"); item.setAttribute("aria-selected", "false"); });
  button.classList.add("active"); button.setAttribute("aria-selected", "true"); renderMatches(button.dataset.filter);
}));

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => { const open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }));

renderMatches(); renderRoster(); renderHistory(); updateCounts();
