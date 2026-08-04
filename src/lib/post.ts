import type { CollectionEntry } from 'astro:content';
import type { Locale } from './href';

/**
 * A blog post in either language.
 *
 * The two collections share an identical schema, so components can accept
 * either. Before this existed there were parallel `ES_` copies of every card
 * component whose only difference was this type parameter.
 */
export type Post = CollectionEntry<'blog'> | CollectionEntry<'es'>;

/** Content collection backing a locale. */
export function collectionFor(locale: Locale): 'blog' | 'es' {
  return locale === 'es' ? 'es' : 'blog';
}
