# aldemi.com.ua

Статичний персональний хаб: інтро розробника, портфоліо застосунків, контакти. Мови: uk (за замовчуванням) + en.

## Структура
- `site/` — джерела (`index.html`, `drivepad/`, `finddrive/`, `magentic/`, `css/site.css`, `js/config.js`, `js/i18n.js`, `fonts/`, `img/`)
- `/juno/` — лендинг Juno, **не зберігається тут**: копіюється при збірці з `$JUNO_DIR/landing` (`index-new.html` → `dist/juno/index.html` + css/js/img/fonts)
- `/junoclient/**`, `/junoadmin/**` — зарезервовані SPA-rewrites у `firebase.json` (копіюються з `JUNO_CLIENT_DIST` / `JUNO_ADMIN_DIST`)
- `scripts/build.sh` — збірка в `dist/`

## Збірка
`JUNO_DIR=/home/user/juno bash scripts/build.sh` → перегляд: `python3 -m http.server 4190 -d dist`

## Деплой (план)
Firebase Hosting, site `aldemi` у проєкті `juno-booking`, домен `aldemi.com.ua`: `firebase deploy --only hosting:aldemi`.

## TODO власника
- `js/config.js`: посилання client/admin для drivepad, finddrive, magentic; контакти (ім'я, email, Telegram, GitHub)
- `js/i18n.js`: текст інтро розробника, описи FindDrive/Magentic та їх 3 можливості (uk + en)
- Створити Firebase site `aldemi`, підключити домен
