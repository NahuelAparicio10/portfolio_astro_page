import { DEFAULT_LOCALE, getLocaleFromPath, type Locale } from '../lib/href';
import { en, type TranslationSchema } from './en';
import { es } from './es';

export { DEFAULT_LOCALE, LOCALES, type Locale } from '../lib/href';
export type { TranslationSchema } from './en';

const dictionaries: Record<Locale, TranslationSchema> = { en, es };

/**
 * Resolves the active locale from a URL. Pages are static, so this is the only
 * source of truth for language: never localStorage, never a client redirect.
 */
export function getLocale(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  return getLocaleFromPath(pathname);
}

/**
 * Returns the dictionary for a locale.
 *
 * `es.ts` is typed against the English schema, so a missing key fails the build
 * instead of rendering an empty string. The `?? en` guard only covers an
 * unknown locale reaching here at runtime.
 */
export function useTranslations(locale: Locale): TranslationSchema {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
