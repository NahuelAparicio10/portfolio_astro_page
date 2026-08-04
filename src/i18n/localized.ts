import { DEFAULT_LOCALE, type Locale } from '../lib/href';

/**
 * A value that exists in every locale.
 *
 * Using a mapped type (rather than `{ en: T; es?: T }`) means adding a locale
 * to `LOCALES` turns every incomplete data entry into a compile error, instead
 * of silently rendering the default language.
 */
export type Localized<T> = Record<Locale, T>;

/** Resolves a localized value. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale] ?? value[DEFAULT_LOCALE];
}
