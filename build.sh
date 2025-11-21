#!/bin/bash

set -eux

extra_args=()

if [[ "${BUILD_ENV:-}" == "preview" ]]; then
  extra_args+=("--buildFuture")
fi

# Generate _headers file from TypeScript configuration
npm run build:headers

hugo --gc --minify -b "$CF_PAGES_URL" "${extra_args[@]}"
