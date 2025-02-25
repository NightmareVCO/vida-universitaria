import type { Category } from '@data/_types/types';

export const getClubCategoryId = async ({
	apiUrl,
	club,
}: { apiUrl: string; club: string }): Promise<[number | null, Error | null]> => {
	try {
		const url = new URL(`${apiUrl}/categories`);

		const response = await fetch(url.toString());
		const categories: Category[] = await response.json();

		const categoryId = categories.find((category) => category.name === club)?.id;
		if (!categoryId) throw new Error(`Category ${club} not found`);

		return [categoryId, null];
	} catch (error) {
		const newError = new Error(error instanceof Error ? error.message : String(error));
		return [null, newError];
	}
};
