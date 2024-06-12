#!/bin/bash

cd "$(dirname "$0")/.." || exit

if [ ! -f "package.json" ]; then
  echo "Error: package.json not found"
  exit 1
fi

dependencies=$(jq -r '.dependencies | keys | .[]' package.json)
devDependencies=$(jq -r '.devDependencies | keys | .[]' package.json)

allDependencies=($dependencies $devDependencies)
totalDependencies=${#allDependencies[@]}

completed=0

install_dependency() {
  local package="$1"
  npm install "$package"
  completed=$((completed + 1))
  percentage=$((completed * 100 / totalDependencies))
  echo "Progress: $percentage% ($completed/$totalDependencies)"
}

echo "Installing dependencies..."

for package in "${allDependencies[@]}"; do
  install_dependency "$package"
done

echo "All dependencies installed successfully"