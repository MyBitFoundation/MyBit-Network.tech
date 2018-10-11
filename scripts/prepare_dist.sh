# Remove old dist/ directory
rm -rf ./dist

# Compile all contracts
truffle compile --all

# Create distribution directory
mkdir -p dist/json dist/js

# Copy compiled contracts into a distribution json file
cp build/contracts/* dist/json/

# Generate raw JSON artifacts into JavaScript modules.
for filename in build/contracts/*.json; do
    filename_base=$(basename $filename .json)
    touch "dist/js/$filename_base.js"
    echo -e "export const $filename_base = " > "dist/js/$filename_base.js"
    cat "build/contracts/$filename_base.json" >> "dist/js/$filename_base.js"
    echo -e "export { $filename_base } from \"./js/$filename_base\";" >> "dist/index.js"
    echo -e "Generated $filename_base.json into $filename_base.js"
done
