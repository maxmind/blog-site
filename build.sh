#!/bin/bash

set -eu

# based on https://discourse.gohugo.io/t/using-dart-sass-hugo-and-netlify/37099/7
# - thanks, @bep!

echo "Install Dart Sass Embedded..."

curl -LJO https://github.com/sass/dart-sass-embedded/releases/download/${DARTSASS_VERSION}/sass_embedded-${DARTSASS_VERSION}-linux-x64.tar.gz;

tar -xvf sass_embedded-${DARTSASS_VERSION}-linux-x64.tar.gz;

export PATH="$PATH:$PWD/sass_embedded"
dart-sass-embedded --version

echo "Building..."

hugo --gc --minify -b "$CF_PAGES_URL"
