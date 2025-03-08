import type { VideoPost, VideoResponse } from '@data/_types/types';
import { XMLParser } from 'fast-xml-parser';

export const getVideos = async ({
	youtubeUrl,
}: { youtubeUrl: string }): Promise<[VideoPost[] | null, Error | null]> => {
	try {
		const url = new URL(youtubeUrl);
		const xmlParser = new XMLParser({ ignoreAttributes: false });

		const response = await fetch(url.toString());
		const xmlText = await response.text();
		const data = xmlParser.parse(xmlText);
		const videoData = Array.isArray(data.feed.entry) ? data.feed.entry : [data.feed.entry];

		const videos: VideoPost[] = videoData.slice(0, 6).map((video: VideoResponse) => {
			const title = video?.title || '';
			const link = video.link?.['@_href'] || '';
			const published = video.published || '';
			const media = video['media:group']?.['media:thumbnail'] || {};
			const image = media['@_url'] || '';
			return { title, link, published, image };
		});

		return [videos, null];
	} catch (error) {
		const newError = new Error(error instanceof Error ? error.message : String(error));
		return [null, newError];
	}
};
