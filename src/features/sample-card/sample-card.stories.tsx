import type { Meta, StoryObj } from "@storybook/react"
import { SampleCard } from "./sample-card"

type SampleCardType = typeof SampleCard

export default {
	title: "SampleCard",
	component: SampleCard,
	render: (props) => <SampleCard {...props} />,
	decorators: [
		(Story) => (
			<div className="w-80">
				<Story />
			</div>
		),
	],
} satisfies Meta<SampleCardType>

export const Default: StoryObj<SampleCardType> = {
	args: { text: "SampleCard Component" },
}
