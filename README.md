# Storybook with Playwright で VRT をやる

## 懸念事項

- 待機時間、AnimationがあるStoryはどうするか
  - Story名にanimationとか入れてフィルタリングする?
  - VRT用のplaywrightコードをStoryにcolocateさせて制御する?
  - いずれにせよだるい、`tests/vrt.test.ts` で一括収集するべきではない
