import type { Preview } from "@storybook/nextjs-vite"

import "../src/app/globals.css"

const preview: Preview = {
	parameters: {
		layout: "fullscreen",
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: [""],
			},
		},
		a11y: {
			config: {
				rules: [{ id: "color-contrast", enabled: false }],
			},
		},
	},
	decorators: (Story) => (
		<div className="w-full p-8 flex items-center justify-center">
			<Story />
		</div>
	),
	tags: ["autodocs"],
}

export default preview
