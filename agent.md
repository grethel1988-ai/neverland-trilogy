# 專案筆記（agent.md）— 永無島三部曲總網站（總入口）

## 決策紀錄（2026-11-15）
- **網站定位**：《永無島三部曲》國小國語文遊戲式線上測驗總入口網站，串聯第一部（低年級）、第二部（中年級）、第三部（高年級）三個 GitHub Pages 測驗網站。
- **視覺與版面風格**：
  - 沿用三部曲「日系 RPG × 視覺小說（Visual Novel）」設計規範（夜藍／叢林深綠／暮光紫紅動態主題切換、金色仙塵粒子 Canvas、毛玻璃擬態卡片、金色雙框 VN 對話框、打字機特效）。
  - 採用 **100dvh 單一螢幕無整頁捲軸** 響應式架構，頂部左側為「✦ 國小國語文能力指標題目總匯 ✦」與「永無島三部曲」主標題，右側為四大頁籤：
    1. `🏰 網站連結`：三部曲大畫框卡片（主副標題置中、同行夥伴置中且僅顯示頭部特寫、底部單一「出發冒險 ▶」按鈕）＋底部夥伴導覽對話框。
    2. `📖 故事與關卡`：切換三部曲前情提要、挑戰難度／生命象徵／榮譽證書、關卡卡片與過場對話預覽（按鈕為「立即挑戰 ▶」）。
    3. `🧚 角色圖鑑`：13 位登場角色，左側為 4×3 滿版大圖卡（僅顯示圓形頭像與角色名），右側為自適應大立繪、角色介紹與「登場招呼／答對誇獎／答錯鼓勵」台詞試聽（庫比設定為兔裝男孩，失落男孩標籤統一為「失落男孩」）。
    4. `🎮 玩法與課綱指標`：介紹三種難度、夥伴防弊回饋、教育部標準標楷體五大互動題型展示台，以及 108 課綱國語文第一至第三學習階段共 33 項能力指標三欄對照表（頂部三行標題置中）。
  - 全站所有對話框圓形人物頭像與同行夥伴小圓頭像皆透過 CSS `transform: scale(...)` 與個別角色 `transform-origin` 對焦，只顯示清晰的角色頭部特寫。

## 上次做到哪（2026-11-15）
- 完成總入口網站建置：`index.html`、`css/style.css`、`js/portal.js`、`README.md`、`.gitignore`、`.nojekyll` 及 `assets/img/*.webp`（含三部曲封面 `cover1.webp`、`cover2.webp`、`cover3.webp`）。
- 依據使用者視覺回饋完成多輪版面精修（移除多餘副標與按鈕、調整左上角主標題、使用 Container Queries `cqi`/`cqh` 放大各頁籤卡片圖文以貼合畫框、修正角色設定文字與頭部特寫裁切）。
- 完成 `git init` 本地版本控制與初始提交。

## 下一步
- 確認是否要將 `永無島三部曲總網站` 推送至 GitHub 公開 Repository（例如 `neverland-trilogy`）並啟用 GitHub Pages 線上部署。
- 若需擷取總入口網站的畫面總覽圖，可沿用 Headless Chrome 腳本擷取四大頁籤。

## 踩坑與注意事項
- Windows 環境下預設 `python` 為 WindowsApps 假捷徑，執行 Python 腳本需使用 `py -X utf8` 或 `C:\Users\User\AppData\Local\Python\bin\python.exe -X utf8`。
- 使用 CSS Container Queries（`container-type: size`）放大畫框內文字與圖片時，在窄螢幕（`@media (max-width: 960px)`）需切換為 `container-type: inline-size` 並賦予適當 `min-height`，避免高度塌陷。
- 角色原圖多為全身立繪，在圓形小頭像（`.mini-avatars .av` 與 `.face`）中若只用 `object-fit: cover` 會顯示全身導致臉部過小；透過內嵌 `<img>` 搭配針對各角色的 `transform: scale(2.2~3.15)` 與 `transform-origin` 即可精準只顯示頭部特寫。
