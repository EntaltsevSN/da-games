export type SiteNavItem = {
  to: string;
  label: string;
  hash?: string;
};

export const siteNavItems: SiteNavItem[] = [
  { to: '/#about', hash: 'about', label: 'Об игре' },
  { to: '/#features', hash: 'features', label: 'Особенности' },
  { to: '/#cta', hash: 'cta', label: 'Запуск' },
];

export const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
