/**
 * Single source of truth for building internal URLs.
 *
 * Nothing in the project should write a path literal that includes the
 * deployment base (today `/portfolio`). Changing `base` in `astro.config.mjs`
 * — or moving to a custom domain — must be a one-line change, not a
 * find-and-replace across the codebase.
 */

export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/**
 * Astro reports `base` with or without a trailing slash depending on how it is
 * configured, so it is normalised once here to a bare prefix: '' or '/portfolio'.
 */
const BASE = `/${(import.meta.env.BASE_URL ?? '/').replace(/^\/+|\/+$/g, '')}`.replace(/^\/$/, '');

function normalizePath(path: string): string {
  const trimmed = path.trim();
  if (trimmed === '' || trimmed === '/') return '/';
  return `/${trimmed.replace(/^\/+/, '')}`;
}

/**
 * Builds a URL for an internal page.
 *
 * href('/about')        → '/portfolio/about'
 * href('/about', 'es')  → '/portfolio/es/about'
 * href('/')             → '/portfolio/'
 */
export function href(path: string = '/', locale: Locale = DEFAULT_LOCALE): string {
  const normalized = normalizePath(path);
  const localePrefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;

  if (normalized === '/') {
    return `${BASE}${localePrefix}/`;
  }
  return `${BASE}${localePrefix}${normalized}`;
}

/**
 * Builds a URL for a static file served from `public/`.
 * Assets are not localised, so this never adds a locale prefix.
 *
 * asset('/videos/fondo.mp4') → '/portfolio/videos/fondo.mp4'
 */
export function asset(path: string): string {
  return `${BASE}${normalizePath(path)}`;
}

/** Removes the deployment base from a pathname, leaving a locale-aware path. */
export function stripBase(pathname: string): string {
  if (BASE !== '' && pathname.startsWith(BASE)) {
    return normalizePath(pathname.slice(BASE.length));
  }
  return normalizePath(pathname);
}

/** Detects the locale of a pathname. Defaults to `DEFAULT_LOCALE`. */
export function getLocaleFromPath(pathname: string): Locale {
  const path = stripBase(pathname);
  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (path === `/${locale}` || path.startsWith(`/${locale}/`)) return locale;
  }
  return DEFAULT_LOCALE;
}

/** Strips the locale prefix, yielding the path shared across languages. */
export function getPathWithoutLocale(pathname: string): string {
  const path = stripBase(pathname);
  const locale = getLocaleFromPath(pathname);
  if (locale === DEFAULT_LOCALE) return path;
  return normalizePath(path.slice(`/${locale}`.length));
}

/**
 * The equivalent URL for the same page in another language.
 * Used by the header language switch, so it can navigate without doing any
 * path arithmetic in the browser.
 */
export function localizedUrl(pathname: string, locale: Locale): string {
  return href(getPathWithoutLocale(pathname), locale);
}

/** Compares two internal URLs ignoring a trailing slash. */
export function isSamePath(a: string, b: string): boolean {
  const strip = (value: string) => (value !== '/' && value.endsWith('/') ? value.slice(0, -1) : value);
  return strip(a) === strip(b);
}
