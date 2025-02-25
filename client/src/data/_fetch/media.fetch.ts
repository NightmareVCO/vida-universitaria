export const getFeatureMediaUrlById = async ({
	apiUrl,
	mediaId,
}: { apiUrl: string; mediaId: string }): Promise<[string | null, Error | null]> => {
	try {
		const url = new URL(`${apiUrl}/media/${mediaId}`);

		const response = await fetch(url.toString());
		const media = await response.json();

		return [media.source_url, null];
	} catch (error) {
		const newError = new Error(error instanceof Error ? error.message : String(error));
		return [null, newError];
	}
};
