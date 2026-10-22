#!/usr/bin/env bash
# Збірка: site/ -> dist/ (+ Juno landing та SPA з зовнішніх джерел). Ідемпотентна.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$ROOT/dist"
rm -rf "$DIST"; mkdir -p "$DIST"
cp -R "$ROOT/site/." "$DIST/"
if [ -n "${JUNO_DIR:-}" ] && [ -d "$JUNO_DIR/landing" ]; then
  L="$JUNO_DIR/landing"; mkdir -p "$DIST/juno"
  # <base href="/juno/">: відносні css/js/img лендингу мають братися з /juno/, навіть якщо адреса /juno без слеша
  sed 's|<head>|<head><base href="/juno/">|' "$L/index-new.html" > "$DIST/juno/index.html"
  for d in css js img fonts; do [ -d "$L/$d" ] && cp -R "$L/$d" "$DIST/juno/$d"; done
  echo "Juno landing -> dist/juno"
fi
if [ -n "${JUNO_ADMIN_DIST:-}" ] && [ -d "$JUNO_ADMIN_DIST" ]; then
  mkdir -p "$DIST/junoadmin"; cp -R "$JUNO_ADMIN_DIST/." "$DIST/junoadmin/"; echo "junoadmin ok"
fi
if [ -n "${JUNO_CLIENT_DIST:-}" ] && [ -d "$JUNO_CLIENT_DIST" ]; then
  mkdir -p "$DIST/junoclient"; cp -R "$JUNO_CLIENT_DIST/." "$DIST/junoclient/"; echo "junoclient ok"
fi
# Конфіг деплою: firebase.json + rewrites підшляхів Juno (hosting-subpath.json з репо застосунків)
node "$ROOT/scripts/merge-rewrites.mjs" "${JUNO_DIR:-}/hosting-subpath.json" "${JUNO_CLIENT_DIR:-}/hosting-subpath.json"
echo "Build OK: $DIST"
