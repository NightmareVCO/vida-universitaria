export type StudentGroup = {
	title: string;
	initials: string;
	label: string;
	shortDescription?: string;
	description: string;
	campus: string;
	logo: string;
	mission?: string;
	vision?: string;
	faculty?: string;
	career?: string;
	website?: string;
	path?: string;
	formLink?: string;
	socialMedia?: {
		name: string;
		link: string;
	}[];
};

export type BulletPoint = {
	description: string;
};

export type BulletPointsGroup = {
	title?: string;
	bulletPoints: BulletPoint[];
};

export type MainCardData = {
	title: string;
	description: string;
	icon: string;
	link: string;
	label?: string;
};

export type Activity = {
	id?: number;
	image: string;
	title: string;
	description: string;
	date: string;
	academicGroup: string;
};

export type NumberData = {
	count: number;
	description: string;
	suffix: string;
};

export type FooterData = {
	logoSection: {
		description: string;
		contact: {
			phone: string;
			email: string;
		};
	};
	columns: {
		title: string;
		links: { text: string; url: string }[];
	}[];
};

export type NavItem = {
	title: string;
	link?: string;
	isActive?: boolean;
	children?: NavItem[];
};

export type Hero = {
	title: string;
	description: string;
	image: string;
	infoLink?: string;
	infoText?: string;
	contactLink?: string;
	contactText?: string;
};

export type Campus = 'CSTI' | 'CSD';

export enum CampusEnum {
	CSTI = 'CSTI',
	CSD = 'CSD',
}

export type Post = {
	id: number;
	date: string;
	date_gmt: string;
	guid: object;
	modified: string;
	modified_gmt: string;
	slug: string;
	status: string;
	type: string;
	link: string;
	featured_media: number;
	categories: number[];
	title: {
		rendered: string;
	};
	excerpt: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
};

export type Category = {
	id: number;
	name: string;
	slug: string;
	taxonomy: string;
	parent: number;
	// biome-ignore lint/suspicious/noExplicitAny: no type information available
	meta: any[];
	// biome-ignore lint/suspicious/noExplicitAny: no type information available
	_links: any[];
};

export type VideoPost = {
	title: string;
	link: string;
	published: string;
	image: string;
};

export type VideoResponse = {
	title: string;
	link: { '@_href': string };
	published: string;
	'media:group': { 'media:thumbnail': { '@_url': string } };
};

export type PaperPost = {
	title: string;
	link: string;
	pubDate: string;
	image: string;
};

export type PaperResponse = {
	title?: string;
	link?: string;
	category: string[];
	pubDate?: string;
	'media:content'?: { '@_url': string };
	image?: string;
};

export type AccordionItemData = {
	title: string;
	content: string;
};

export type AccordionData = {
	title: string;
	items: AccordionItemData[];
};
