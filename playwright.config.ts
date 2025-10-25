import { defineConfig, devices } from "@playwright/test"

export default defineConfig({
	testDir: "./tests", // テストファイルのルートディレクトリ
	outputDir: "./tmp/vrt-results", // テスト結果の出力先ディレクトリ

	// NOTE: GitHub Actionsを試すために一時的にgit管理に入れる。本来は外部ストレージに入れる想定
	// snapshotDir: "./tmp/vrt-snapshots", // スクリーンショット保存先ディレクトリ
	snapshotDir: "./tests/vrt-snapshots", // スクリーンショット保存先ディレクトリ

	timeout: 30_000, // 各テストのタイムアウト(ms)
	expect: {
		timeout: 5_000, // expect() 系の待機タイムアウト
		toHaveScreenshot: {
			maxDiffPixelRatio: 0.01,
		},
	},

	fullyParallel: true, // 並列実行を有効化
	forbidOnly: !!process.env.CI, // CIで `test.only` を禁止
	retries: process.env.CI ? 2 : 0, // CI時の再試行回数
	workers: process.env.CI ? 2 : undefined, // 並列ワーカー数

	reporter: [
		// ["github"],
		["list"], // コンソールに結果出力
		["html", { open: "never", outputFolder: "tmp/vrt-report" }], // HTMLレポート生成
	],

	use: {
		baseURL: "http://host.docker.internal:6006",
		screenshot: "only-on-failure", // スクリーンショット保存
		trace: "on-first-retry", // トレース収集
		video: "off", // 動画保存設定
		viewport: { width: 1280, height: 720 },
		headless: true,
	},

	projects: [
		// ブラウザ別のプロジェクト設定
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},
		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
		{
			name: "chromium-mobile",
			use: { ...devices["Pixel 7"] },
		},
		{
			name: "webkit-mobile",
			use: { ...devices["iPhone 14"] },
		},
		// カスタムビューポート
		{
			name: "mobile-375",
			use: { browserName: "chromium", viewport: { width: 375, height: 812 } },
		},
		{
			name: "tablet-768",
			use: { browserName: "chromium", viewport: { width: 768, height: 1024 } },
		},
		{
			name: "desktop-1440",
			use: { browserName: "chromium", viewport: { width: 1440, height: 900 } },
		},
	],

	//   webServer: {
	//     command: 'npx serve dist -l 3000',  // テスト前に起動するコマンド
	//     port: 3000,
	//     reuseExistingServer: !process.env.CI,
	//   },
})
