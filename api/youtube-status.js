export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const ids = String(request.query.ids || "")
    .split(",")
    .map(id => id.trim())
    .filter(Boolean);

  if (!apiKey) {
    return response.status(500).json({ error: "YOUTUBE_API_KEY is not configured." });
  }
  if (!ids.length || ids.length > 50 || ids.some(id => !/^[\w-]{11}$/.test(id))) {
    return response.status(400).json({ error: "Provide 1-50 valid YouTube video IDs." });
  }

  const params = new URLSearchParams({
    part: "liveStreamingDetails,status",
    id: ids.join(","),
    key: apiKey
  });

  try {
    const youtubeResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?${params}`);
    const payload = await youtubeResponse.json();
    if (!youtubeResponse.ok) {
      return response.status(502).json({ error: payload.error?.message || "YouTube API request failed." });
    }

    const now = Date.now();
    const statuses = Object.fromEntries(ids.map(id => [id, "completed"]));
    for (const video of payload.items || []) {
      const details = video.liveStreamingDetails;
      if (!details) {
        statuses[video.id] = "completed";
        continue;
      }
      if (details.actualEndTime) {
        statuses[video.id] = "completed";
        continue;
      }
      if (details.actualStartTime) {
        const startedAt = Date.parse(details.actualStartTime);
        statuses[video.id] = Number.isFinite(startedAt) && now - startedAt >= 12 * 60 * 60 * 1000
          ? "completed"
          : "live";
        continue;
      }
      statuses[video.id] = "upcoming";
    }

    response.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return response.status(200).json({ statuses, checkedAt: new Date(now).toISOString() });
  } catch (error) {
    console.error("YouTube status request failed:", error);
    return response.status(502).json({ error: "Unable to reach YouTube API." });
  }
}
