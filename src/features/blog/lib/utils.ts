const AVERAGE_WPM = 220;

export function calculateReadingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[`#>*_[\]\-]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / AVERAGE_WPM));
}

export function slugifyTag(tag: string) {
  return tag
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
