# CLAUDE.md — aldemi.com.ua (персональний хаб розробника)
- Astro 7 + Tailwind 4 у `web/` → збірка `dist/`. Мови uk (default, без префікса) + en (`/en`); тексти UI — `web/src/i18n/ui.ts`.
- Проєкти — Content Collection: `web/src/content/projects/{uk,en}/<slug>.md` → `/projects/<slug>`.
- Контакти — лише в `web/src/config.ts`. Стиль — Tailwind-класи в компонентах `web/src/components/`.
- `/juno/` не зберігати в репо: копіюється build-скриптом з `$JUNO_DIR/landing`.
- Збірка: `JUNO_DIR=/home/user/juno bash scripts/build.sh`; перегляд: `cd web && npm run dev`.
- Правила: без секретів у коді; працює від 320px без горизонтального скролу; кожен новий текст — uk і en.
- Не змінювати візуальний стиль без запиту; мінімальні зміни.
- Економія токенів: читати файли через offset/limit, Grep перед Read; не читати dist/ і шрифти.
- Не комітити/пушити без прямого запиту власника.
