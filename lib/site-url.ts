export function resolveSiteUrl() {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const raw of candidates) {
    const value = raw?.trim();
    if (!value) continue;

    try {
      const href = /^https?:\/\//i.test(value) ? value : `https://${value}`;
      return new URL(href).origin;
    } catch {
      continue;
    }
  }

  return "http://localhost:3000";
}
