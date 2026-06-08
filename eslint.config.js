// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    settings: {
      "import/resolver": {
        typescript: {
          project: "./jsconfig.json"
        }
      }
    },
    rules: {
      "react-hooks/set-state-in-effect": "off"
    }
  }
]);
