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

#Set up mapping of used contracts
declare -A map=( [API]=1 [MyBitToken]=1 [Database]=1 [Events]=1 [ContractManager]=1 [SingleOwned]=1 [Pausible]=1 [Platform]=1 [Operators]=1 [AssetManagerEscrow]=1 [AssetManagerFunds]=1 [CrowdsaleETH]=1 [CrowdsaleERC20]=1 [CrowdsaleGeneratorETH]=1 [CrowdsaleGeneratorERC20]=1 [AssetGenerator]=1 [DividendToken]=1 [DividendTokenERC20]=1 [DivToken]=1 [ERC20]=1)

# Generate raw JSON artifacts into JavaScript modules.
for filename in build/contracts/*.json; do
  filename_base=$(basename $filename .json)
  if [[ ${map["$filename_base"]} ]] ; then
    touch "lib/js/$filename_base.js"
    #echo -e "\"use strict\";\n" > "lib/js/$filename_base.js"
    #echo -e "Object.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n" >> "lib/js/$filename_base.js"
    echo -e "var $filename_base = exports.$filename_base = " >> "lib/js/$filename_base.js"
    echo -e "$(cat lib/js/$filename_base.js){\nabi: " > "lib/js/$filename_base.js"
    cat "build/contracts/$filename_base.json" | jq '.abi' >> "lib/js/$filename_base.js"
    echo -e "$(cat lib/js/$filename_base.js),\nbytecode: " > "lib/js/$filename_base.js"
    cat "build/contracts/$filename_base.json" | jq '.bytecode' >> "lib/js/$filename_base.js"
    echo -e "}" >> "lib/js/$filename_base.js"
    echo -e "var _$filename_base = require(\"./js/$filename_base\");\n" >> "lib/index.js"
    echo -e "Object.defineProperty(exports, \"$filename_base\", {\n\tenumerable: true,\n\tget: function get() {\n\t\treturn _$filename_base.$filename_base;\n\t}\n});\n" >> "lib/index.js"
    echo -e "Generated $filename_base.json into $filename_base.js"
  fi
done
