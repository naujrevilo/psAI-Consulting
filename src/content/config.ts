import { z, defineCollection } from 'astro:content';

const podcastCollection = defineCollection({
	schema: z.object({
		embedURL: z.string(),
		episodeNumber:z.number().optional(),
		title: z.string(),
		description: z.string(),
		cover:z.string(),
	}),
});

const reportsCollection = defineCollection({
	schema: z.object({
		reportNumber:z.number().optional(),
        documentTitle: z.string().optional(),
		metaDescription: z.string().optional(),
		heading: z.string(),
		description: z.string(),
		heroImage: z.string().optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		type:z.string().optional()
	}),
});

export const collections = {
    // 'blog': blogCollection,
    'podcast': podcastCollection,
	'reports': reportsCollection
};