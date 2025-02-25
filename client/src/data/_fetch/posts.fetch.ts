import type { StudentGroupsEnumCSTI } from '@data/_centralized/groups/studentsGroups.data';
import { getClubCategoryId } from '@data/_fetch/categories.fetch';
import { getFeatureMediaUrlById } from '@data/_fetch/media.fetch';
import type { Activity, Campus, Category, Post } from '@data/_types/types';

export const getPosts = async (apiUrl: string): Promise<[Post[] | null, Error | null]> => {
	try {
		const url = new URL(`${apiUrl}/posts`);

		const response = await fetch(url.toString());
		const posts: Post[] = await response.json();
		if (!posts) throw new Error('Posts not found');

		return [posts, null];
	} catch (error) {
		const newError = new Error(error instanceof Error ? error.message : String(error));
		return [null, newError];
	}
};

export const getPostById = async ({
	apiUrl,
	postId,
}: { apiUrl: string; postId: string }): Promise<[Post | null, Error | null]> => {
	try {
		const url = new URL(`${apiUrl}/posts/${postId}`);

		const response = await fetch(url.toString());
		const post: Post = await response.json();
		if (!post) throw new Error('Post not found');

		return [post, null];
	} catch (error) {
		const newError = new Error(error instanceof Error ? error.message : String(error));
		return [null, newError];
	}
};

export const getPostsByClub = async ({
	apiUrl,
	club,
}: { apiUrl: string; club: string }): Promise<[Activity[] | null, Error | null]> => {
	try {
		const [categoryId, error] = await getClubCategoryId({ apiUrl, club });
		if (error) throw error;

		const url = new URL(`${apiUrl}/posts&categories=${categoryId}`);
		const response = await fetch(url.toString());
		const posts: Post[] = await response.json();

		if (!posts) throw new Error('Posts not found');

		const activitiesPromises: Promise<Activity>[] = posts.map(async (post: Post) => {
			const [image, error] = await getFeatureMediaUrlById({
				apiUrl,
				mediaId: post.featured_media.toString(),
			});
			if (error) throw error;

			return {
				id: post.id,
				image: image,
				title: post.title.rendered,
				description: post.excerpt.rendered,
				date: new Date(post.date).toLocaleDateString(),
				academicGroup: club,
			} as Activity;
		});

		const activities = await Promise.all(activitiesPromises);
		if (!activities) throw new Error('Activities not found');

		return [activities, null];
	} catch (error) {
		const newError = new Error(error instanceof Error ? error.message : String(error));
		return [null, newError];
	}
};

export const getPostsByCampusAndClub = async ({
	apiUrl,
	campus,
	club,
}: { apiUrl: string; campus: Campus, club? : StudentGroupsEnumCSTI }): Promise<[Activity[] | null, Error | null]> => {
	try {
		const postsUrl = new URL(`${apiUrl}/posts`);
		const categoriesUrl = new URL(`${apiUrl}/categories`);
	
		const [postsResponse, categoriesResponse] = await Promise.all([
			fetch(postsUrl.toString()),
			fetch(categoriesUrl.toString()),
		]);
		const [posts, categories] = await Promise.all([
			postsResponse.json(),
			categoriesResponse.json(),
		]);
		if (!posts || !categories) throw new Error('Posts or Categories not found');

		const activitiesPromises: Activity[] = posts.map(async (post: Post) => {
			const category = categories.find((category: Category) => category.id === post.categories[0]);
			if (!category) throw new Error('Category not found');

			const [image, error] = await getFeatureMediaUrlById({
				apiUrl,
				mediaId: post.featured_media.toString(),
			});
			if (error) throw error;

			return {
				id: post.id,
				image: image,
				title: post.title.rendered,
				description: post.excerpt.rendered,
				date: new Date(post.date).toLocaleDateString(),
				academicGroup: category.name,
			} as Activity;
		});

		const activities = await Promise.all(activitiesPromises);
		if (!activities) throw new Error('Activities not found');

		const filteredActivities = activities.filter((activity) => 
			activity.academicGroup.includes(campus),
		);
		if (!filteredActivities) throw new Error('Activities not found');

		const clubName = club?.split('-').join(' - ') ?? '';
		let filteredActivitiesByClub: Activity[] = [];
		if (club) {
				filteredActivitiesByClub = filteredActivities.filter((activity) =>
				activity.academicGroup.includes(clubName),
			);
		}

		if (club) return [filteredActivitiesByClub, null];
		return [filteredActivities, null];
	} catch (error) {
		const newError = new Error(error instanceof Error ? error.message : String(error));
		return [null, newError];
	}
};
