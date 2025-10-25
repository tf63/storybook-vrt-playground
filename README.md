# Storybook with Playwright で VRT をやる

## TODO

- [x] VRT専用コンテナ化 (通常のPlaywrightコンテナと分ける想定)
- [ ] Actions
- [ ] ファイル分割
- [ ] worker
- [ ] コミットハッシュベースの差分検出
- [ ] ダークモード対応

## あそびかた

まえじゅんび

```shell
docker compose up -d
pnpm install
```

VRT実行 (StorybookのビルドとPlaywrightテストの実行)

```shell
pnpm playwright
```

Playwrightレポート確認 (http://localhost:9323)

```shell
pnpm playwright:report
```

## 懸念事項

- 待機時間、AnimationがあるStoryはどうするか
  - Story名にanimationとか入れてフィルタリングする?
  - VRT用のplaywrightコードをStoryにcolocateさせて制御する?
  - いずれにせよだるい、`tests/vrt.test.ts` で一括収集するべきではない
