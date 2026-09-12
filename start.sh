#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
BACKEND_PORT=8002
FRONTEND_PORT=3002

BACKEND_CMD="cd $(printf '%q' "$ROOT/backend") && UVICORN_PORT=$BACKEND_PORT ./serve --port $BACKEND_PORT"
FRONTEND_CMD="cd $(printf '%q' "$ROOT/frontend") && npm run dev"

if [[ "$(uname)" == "Darwin" ]]; then
  osascript <<APPLESCRIPT
tell application "Terminal"
  activate
  do script "$BACKEND_CMD"
  do script "$FRONTEND_CMD"
end tell
APPLESCRIPT
  echo "Backend  → http://127.0.0.1:${BACKEND_PORT}  (new Terminal window)"
  echo "Frontend → http://localhost:${FRONTEND_PORT}  (new Terminal window)"
  echo "Close each window (or Ctrl+C in it) to stop that service."
elif command -v gnome-terminal &>/dev/null; then
  gnome-terminal -- bash -c "$BACKEND_CMD; exec bash"
  gnome-terminal -- bash -c "$FRONTEND_CMD; exec bash"
  echo "Backend  → http://127.0.0.1:${BACKEND_PORT}"
  echo "Frontend → http://localhost:${FRONTEND_PORT}"
else
  echo "Open two terminals and run:"
  echo "  $BACKEND_CMD"
  echo "  $FRONTEND_CMD"
fi
