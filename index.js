module.exports = {
  "presets": [
    "latest",
    "react",
  ],
  "plugins": [
     // "polyfill": true will polyfill built-ins such as Promise / Set / Symbol ...
    ["transform-runtime", {
      "polyfill": true,
      "regenerator": true
    }],
    "transform-object-assign",
    "transform-decorators-legacy",
    "transform-class-properties",
    "transform-object-rest-spread",
    "transform-flow-strip-types",
    "syntax-flow",
  ]
};
