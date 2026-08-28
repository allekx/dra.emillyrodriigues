export const routes = {
  home: "/",
  bio: "/bio",
  services: "/servicos",
  service: (slug: string) => `/servicos/${slug}` as const,
} as const;
