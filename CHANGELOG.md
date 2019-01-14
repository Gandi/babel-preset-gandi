# Change log

## [Unreleased]

## 3.0.1 - 2019-01-14
### Fixed
  * Fix plugins order and compatibility between `plugin-proposal-decorators` and
    `@babel/plugin-proposal-class-properties` since we are using the `legacy` mode.
    See https://github.com/babel/babel/issues/9297
  * Ensure new Babel helpers won't get inlined by specifying the runtime version we use.
  * Ensure legacy Flow annotations for React props won't get transformed to void
    class properties.
    See https://github.com/babel/babel/issues/8417  
    Wait for https://github.com/babel/babel/pull/9141

## 3.0.0 - 2018-11-26

## 3.0.0-beta.3 - 2018-11-08
### Changed
  - Don't forces `modules` to `false` (esm) by default.
    This follow the preset-env defaults, and might require less changes while upgrading.
  - Set `node` to version `10` in `targets` config.

## 3.0.0-beta.2 - 2018-09-11
### Changed
  - Upgrade to Babel 7 stable.
    **BREAKING** Use new `@babel/runtime-corejs2`.

## 3.0.0-beta.1 - 2018-03-12
### Changed
  - Upgrade to Babel 7 beta.
    **BREAKING** Set modules to `false` (esm) by default. (reverted)

## 2.2.0 - 2018-07-05
### Changed
  - Slightly tweak Browserslist config to exclude "dead" browsers:  
    "browsers from last 2 version query, but with less than 0.5% in global usage statistics
    and without official support or updates for 24 months".                                 

## 2.1.0 - 2018-06-01
### Added
  - Add `babel-plugin-syntax-dynamic-import`.
    Enables using `import('foo/bar')` dynamic import syntax.

### Changed
  - Slightly tweak Browserslist config to include Firefox ESR.

## 2.0.0 - 2017-11-07
### Changed
  - Switch to `babel-preset-env`.
    Remove duplicate or unused transform plugins.

## 2016-10-10
### Changed
  - Enable babel-runtime transform `polyfill` option to polyfill built-ins such as Promise, Set, Symbol etc,
    without polluting the global scope or duplicating helpers.
    https://babeljs.io/docs/plugins/transform-runtime/#technical-details

## 2016-08-24
### Added
  - Add the support of Flow.

## 2016-06-27
### Added
  - Add transform-runtime plugin, allows to not duplicate polyfill transforms.
    Requires babel-runtime as a dependency of your app and a devDependency of your lib.

## 2016-06-09
### Added
  - Adds async keyword support.

## 2016-06-07
### Added
  - Add "babel-plugin-transform-object-assign" to ponyfill Object.assign.

## 2016-03-17
### Fixed
  - Fix transformers order as reported in
    [loganfsmyth/babel-plugin-transform-decorators-legacy#24
    ](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy/issues/24)

## 2016-02-23
### Added
  - Add "babel-plugin-syntax-trailing-function-commas" to support args function trailing commas.
  - Add "babel-preset-es2015"
  - Add "babel-preset-react"
  - Add "babel-preset-react-hmre"
  - Add "babel-plugin-react-transform"

## 2016-01-22
### Added
  - Initial commit.
