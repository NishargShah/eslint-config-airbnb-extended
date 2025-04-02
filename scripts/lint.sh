#!/bin/bash

forCheck="--for-check"
isForCheck="$([[ $1 == $forCheck ]] && echo 0 || echo 1)"

echo "Started"

if [ "$isForCheck" -eq 0 ]; then
  npm run --silent format:check -- --log-level silent
  echo "Prettier Checked"

  npm run --silent lint
  echo "ESLint Checked"

  npm run --silent typecheck
  echo "TypeScript Checked"
else
  npm run --silent format:fix -- --log-level silent
  echo "Prettier Completed"

  npm run --silent lint:fix
  echo "ESLint Completed"

  npm run --silent typecheck
  echo "TypeScript Completed"
fi

echo "Done"