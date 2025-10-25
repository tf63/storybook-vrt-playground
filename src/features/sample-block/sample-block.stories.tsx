import type { Meta, StoryObj } from "@storybook/react"
import { SampleBlock } from "./sample-block"

type SampleBlockType = typeof SampleBlock

export default {
	title: "SampleBlock",
	component: SampleBlock,
	render: (props) => <SampleBlock {...props} />,
	decorators: [(Story) => <Story />],
} satisfies Meta<SampleBlockType>

export const Default: StoryObj<SampleBlockType> = {
	args: {},
}
