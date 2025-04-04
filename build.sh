#!/bin/bash

set -eux

extra_args=()

if [[ "${BUILD_ENV:-}" == "preview" ]]; then
  extra_args+=("--buildFuture")
fi

hugo --gc --minify -b "$CF_PAGES_URL" "${extra_args[@]}"
