Babel preset for Gandi's JavaScript projects
============================================

Includes ES2017+, React, Flow, as well as common transforms and polyfills.

## Installation

``` sh
$ npm install --save-dev @gandi/babel-preset-gandi
```


## Usage

Add the following line to your `.babelrc` file:

``` json
{
  "presets": ["@gandi/gandi"]
}
```

Pass options to `babel-preset-env`

``` json
{
  "presets": [["@gandi/gandi", { "modules": false }]]
}
```

See the [full list of available options](https://github.com/babel/babel-preset-env#options).


## Changelog

All notable changes to this project will be documented in [this section](CHANGELOG.md).

*This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog](http://keepachangelog.com/).*


## Found a bug or contribute?

Please open an [issue](https://github.com/Gandi/babel-preset-gandi/issues). If it's clear and well labelized, it's quicker to fix!

Else you can start contributing.


### Code of conduct

Be nice. Thanks.


### Contributors

_(People who have been involved in @gandi/babel-preset-gandi)_

* Julien Muetton @themouette
* Yann Brelière @yanndinendal
* Alexis Mineaud @cr0cK
* Arthur Gautier @baloo
* Timothée Pillard @ziir
