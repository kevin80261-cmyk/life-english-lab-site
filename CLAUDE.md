# 生活英文研究所網站

Astro 靜態網站（跟 savinglabtw.com 同一套做法），還沒上線。品牌、角色、營運規則在 OneDrive 專案資料夾 `!AI 自動化賺錢/2026.10.18 學英文 網站`（先讀那裡的 CLAUDE.md 與 data/營運備忘.md）。

- 課程資料全部在 `src/data/lessons.ts`：一課 = 一個生活情境（單字＋情境句子）；新增課程只改這個檔案。
- 課程頁 `src/pages/lessons/[id].astro`：單字翻卡、🔊 發音（瀏覽器內建 speechSynthesis，免費）、情境句子（正常／慢速）、小測驗（看中文選英文、聽音選中文、拼字，隨機出 8 題）。進度存在使用者瀏覽器的 localStorage `lel-progress`，不需要帳號或後端。
- 英文要母語人士自然的說法，中文用台灣用語；只用繁體中文。
- 指令：`npm run dev`（本機預覽）、`npm run build`（輸出到 `dist/`）。
