module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true,
      "es6": true
    },
    "rules": {
      "no-console": ["error", {"allow": ["warn", "error"]}],
      "indent": [2, 4, {"SwitchCase": 1}],
      "react/jsx-indent-props": [2, 4],
      "react/jsx-indent": [2, 4],
      "linebreak-style": 0,
      "react/prop-types": [2, {"ignore": [], "customValidators": []}],
      "max-len": [2, 100],
      "react/self-closing-comp": ["error", { "component": true, "html": false }],
      "semi": 0,
      "function-paren-newline": 0,
      "react/no-array-index-key": 0,
    },
    "plugins": [
      "react"
    ],
    "globals": {
      "window": false,
      "document": false
    }
};
