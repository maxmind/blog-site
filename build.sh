#!/bin/bash

set -eux

extra_args=()

if [[ ${PREVIEW:-} ]]; then
  extra_args+=("--buildFuture")
fi

hugo --gc --minify -b "$CF_PAGES_URL" "${extra_args[@]}"
