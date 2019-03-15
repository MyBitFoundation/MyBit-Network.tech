# Remove old dist/ directory
rm -rf ./lib

# Compile all contracts
npx truffle compile --all

# Create distribution directory
mkdir -p lib/json lib/js

# Copy compiled contracts into a distribution json file
cp build/contracts/* lib/json/

#Create index.js
echo -e "\"use strict\";\n" > "lib/index.js"
echo -e "Object.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n" >> "lib/index.js"

# Generate raw JSON artifacts into JavaScript modules.
for filename in build/contracts/*.json; do
    filename_base=$(basename $filename .json)
    touch "lib/js/$filename_base.js"
    echo -e "\"use strict\";\n" > "lib/js/$filename_base.js"
    echo -e "Object.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n" >> "lib/js/$filename_base.js"
    echo -e "var $filename_base = exports.$filename_base = " >> "lib/js/$filename_base.js"
    cat "build/contracts/$filename_base.json" >> "lib/js/$filename_base.js"
    echo -e "var _$filename_base = require(\"./js/$filename_base\");\n" >> "lib/index.js"
    echo -e "Object.defineProperty(exports, \"$filename_base\", {\n\tenumerable: true,\n\tget: function get() {\n\t\treturn _$filename_base.$filename_base;\n\t}\n});\n" >> "lib/index.js"
    echo -e "Generated $filename_base.json into $filename_base.js"
done
