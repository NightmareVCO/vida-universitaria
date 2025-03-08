import type { PaperPost, PaperResponse } from '@data/_types/types';
import { XMLParser } from 'fast-xml-parser';

export const getPapers = async ({
	papersUrl,
}: { papersUrl: string }): Promise<[PaperPost[] | null, Error | null]> => {
	try {
		const response = await fetch(papersUrl);
		const xmlString = await response.text();
		const xmlParser = new XMLParser({ ignoreAttributes: false });
		const data = xmlParser.parse(xmlString);

		const papersData = Array.isArray(data.rss.channel.item)
			? data.rss.channel.item
			: [data.rss.channel.item];

		const papers: PaperPost[] = papersData.slice(0, 6).map((paper: PaperResponse) => {
			const title = paper.title ?? '';
			const link = paper.link ?? '';
			const pubDate = paper.pubDate ?? '';
			const media: { '@_url'?: string } = paper['media:content'] ?? {};
			const image = media['@_url'] ?? '';
			return { title, link, pubDate, image };
		});

		return [papers, null];
	} catch (error) {
		const newError = new Error(error instanceof Error ? error.message : String(error));
		return [null, newError];
	}
};
