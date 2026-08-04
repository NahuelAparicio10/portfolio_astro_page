import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { slugifyTag } from '../../../../lib/slug';
import { href } from '../../../../lib/href';

export async function getStaticPaths() {
  const posts = await getCollection('es');
  const tags = [...new Set(posts.flatMap((p) => p.data.tags || []))];
  return tags.map((t) => ({ params: { tag: slugifyTag(t) } }));
}

export async function GET(context) {
  const { tag } = context.params;
  const posts = (await getCollection('es')).filter((p) =>
    (p.data.tags || []).some((t) => slugifyTag(t) === tag)
  );
  return rss({
    title: `Tag: ${tag}`,
    description: `Latest posts tagged ${tag}`,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: href(`/blog/${post.id}/`, 'es'),
    })),
  });
}


