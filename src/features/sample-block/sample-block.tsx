import { SampleCard } from "../sample-card"

type SampleBlockProps = object

export const SampleBlock = ({}: SampleBlockProps) => {
	return (
		<div className="flex w-full flex-col gap-5">
			<SampleCard text="SampleCard Component" />
		</div>
	)
}
