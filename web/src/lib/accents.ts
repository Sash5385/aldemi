export const accents: Record<string, string> = {
  finddrive: '#34d399',
  drivepad: '#60a5fa',
  juno: '#f472b6',
  magentic: '#a78bfa',
};
export const accentOf = (slug: string) => accents[slug] ?? '#34d399';
