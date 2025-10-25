import { expect, test } from "@playwright/test"
import stories from "../storybook-static/index.json"

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

// import { expect, test } from "@playwright/test"
// import stories from "../tmp/stories.json"

// for (const story of stories) {
// 	test(`VRT: ${story.title} / ${story.name}`, async ({ page }) => {
// 		await page.goto(`/iframe?id=${story.id}&viewMode=story&globals=&args=`, {
// 			waitUntil: "networkidle",
// 		})
// 		// Storybookのアニメーションや遅延描画を避けるための待機
// 		await page.waitForTimeout(300)
// 		await expect(page).toHaveScreenshot(`${story.id}.png`)
// 	})
// }
