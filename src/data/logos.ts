export type LogoItem = { name: string; logo: string };

const groups = {
  design: import.meta.glob('../assets/logos/design/*.svg', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
  engines: import.meta.glob('../assets/logos/engines/*.svg', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
  programming: import.meta.glob('../assets/logos/programming_languages/*.svg', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
  ides: import.meta.glob('../assets/logos/ides/*.svg', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
  source_control: import.meta.glob('../assets/logos/source_control/*.svg', {
    eager: true,
    query: '?url',
    import: 'default',
  })

};

function toNiceName(filePath: string): string {
  const base = filePath.split('/').pop() || '';
  const withoutExt = base.replace(/\.[^.]+$/, '');
  const withoutPrefix = withoutExt.replace(/^\d+-/, ''); 
  const withoutLogo = withoutPrefix.replace(/-?logo$/i, '');
  const normalized = withoutLogo.replace(/[_-]+/g, ' ');
  const spaced = normalized.replace(/([a-z])([A-Z])/g, '$1 $2');
  const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
  return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}

export function loadLogosFrom(group: keyof typeof groups): LogoItem[] {
  const modules = groups[group];
  return Object.entries(modules).map(([filePath, url]) => ({
    name: toNiceName(filePath),
    logo: url as string,
  }));
}
export const logos: LogoItem[] = loadLogosFrom('programming');

