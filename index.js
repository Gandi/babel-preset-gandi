module.exports = {
  "presets": [ "es2015", "react" ],
  "plugins": [
     // "polyfill": true will polyfill built-ins such as Promise / Set / Symbol ...
    ["transform-runtime", {
      "polyfill": true,
      "regenerator": true
    }],
    "flow-react-proptypes",
    "transform-async-to-generator",
    "transform-object-assign",
    "transform-decorators-legacy",
    "transform-class-properties",
    "transform-object-rest-spread",
    "transform-flow-strip-types",
    "syntax-flow",
    "syntax-trailing-function-commas",
  ]
};
