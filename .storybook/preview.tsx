import type { Preview } from "@storybook/nextjs-vite"

import "../src/app/globals.css"

const preview: Preview = {
	parameters: {
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
		<div className="flex items-center justify-center p-5">
			<Story />
		</div>
	),
	tags: ["autodocs"],
}

export default preview
