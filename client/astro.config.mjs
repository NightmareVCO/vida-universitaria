// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	adapter: node({
		mode: "standalone",
	}),
	env: {
		schema: {
			API_URL: envField.string({
				context: "client",
				access: "public",
			}),
			POST_PATH: envField.string({
				context: "client",
				access: "public",
			}),
			CATEGORY_PATH: envField.string({
				context: "client",
				access: "public",
			}),
			TAG_PATH: envField.string({
				context: "client",
				access: "public",
			}),
			USER_PATH: envField.string({
				context: "client",
				access: "public",
			}),
			MEDIA_PATH: envField.string({
				context: "client",
				access: "public",
			}),
			YOUTUBE_URL: envField.string({
				context: "client",
				access: "public",
			}),
			PAPERS_URL: envField.string({
				context: "client",
				access: "public",
			}),
		},
	},
});
