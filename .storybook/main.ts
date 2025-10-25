import path from "node:path"
import type { StorybookConfig } from "@storybook/nextjs-vite"
import { mergeConfig } from "vite"

const config: StorybookConfig = {
	stories: [{ titlePrefix: "Features", directory: "../src/features", files: "**/*.stories.*" }],
	addons: ["@chromatic-com/storybook", "@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-vitest"],
	framework: {
		name: "@storybook/nextjs-vite",
		options: {},
	},
	viteFinal: (config) => {
		return mergeConfig(config, {
			plugins: [],
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "../src"),
				},
			},
		})
	},
}

export default config
