## Vercel YouTube status setup

The match center checks each linked YouTube video through `/api/youtube-status`.
Set the YouTube Data API key in Vercel without committing it to the repository:

1. In Google Cloud, enable **YouTube Data API v3** and create an API key.
2. In Vercel, open the project **Settings → Environment Variables**.
3. Add `YOUTUBE_API_KEY` with the API key for Preview and Production.
4. Redeploy the project.

The browser only calls the same-origin Vercel function. The API key is never
sent to the browser. Statuses are refreshed on page load, when returning to the
tab, and every minute while the page is open. A stream is considered live when
YouTube reports `actualStartTime` without `actualEndTime`; after 12 hours, the
fallback marks it completed.