#!/usr/bin/env bash
set -euo pipefail

main() {
  DART_SASS_VERSION=1.77.8
  HUGO_VERSION=0.124.1

  export TZ=UTC

  echo "Installing Dart Sass..."
  curl -fLJO "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
  tar -C "${HOME}/.local" -xf "dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
  export PATH="${HOME}/.local/dart-sass:${PATH}"

  echo "Installing Hugo Extended..."
  curl -fLJO "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
  mkdir -p "${HOME}/.local/hugo"
  tar -C "${HOME}/.local/hugo" -xf "hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
  export PATH="${HOME}/.local/hugo:${PATH}"

  echo "Versions:"
  hugo version
  sass --version

  echo "Building Hugo site..."
  hugo --gc --minify
}

main "$@"
