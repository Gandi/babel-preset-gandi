const factory = require('./factory');

function legacy(context, options) {
  return factory(options);
}

module.exports = legacy;
