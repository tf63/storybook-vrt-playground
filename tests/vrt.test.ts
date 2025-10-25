import { expect, test } from "@playwright/test"
import stories from "../tmp/storybook-static/index.json"

const storyInfos = Object.values(stories.entries)
	.filter(({ type }) => type === "story")
	.map((story) => ({
		id: story.id,
		title: story.title,
		name: story.name,
	}))

for (const story of storyInfos) {
	test(`VRT: ${story.title} / ${story.name}`, async ({ page }) => {
		await page.goto(`iframe?id=${story.id}`, {
			waitUntil: "networkidle",
		})
		// Storybookのアニメーションや遅延描画を避けるための待機
		await page.waitForTimeout(300)
		await expect(page).toHaveScreenshot(`${story.id}.png`)
	})
}
