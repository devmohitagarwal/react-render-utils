rm -fr dist/*

tsc -p tsconfig.esm.json
tsc -p tsconfig.cjs.json



./scripts/lib.sh