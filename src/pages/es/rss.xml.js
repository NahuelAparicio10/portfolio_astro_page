import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../../consts';
import { href } from '../../lib/href';

export async function GET(context) {
	const posts = await getCollection('es');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: href(`/blog/${post.id}/`, 'es'),
		})),
	});
}
